"use client";

import {
	startTransition,
	useDeferredValue,
	useEffect,
	useRef,
	useState,
} from "react";

import styles from "./proxy-workspace.module.css";

type TransportKind =
	| "/epoxy/index.mjs"
	| "/libcurl/index.mjs"
	| "/baremod/index.mjs";

type ProxySettings = {
	transport: TransportKind;
	wispUrl: string;
	bareUrl: string;
};

type RecentDestination = {
	label: string;
	url: string;
};

type ScramjetFiles = {
	wasm: string;
	all: string;
	sync: string;
};

type ScramjetControllerInstance = {
	init(): Promise<void> | void;
	createFrame(): ScramjetFrameInstance;
	encodeUrl(url: string): string;
};

type ScramjetFrameInstance = EventTarget & {
	frame: HTMLIFrameElement;
	go(url: string): Promise<void> | void;
	back(): void;
	forward(): void;
	reload(): void;
};

type BareMuxConnectionInstance = {
	setTransport(transport: string, config: unknown[]): Promise<void> | void;
};

type ScramjetWindow = Window & {
	BareMux?: {
		BareMuxConnection: new (workerPath: string) => BareMuxConnectionInstance;
	};
	$scramjetLoadController?: () => {
		ScramjetController: new (config: {
			files: ScramjetFiles;
			flags: Record<string, boolean>;
		}) => ScramjetControllerInstance;
	};
};

const SETTINGS_KEY = "scramjet.console.settings";
const RECENTS_KEY = "scramjet.console.recents";
const SEARCH_ORIGIN = "https://duckduckgo.com/";
const QUICK_LINKS: RecentDestination[] = [
	{ label: "DuckDuckGo", url: SEARCH_ORIGIN },
	{ label: "GitHub", url: "https://github.com" },
	{ label: "Wikipedia", url: "https://wikipedia.org" },
	{ label: "MDN", url: "https://developer.mozilla.org" },
];

function buildSearchUrl(query: string) {
	const url = new URL(SEARCH_ORIGIN);
	url.searchParams.set("q", query);

	return url.toString();
}

function getDefaultSettings(): ProxySettings {
	if (typeof window === "undefined") {
		return {
			transport: "/epoxy/index.mjs",
			wispUrl: "ws://localhost:3000/wisp/",
			bareUrl: "http://localhost:3000/bare/",
		};
	}

	return {
		transport: "/epoxy/index.mjs",
		wispUrl:
			(window.location.protocol === "https:" ? "wss" : "ws") +
			"://" +
			window.location.host +
			"/wisp/",
		bareUrl:
			(window.location.protocol === "https:" ? "https" : "http") +
			"://" +
			window.location.host +
			"/bare/",
	};
}

function readSettings(): ProxySettings {
	if (typeof window === "undefined") {
		return getDefaultSettings();
	}

	try {
		const raw = window.localStorage.getItem(SETTINGS_KEY);
		if (!raw) {
			return getDefaultSettings();
		}

		return {
			...getDefaultSettings(),
			...JSON.parse(raw),
		} as ProxySettings;
	} catch {
		return getDefaultSettings();
	}
}

function readRecents(): RecentDestination[] {
	if (typeof window === "undefined") {
		return [];
	}

	try {
		const raw = window.localStorage.getItem(RECENTS_KEY);

		return raw ? (JSON.parse(raw) as RecentDestination[]) : [];
	} catch {
		return [];
	}
}

function readGlobals(): ScramjetWindow | null {
	const scramjetWindow = window as ScramjetWindow;

	if (
		typeof scramjetWindow.$scramjetLoadController !== "function" ||
		!scramjetWindow.BareMux?.BareMuxConnection
	) {
		return null;
	}

	return scramjetWindow;
}

function normalizeTarget(rawValue: string) {
	const value = rawValue.trim();

	if (!value) {
		return "";
	}

	if (
		value.startsWith("http://") ||
		value.startsWith("https://") ||
		value.startsWith("data:") ||
		value.startsWith("about:")
	) {
		return value;
	}

	if (value.includes(" ")) {
		return buildSearchUrl(value);
	}

	const looksLikeHost =
		value === "localhost" ||
		value.startsWith("localhost:") ||
		value.startsWith("127.0.0.1") ||
		value.startsWith("[::1]") ||
		/^(?:[a-z0-9-]+\.)+[a-z]{2,}(?:[/:?#]|$)/i.test(value);

	if (!looksLikeHost) {
		return buildSearchUrl(value);
	}

	return `https://${value}`;
}

function formatLabel(url: string) {
	try {
		return new URL(url).hostname.replace(/^www\./, "");
	} catch {
		return url;
	}
}

async function applyTransport(
	connection: BareMuxConnectionInstance,
	settings: ProxySettings
) {
	if (settings.transport === "/baremod/index.mjs") {
		await Promise.resolve(
			connection.setTransport(settings.transport, [settings.bareUrl])
		);

		return;
	}

	await Promise.resolve(
		connection.setTransport(settings.transport, [{ wisp: settings.wispUrl }])
	);
}

function buildWelcomePage() {
	const html = `
		<!doctype html>
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>Scramjet Console</title>
				<style>
					body {
						margin: 0;
						min-height: 100vh;
						display: grid;
						place-items: center;
						background:
							radial-gradient(circle at top, rgba(242, 170, 76, 0.22), transparent 28%),
							linear-gradient(180deg, #08131d 0%, #020811 100%);
						color: #f4f7fb;
						font-family: "Segoe UI", sans-serif;
					}

					main {
						max-width: 40rem;
						padding: 2rem;
						border: 1px solid rgba(255, 255, 255, 0.12);
						border-radius: 1.5rem;
						background: rgba(6, 16, 24, 0.84);
						box-shadow: 0 32px 80px rgba(0, 0, 0, 0.32);
					}

					strong {
						color: #f2aa4c;
					}
				</style>
			</head>
			<body>
				<main>
					<h1>Scramjet Console</h1>
					<p><strong>Ready for launch.</strong> Enter a URL above and this frame will proxy it through your local Scramjet runtime.</p>
				</main>
			</body>
		</html>
	`;

	return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}

export function ProxyWorkspace() {
	const [settings, setSettings] = useState<ProxySettings>(getDefaultSettings);
	const [recentDestinations, setRecentDestinations] = useState<
		RecentDestination[]
	>([]);
	const [inputValue, setInputValue] = useState(SEARCH_ORIGIN);
	const [currentUrl, setCurrentUrl] = useState("");
	const [status, setStatus] = useState("Starting workspace");
	const [workerStatus, setWorkerStatus] = useState("Preparing session");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isReady, setIsReady] = useState(false);
	const [isNavigating, setIsNavigating] = useState(false);
	const [settingsHydrated, setSettingsHydrated] = useState(false);

	const deferredInput = useDeferredValue(inputValue);
	const mountRef = useRef<HTMLDivElement | null>(null);
	const controllerRef = useRef<ScramjetControllerInstance | null>(null);
	const frameRef = useRef<ScramjetFrameInstance | null>(null);
	const connectionRef = useRef<BareMuxConnectionInstance | null>(null);
	const settingsRef = useRef(settings);
	const transportReadyRef = useRef<Promise<void> | null>(null);

	settingsRef.current = settings;

	useEffect(() => {
		setSettings(readSettings());
		setRecentDestinations(readRecents());
		setSettingsHydrated(true);
	}, []);

	useEffect(() => {
		if (!settingsHydrated) {
			return;
		}

		window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
	}, [settings, settingsHydrated]);

	useEffect(() => {
		if (!settingsHydrated) {
			return;
		}

		window.localStorage.setItem(
			RECENTS_KEY,
			JSON.stringify(recentDestinations)
		);
	}, [recentDestinations, settingsHydrated]);

	useEffect(() => {
		if (!settingsHydrated) {
			return;
		}

		let disposed = false;
		let retryTimer: number | undefined;

		const boot = async () => {
			const globals = readGlobals();
			if (!globals) {
				retryTimer = window.setTimeout(boot, 120);

				return;
			}

			try {
				setStatus("Starting workspace");
				await navigator.serviceWorker.register("/sw.js", { scope: "/" });
				await navigator.serviceWorker.ready;
				if (disposed) {
					return;
				}

				setWorkerStatus(
					navigator.serviceWorker.controller
						? "Session ready"
						: "Preparing session"
				);

				setStatus("Loading browser");
				const { ScramjetController } = globals.$scramjetLoadController!();
				const controller = new ScramjetController({
					files: {
						wasm: "/scram/scramjet.wasm.wasm",
						all: "/scram/scramjet.all.js",
						sync: "/scram/scramjet.sync.js",
					},
					flags: {
						rewriterLogs: false,
						scramitize: false,
						cleanErrors: true,
						sourcemaps: false,
					},
				});

				await Promise.resolve(controller.init());
				if (disposed) {
					return;
				}

				const connection = new globals.BareMux!.BareMuxConnection(
					"/baremux/worker.js"
				);
				setStatus("Connecting");
				const transportPromise = applyTransport(
					connection,
					settingsRef.current
				);
				transportReadyRef.current = transportPromise;
				await transportPromise;
				if (disposed) {
					return;
				}

				setStatus("Opening browser");
				const frame = controller.createFrame();
				frame.frame.className = styles.proxyFrame;
				frame.frame.setAttribute("title", "OmniEdu browser viewport");
				frame.frame.setAttribute("allow", "clipboard-read; clipboard-write");

				const handleUrlChange = (event: Event) => {
					const nextUrl =
						(
							event as Event & {
								url?: string;
							}
						).url ?? "";

					if (!nextUrl) {
						return;
					}

					startTransition(() => {
						setCurrentUrl(nextUrl);
						setInputValue(nextUrl);
					});
				};

				frame.addEventListener("urlchange", handleUrlChange);

				mountRef.current?.replaceChildren(frame.frame);
				await Promise.resolve(frame.go(buildWelcomePage()));

				controllerRef.current = controller;
				frameRef.current = frame;
				connectionRef.current = connection;
				setStatus("Ready");
				setIsReady(true);
			} catch (error) {
				setErrorMessage(
					error instanceof Error ? error.message : "Failed to start OmniEdu."
				);
				setStatus("Attention needed");
			}
		};

		void boot();

		return () => {
			disposed = true;
			if (retryTimer) {
				window.clearTimeout(retryTimer);
			}
			mountRef.current?.replaceChildren();
		};
	}, [settingsHydrated]);

	useEffect(() => {
		if (!connectionRef.current) {
			return;
		}

		const transportPromise = applyTransport(connectionRef.current, settings);
		transportReadyRef.current = transportPromise;
		void transportPromise.then(() => {
			if (settingsRef.current === settings) {
				setStatus("Ready");
			}
		});
	}, [settings]);

	const rememberDestination = (url: string) => {
		const nextEntry = {
			label: formatLabel(url),
			url,
		};

		startTransition(() => {
			setRecentDestinations((current) => {
				const deduped = current.filter((entry) => entry.url !== url);

				return [nextEntry, ...deduped].slice(0, 6);
			});
		});
	};

	const navigateTo = async (rawTarget = inputValue) => {
		if (!frameRef.current) {
			return;
		}

		const nextTarget = normalizeTarget(rawTarget);
		if (!nextTarget) {
			return;
		}

		setIsNavigating(true);
		setErrorMessage(null);
		setStatus("Opening");

		try {
			if (transportReadyRef.current) {
				await transportReadyRef.current;
			}
			await Promise.resolve(frameRef.current.go(nextTarget));
			rememberDestination(nextTarget);
			startTransition(() => {
				setCurrentUrl(nextTarget);
				setInputValue(nextTarget);
			});
			setStatus("Console ready");
		} catch (error) {
			setErrorMessage(
				error instanceof Error ? error.message : "Navigation failed."
			);
			setStatus("Navigation failed");
		} finally {
			setIsNavigating(false);
		}
	};

	const openExternal = () => {
		if (!controllerRef.current) {
			return;
		}

		const target = normalizeTarget(inputValue);
		if (!target) {
			return;
		}

		window.open(controllerRef.current.encodeUrl(target), "_blank", "noopener");
	};

	const previewLabel = deferredInput
		? formatLabel(normalizeTarget(deferredInput))
		: "awaiting target";

	return (
		<main className={styles.shell}>
			<div className={styles.aurora} />
			<section className={styles.hero}>
				<div className={styles.brandColumn}>
					<p className={styles.kicker}>OmniEdu workspace</p>
					<h1>Open pages from one simple browser view.</h1>
					<p className={styles.lede}>
						Search, open, and revisit pages without leaving the workspace.
					</p>
				</div>
				<div className={styles.heroCard}>
					<div className={styles.metric}>
						<span>Status</span>
						<strong>{isReady ? "Ready" : "Starting"}</strong>
					</div>
					<div className={styles.metric}>
						<span>Session</span>
						<strong>{currentUrl ? "Live" : "Idle"}</strong>
					</div>
					<div className={styles.metric}>
						<span>Preview</span>
						<strong>{previewLabel}</strong>
					</div>
				</div>
			</section>

			<section className={styles.workspace}>
				<aside className={styles.sidebar}>
					<div className={styles.panel}>
						<p className={styles.panelLabel}>Launch deck</p>
						<div className={styles.quickList}>
							{QUICK_LINKS.map((entry) => (
								<button
									key={entry.url}
									type="button"
									className={styles.quickLink}
									onClick={() => void navigateTo(entry.url)}
								>
									<span>{entry.label}</span>
									<small>{formatLabel(entry.url)}</small>
								</button>
							))}
						</div>
					</div>

					<div className={styles.panel}>
						<p className={styles.panelLabel}>Recent routes</p>
						<div className={styles.quickList}>
							{recentDestinations.length === 0 ? (
								<p className={styles.emptyState}>
									Destinations you open here will appear for one-click relaunch.
								</p>
							) : (
								recentDestinations.map((entry) => (
									<button
										key={entry.url}
										type="button"
										className={styles.quickLink}
										onClick={() => void navigateTo(entry.url)}
									>
										<span>{entry.label}</span>
										<small>{entry.url}</small>
									</button>
								))
							)}
						</div>
					</div>
				</aside>

				<section className={styles.consoleColumn}>
					<div className={styles.consolePanel}>
						<div className={styles.statusRow}>
							<div>
								<p className={styles.panelLabel}>Browser</p>
								<h2>Open pages inside OmniEdu</h2>
							</div>
							<div className={styles.badges}>
								<span className={styles.badge}>{status}</span>
								<span className={styles.badgeMuted}>{workerStatus}</span>
							</div>
						</div>

						<form
							className={styles.omnibox}
							onSubmit={(event) => {
								event.preventDefault();
								void navigateTo();
							}}
						>
							<div className={styles.controls}>
								<button
									type="button"
									onClick={() => frameRef.current?.back()}
									disabled={!isReady}
								>
									Back
								</button>
								<button
									type="button"
									onClick={() => frameRef.current?.forward()}
									disabled={!isReady}
								>
									Forward
								</button>
								<button
									type="button"
									onClick={() => frameRef.current?.reload()}
									disabled={!isReady}
								>
									Reload
								</button>
							</div>
							<input
								className={styles.addressBar}
								value={inputValue}
								onChange={(event) => setInputValue(event.target.value)}
								placeholder="Enter a URL or search query"
								autoCapitalize="off"
								autoCorrect="off"
								autoComplete="off"
								spellCheck={false}
							/>
							<div className={styles.actions}>
								<button type="submit" disabled={!isReady || isNavigating}>
									{isNavigating ? "Opening..." : "Launch"}
								</button>
								<button
									type="button"
									onClick={openExternal}
									disabled={!isReady}
								>
									New tab
								</button>
							</div>
						</form>

						<div className={styles.metaRow}>
							<p>
								Current route:
								<span>{currentUrl || " idle"}</span>
							</p>
							<a href="/api/health" target="_blank" rel="noreferrer">
								Health check
							</a>
						</div>

						{errorMessage ? (
							<div className={styles.errorBanner}>{errorMessage}</div>
						) : null}
					</div>

					<div className={styles.viewportPanel}>
						<div className={styles.viewportChrome}>
							<span />
							<span />
							<span />
						</div>
						<div className={styles.viewport}>
							<div ref={mountRef} className={styles.frameMount} />
							{!isReady ? (
								<div className={styles.loadingState}>
									<p>Preparing the Scramjet frame and transport stack...</p>
								</div>
							) : null}
						</div>
					</div>
				</section>
			</section>
		</main>
	);
}
