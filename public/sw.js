if (navigator.userAgent.includes("Firefox")) {
	Object.defineProperty(globalThis, "crossOriginIsolated", {
		value: true,
		writable: false,
	});
}

importScripts("/scram/scramjet.all.js");
const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();
const APP_CACHE = "omniedu-shell-v6";
const ADBLOCK_CACHE_HEADER = "no-store, max-age=0";
const ADBLOCK_HOST_SUFFIXES = [
	"2mdn.net",
	"adnxs.com",
	"adsafeprotected.com",
	"adsrvr.org",
	"adservice.google.com",
	"amazon-adsystem.com",
	"casalemedia.com",
	"criteo.com",
	"criteo.net",
	"doubleclick.net",
	"googlesyndication.com",
	"googletagservices.com",
	"googleadservices.com",
	"hotjar.com",
	"moatads.com",
	"openx.net",
	"outbrain.com",
	"pubmatic.com",
	"quantserve.com",
	"rubiconproject.com",
	"scorecardresearch.com",
	"taboola.com",
	"tracking-protection.cdn.mozilla.net",
	"yieldmo.com",
];
const ADBLOCK_EXACT_HOSTS = new Set([
	"analytics.google.com",
	"pagead2.googlesyndication.com",
	"securepubads.g.doubleclick.net",
	"stats.g.doubleclick.net",
	"www.googleadservices.com",
]);
const ADBLOCK_PATH_PATTERNS = [
	/(^|[/?&_.-])(adserver|adservice|advertising|advertisement|doubleclick|googlesyndication|prebid)([/?&_.=-]|$)/i,
	/(^|[/?&_.-])(banner-?ad|display-?ad|native-?ad|sponsored-?ad)([/?&_.=-]|$)/i,
	/(^|[/?&_.-])(tracking|tracker|pixel|beacon)([/?&_.=-]|$)/i,
];
const APP_SHELL_ROUTES = [
	"/",
	"/dashboard",
	"/learn",
	"/proxy",
	"/sign-in",
	"/pricing",
	"/manifest.webmanifest",
	"/assets/omniedu-logo.png",
];

async function warmShellCache() {
	const cache = await caches.open(APP_CACHE);
	await cache.addAll(APP_SHELL_ROUTES);
}

function shouldHandleScramjetRequest(requestUrl) {
	const prefix = scramjet.config?.prefix ?? "/scramjet/";
	const wasmPath = scramjet.config?.files?.wasm ?? "/scram/scramjet.wasm.wasm";

	return (
		requestUrl.href.startsWith(location.origin + prefix) ||
		requestUrl.href.startsWith(location.origin + wasmPath)
	);
}

function isBlockedHost(hostname) {
	const normalizedHost = hostname.toLowerCase();

	return (
		ADBLOCK_EXACT_HOSTS.has(normalizedHost) ||
		ADBLOCK_HOST_SUFFIXES.some(
			(suffix) =>
				normalizedHost === suffix || normalizedHost.endsWith(`.${suffix}`)
		)
	);
}

function isBlockedProxyRequest(url) {
	if (isBlockedHost(url.hostname)) {
		return true;
	}

	const pathAndQuery = `${url.pathname}${url.search}`;

	return ADBLOCK_PATH_PATTERNS.some((pattern) => pattern.test(pathAndQuery));
}

function createBlockedResponse(destination) {
	const headers = {
		"cache-control": ADBLOCK_CACHE_HEADER,
		"content-type": "text/plain; charset=utf-8",
	};
	let body = "";

	if (destination === "script" || destination === "worker") {
		headers["content-type"] = "application/javascript; charset=utf-8";
		body = "/* blocked by OmniEdu */";
	} else if (destination === "style") {
		headers["content-type"] = "text/css; charset=utf-8";
		body = "/* blocked by OmniEdu */";
	} else if (destination === "image") {
		headers["content-type"] = "image/svg+xml; charset=utf-8";
		body = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>';
	} else if (destination === "document" || destination === "iframe") {
		headers["content-type"] = "text/html; charset=utf-8";
		body = "<!doctype html><title></title>";
	}

	const response = new Response(body, {
		status: 204,
		statusText: "No Content",
		headers,
	});

	response.rawHeaders = headers;
	response.rawResponse = {
		body: response.body,
		headers,
		status: response.status,
		statusText: response.statusText,
	};

	return response;
}

function createNetworkFallbackResponse(destination) {
	if (destination === "image") {
		return new Response(
			'<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>',
			{
				status: 200,
				headers: {
					"cache-control": ADBLOCK_CACHE_HEADER,
					"content-type": "image/svg+xml; charset=utf-8",
				},
			}
		);
	}

	if (destination === "script" || destination === "worker") {
		return new Response("/* network fallback */", {
			status: 200,
			headers: {
				"cache-control": ADBLOCK_CACHE_HEADER,
				"content-type": "application/javascript; charset=utf-8",
			},
		});
	}

	if (destination === "style") {
		return new Response("/* network fallback */", {
			status: 200,
			headers: {
				"cache-control": ADBLOCK_CACHE_HEADER,
				"content-type": "text/css; charset=utf-8",
			},
		});
	}

	return new Response(null, {
		status: 204,
		statusText: "No Content",
		headers: {
			"cache-control": ADBLOCK_CACHE_HEADER,
		},
	});
}

async function handleOmniEduShell(event) {
	if (event.request.method !== "GET") {
		try {
			return await fetch(event.request);
		} catch {
			return createNetworkFallbackResponse(event.request.destination);
		}
	}

	const requestUrl = new URL(event.request.url);
	if (requestUrl.origin !== location.origin) {
		try {
			return await fetch(event.request);
		} catch {
			return createNetworkFallbackResponse(event.request.destination);
		}
	}

	const cache = await caches.open(APP_CACHE);

	try {
		const response = await fetch(event.request);
		if (
			response.ok &&
			(event.request.mode === "navigate" ||
				APP_SHELL_ROUTES.includes(requestUrl.pathname))
		) {
			await cache.put(event.request, response.clone());
		}
		return response;
	} catch {
		return (
			(await cache.match(event.request)) ||
			(await cache.match("/")) ||
			new Response("Offline", { status: 503 })
		);
	}
}

async function handleRequest(event) {
	try {
		const requestUrl = new URL(event.request.url);

		if (shouldHandleScramjetRequest(requestUrl)) {
			await scramjet.loadConfig();
			if (scramjet.config && scramjet.route(event)) {
				return await scramjet.fetch(event);
			}
		}

		return await handleOmniEduShell(event);
	} catch (error) {
		const message =
			error instanceof Error ? error.stack || error.message : String(error);
		console.error("OmniEdu service worker request failure", message);

		return new Response(`OmniEdu proxy error\n\n${message}`, {
			status: 502,
			headers: {
				"content-type": "text/plain; charset=utf-8",
			},
		});
	}
}

self.addEventListener("install", (event) => {
	event.waitUntil(warmShellCache());
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		(async () => {
			const cacheKeys = await caches.keys();
			await Promise.all(
				cacheKeys
					.filter((key) => key !== APP_CACHE)
					.map((key) => caches.delete(key))
			);
			await self.clients.claim();
		})()
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event));
});

let playgroundData;
self.addEventListener("message", ({ data }) => {
	if (data.type === "playgroundData") {
		playgroundData = data;
	}
});

scramjet.addEventListener("request", (event) => {
	if (!playgroundData || !event.url.href.startsWith(playgroundData.origin)) {
		return;
	}

	const headers = {};
	const origin = playgroundData.origin;
	if (event.url.href === origin + "/") {
		headers["content-type"] = "text/html";
		event.response = new Response(playgroundData.html, {
			headers,
		});
	} else if (event.url.href === origin + "/style.css") {
		headers["content-type"] = "text/css";
		event.response = new Response(playgroundData.css, {
			headers,
		});
	} else if (event.url.href === origin + "/script.js") {
		headers["content-type"] = "application/javascript";
		event.response = new Response(playgroundData.js, {
			headers,
		});
	} else {
		event.response = new Response("empty response", {
			headers,
		});
	}

	event.response.rawHeaders = headers;
	event.response.rawResponse = {
		body: event.response.body,
		headers,
		status: event.response.status,
		statusText: event.response.statusText,
	};
	event.response.finalURL = event.url.toString();
});
