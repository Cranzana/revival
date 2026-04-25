const localHosts = new Set(["localhost", "127.0.0.1"]);
const platformDomains = [".fly.dev"];

function getConfiguredAppHost() {
	if (!process.env.NEXT_PUBLIC_APP_URL) {
		return null;
	}

	try {
		return new URL(process.env.NEXT_PUBLIC_APP_URL).hostname.toLowerCase();
	} catch {
		return null;
	}
}

export function getTenantFromHost(hostname: string | null | undefined) {
	if (!hostname) {
		return null;
	}

	const normalizedHost = hostname.split(":")[0].toLowerCase();
	if (localHosts.has(normalizedHost)) {
		return null;
	}

	const appHost = getConfiguredAppHost();
	if (appHost && normalizedHost === appHost) {
		return null;
	}

	if (platformDomains.some((domain) => normalizedHost.endsWith(domain))) {
		return null;
	}

	const segments = normalizedHost.split(".");
	if (segments.length < 3) {
		return null;
	}

	const [subdomain] = segments;
	if (!subdomain || subdomain === "www") {
		return null;
	}

	return subdomain;
}
