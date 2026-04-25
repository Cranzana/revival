"use client";

import { startTransition, useEffect, useMemo, useRef, useState } from "react";

import styles from "./browser-hub.module.css";

type TransportKind =
	| "/epoxy/index.mjs"
	| "/libcurl/index.mjs"
	| "/baremod/index.mjs";

type ProxySettings = {
	transport: TransportKind;
	wispUrl: string;
	bareUrl: string;
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

type BrowserTab = {
	id: string;
	title: string;
	url: string;
	faviconUrl: string | null;
};

type ShortcutKind = "games" | "movies" | "music";

type ShortcutItem = {
	kind: ShortcutKind;
	label: string;
	url: string;
};

const SHORTCUTS: ShortcutItem[] = [
	{
		kind: "games",
		label: "Games",
		url: "https://www.crazygames.com/",
	},
	{
		kind: "movies",
		label: "Movies",
		url: "https://cineby.sc/",
	},
	{
		kind: "music",
		label: "Music",
		url: "https://open.spotify.com/",
	},
];

const SETTINGS_KEY = "omniedu.browser.settings";
const SW_RELOAD_KEY = "omniedu.sw.control-reload";

function createStartTab(id: string): BrowserTab {
	return {
		id,
		title: "Start",
		url: "",
		faviconUrl: null,
	};
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
		return `https://www.google.com/search?q=${encodeURIComponent(value)}`;
	}

	const looksLikeHost =
		value === "localhost" ||
		value.startsWith("localhost:") ||
		value.startsWith("127.0.0.1") ||
		value.startsWith("[::1]") ||
		/^(?:[a-z0-9-]+\.)+[a-z]{2,}(?:[/:?#]|$)/i.test(value);

	if (!looksLikeHost) {
		return `https://www.google.com/search?q=${encodeURIComponent(value)}`;
	}

	return `https://${value}`;
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
				<title>OmniEdu</title>
				<style>
					body {
						margin: 0;
						min-height: 100vh;
						display: grid;
						place-items: center;
						background: radial-gradient(circle at top, rgba(137, 94, 255, 0.12), transparent 34%), linear-gradient(180deg, #11131d 0%, #090b12 100%);
						color: #f1f4fb;
						font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
					}
					main {
						width: min(30rem, calc(100vw - 3rem));
						padding: 2rem;
						border: 1px solid rgba(255, 255, 255, 0.08);
						border-radius: 24px;
						background: rgba(24, 27, 39, 0.82);
						box-shadow: 0 24px 60px rgba(0, 0, 0, 0.34);
						text-align: center;
					}
					h1 {
						margin: 0 0 0.7rem;
						font-size: 2rem;
					}
					p {
						margin: 0;
						color: rgba(241, 244, 251, 0.68);
					}
				</style>
			</head>
			<body>
				<main>
					<h1>OmniEdu</h1>
					<p>Search above or enter a URL.</p>
				</main>
			</body>
		</html>
	`;

	return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}

function describeWorkspace(url: string) {
	if (!url) {
		return "Start";
	}

	try {
		const parsed = new URL(url);

		return parsed.hostname.replace(/^www\./, "");
	} catch {
		return "Live";
	}
}

function describeLoadingState(workerStatus: string) {
	switch (workerStatus) {
		case "installing":
		case "claiming":
			return "Preparing your session";
		case "attached":
			return "Almost there";
		default:
			return "Starting OmniEdu";
	}
}

function getFaviconUrl(url: string) {
	if (!url) {
		return null;
	}

	try {
		const parsed = new URL(url);

		if (parsed.protocol === "http:" || parsed.protocol === "https:") {
			return new URL("/favicon.ico", parsed.origin).toString();
		}
	} catch {
		return null;
	}

	return null;
}

function buildTabBadge(title: string) {
	return title.slice(0, 2).toUpperCase();
}

function BackIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="M10.75 4.75 5.5 10l5.25 5.25"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
			<path
				d="M6 10h8.5"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function ForwardIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="M9.25 4.75 14.5 10l-5.25 5.25"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
			<path
				d="M14 10H5.5"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function ReloadIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="M15.1 7.4A6 6 0 1 0 16 10"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
			<path
				d="M12.25 4.9h3.35v3.35"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function PlusIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="M10 4.5v11M4.5 10h11"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function SidebarIcon({ collapsed }: { collapsed: boolean }) {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<rect
				x="3.75"
				y="4.25"
				width="12.5"
				height="11.5"
				rx="2"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
			/>
			<path
				d={collapsed ? "M8 4.5v11" : "M11.75 4.5v11"}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.6"
			/>
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="m5.5 5.5 9 9m0-9-9 9"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function HomeIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="m4.75 9.25 5.25-4.5 5.25 4.5v5.5H11.9v-3.3H8.1v3.3H4.75z"
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function GamepadIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="M6.5 8h7A3.5 3.5 0 0 1 17 11.5v1.75a2 2 0 0 1-3.3 1.52l-1.4-1.2H7.7l-1.4 1.2A2 2 0 0 1 3 13.25V11.5A3.5 3.5 0 0 1 6.5 8Z"
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
			<path
				d="M6.5 11.25h2.6M7.8 9.95v2.6"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.7"
			/>
			<path
				d="M12.95 10.85h.05M14.75 12.45h.05"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="2.4"
			/>
			<path
				d="M8.5 8V6.75a1.25 1.25 0 0 1 2.5 0V8"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.7"
			/>
		</svg>
	);
}

function MovieIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<rect
				x="4"
				y="5"
				width="12"
				height="10"
				rx="1.8"
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
			<path
				d="M7 5v10M13 5v10M4 8h3M4 12h3M13 8h3M13 12h3"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

function MusicIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="M8 13.25a2 2 0 1 1-1-1.73V5.75l7-1.5v7.5a2 2 0 1 1-1-1.73V7.05l-5 1.08Z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</svg>
	);
}

function ExternalIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path
				d="M8 5.25H5.75A1.5 1.5 0 0 0 4.25 6.75v7.5a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V12"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
			<path
				d="M11 4.25h4.75V9"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.8"
			/>
			<path
				d="M9.25 10.75 15.5 4.5"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function ShortcutIcon({ kind }: { kind: ShortcutKind }) {
	switch (kind) {
		case "movies":
			return <MovieIcon />;
		case "music":
			return <MusicIcon />;
		default:
			return <GamepadIcon />;
	}
}

async function waitForServiceWorkerControl(timeoutMs = 2500) {
	if (navigator.serviceWorker.controller) {
		window.sessionStorage.removeItem(SW_RELOAD_KEY);

		return true;
	}

	const gainedControl = await new Promise<boolean>((resolve) => {
		const timeout = window.setTimeout(() => {
			navigator.serviceWorker.removeEventListener(
				"controllerchange",
				handleControllerChange
			);
			resolve(false);
		}, timeoutMs);

		function handleControllerChange() {
			window.clearTimeout(timeout);
			navigator.serviceWorker.removeEventListener(
				"controllerchange",
				handleControllerChange
			);
			resolve(true);
		}

		navigator.serviceWorker.addEventListener(
			"controllerchange",
			handleControllerChange
		);
	});

	if (gainedControl) {
		window.sessionStorage.removeItem(SW_RELOAD_KEY);

		return true;
	}

	if (!window.sessionStorage.getItem(SW_RELOAD_KEY)) {
		window.sessionStorage.setItem(SW_RELOAD_KEY, "1");
		window.location.reload();
	}

	return false;
}

export function BrowserHub() {
	const [settings, setSettings] = useState<ProxySettings | null>(null);
	const [tabs, setTabs] = useState<BrowserTab[]>([createStartTab("tab-1")]);
	const [activeTabId, setActiveTabId] = useState("tab-1");
	const [inputValue, setInputValue] = useState("");
	const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
	const [workerStatus, setWorkerStatus] = useState("waiting");
	const [isReady, setIsReady] = useState(false);
	const [showSplash, setShowSplash] = useState(true);
	const [isSplashLeaving, setIsSplashLeaving] = useState(false);
	const [isNavigating, setIsNavigating] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [faviconFailures, setFaviconFailures] = useState<
		Record<string, boolean>
	>({});

	const splashStartedAtRef = useRef<number | null>(null);
	const mountRef = useRef<HTMLDivElement | null>(null);
	const searchInputRef = useRef<HTMLInputElement | null>(null);
	const frameMapRef = useRef<Map<string, ScramjetFrameInstance>>(new Map());
	const controllerRef = useRef<ScramjetControllerInstance | null>(null);
	const transportReadyRef = useRef<Promise<void> | null>(null);
	const nextTabNumberRef = useRef(2);
	const activeTabIdRef = useRef(activeTabId);

	const activeTab = useMemo(
		() => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
		[tabs, activeTabId]
	);

	const currentUrl = activeTab?.url ?? "";
	const currentTitle = activeTab?.title ?? "Start";
	const loadingLabel = describeLoadingState(workerStatus);

	useEffect(() => {
		splashStartedAtRef.current = window.performance.now();
	}, []);

	useEffect(() => {
		if (!isReady && !errorMessage) {
			return;
		}

		const startedAt = splashStartedAtRef.current ?? window.performance.now();
		const elapsed = window.performance.now() - startedAt;
		const delay = Math.max(0, 900 - elapsed);
		let removeTimer: number | undefined;
		const leaveTimer = window.setTimeout(() => {
			setIsSplashLeaving(true);
			removeTimer = window.setTimeout(() => setShowSplash(false), 220);
		}, delay);

		return () => {
			window.clearTimeout(leaveTimer);
			if (removeTimer) {
				window.clearTimeout(removeTimer);
			}
		};
	}, [isReady, errorMessage]);

	useEffect(() => {
		activeTabIdRef.current = activeTabId;
	}, [activeTabId]);

	useEffect(() => {
		setSettings(readSettings());
	}, []);

	useEffect(() => {
		if (!settings) {
			return;
		}

		window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
	}, [settings]);

	useEffect(() => {
		setInputValue(currentUrl);
	}, [currentUrl]);

	const syncTab = (tabId: string, url: string) => {
		setFaviconFailures((previousFailures) => {
			if (!(tabId in previousFailures)) {
				return previousFailures;
			}

			const nextFailures = { ...previousFailures };
			delete nextFailures[tabId];

			return nextFailures;
		});

		setTabs((previousTabs) =>
			previousTabs.map((tab) =>
				tab.id === tabId
					? {
							...tab,
							url,
							title: describeWorkspace(url),
							faviconUrl: getFaviconUrl(url),
						}
					: tab
			)
		);
	};

	const updateFrameVisibility = (visibleTabId: string) => {
		for (const [tabId, frame] of frameMapRef.current.entries()) {
			frame.frame.className =
				tabId === visibleTabId
					? `${styles.proxyFrame} ${styles.proxyFrameActive}`
					: `${styles.proxyFrame} ${styles.proxyFrameHidden}`;
		}
	};

	const getFrameForTab = (tabId: string) =>
		frameMapRef.current.get(tabId) ?? null;

	const createFrameForTab = async (tab: BrowserTab) => {
		if (!controllerRef.current || !mountRef.current) {
			return null;
		}

		const existingFrame = getFrameForTab(tab.id);
		if (existingFrame) {
			return existingFrame;
		}

		const frame = controllerRef.current.createFrame();
		frame.frame.className = `${styles.proxyFrame} ${styles.proxyFrameHidden}`;
		frame.frame.setAttribute("title", `OmniEdu workspace ${tab.id}`);
		frame.frame.setAttribute("allow", "clipboard-read; clipboard-write");

		frame.addEventListener("urlchange", (event: Event) => {
			const nextUrl =
				(
					event as Event & {
						url?: string;
					}
				).url ?? "";

			if (!nextUrl || nextUrl.startsWith("data:text/html")) {
				return;
			}

			startTransition(() => {
				syncTab(tab.id, nextUrl);
				if (activeTabIdRef.current === tab.id) {
					setInputValue(nextUrl);
				}
			});
		});

		mountRef.current.appendChild(frame.frame);
		frameMapRef.current.set(tab.id, frame);

		if (tab.url) {
			await Promise.resolve(frame.go(tab.url));
		} else {
			await Promise.resolve(frame.go(buildWelcomePage()));
		}

		return frame;
	};

	const loadTab = async (tab: BrowserTab) => {
		if (!isReady) {
			return;
		}

		setErrorMessage(null);
		const frame = await createFrameForTab(tab);
		if (!frame) {
			return;
		}
		updateFrameVisibility(tab.id);
	};

	useEffect(() => {
		if (!settings) {
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
				setWorkerStatus("installing");
				await navigator.serviceWorker.register("/sw.js", {
					scope: "/",
					updateViaCache: "none",
				});
				await navigator.serviceWorker.ready;

				if (disposed) {
					return;
				}

				setWorkerStatus("claiming");
				const hasController = await waitForServiceWorkerControl();
				if (disposed || !hasController) {
					setErrorMessage("Worker control never attached.");

					return;
				}

				setWorkerStatus("attached");

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
				const transportPromise = applyTransport(connection, settings);
				transportReadyRef.current = transportPromise;
				await transportPromise;

				if (disposed) {
					return;
				}

				controllerRef.current = controller;
				setErrorMessage(null);
				setIsReady(true);
				await createFrameForTab(createStartTab("tab-1"));
				updateFrameVisibility("tab-1");
				window.setTimeout(() => searchInputRef.current?.focus(), 0);
			} catch (error) {
				setErrorMessage(
					error instanceof Error ? error.message : "Failed to initialize."
				);
			}
		};

		void boot();

		return () => {
			disposed = true;
			if (retryTimer) {
				window.clearTimeout(retryTimer);
			}
			frameMapRef.current.clear();
			mountRef.current?.replaceChildren();
		};
	}, [settings]);

	const navigateTo = async (target = inputValue) => {
		if (!isReady || !activeTab) {
			return;
		}

		const nextTarget = normalizeTarget(target);
		if (!nextTarget) {
			return;
		}

		setIsNavigating(true);
		setErrorMessage(null);

		try {
			if (transportReadyRef.current) {
				await transportReadyRef.current;
			}

			const frame = await createFrameForTab(activeTab);
			if (!frame) {
				return;
			}

			updateFrameVisibility(activeTab.id);
			await Promise.resolve(frame.go(nextTarget));
			startTransition(() => {
				syncTab(activeTab.id, nextTarget);
				setInputValue(nextTarget);
			});
		} catch (error) {
			setErrorMessage(
				error instanceof Error ? error.message : "Navigation failed."
			);
		} finally {
			setIsNavigating(false);
		}
	};

	const createTab = async () => {
		const nextId = `tab-${nextTabNumberRef.current++}`;
		const nextTab = createStartTab(nextId);

		setTabs((previousTabs) => [...previousTabs, nextTab]);
		activeTabIdRef.current = nextId;
		setActiveTabId(nextId);
		setInputValue("");

		if (!isReady) {
			return;
		}

		await loadTab(nextTab);
		window.setTimeout(() => searchInputRef.current?.focus(), 0);
	};

	const openShortcut = async (shortcut: ShortcutItem) => {
		if (!isReady) {
			return;
		}

		const target = normalizeTarget(shortcut.url);
		const nextId = `tab-${nextTabNumberRef.current++}`;
		const nextTab: BrowserTab = {
			id: nextId,
			title: describeWorkspace(target),
			url: target,
			faviconUrl: getFaviconUrl(target),
		};

		setTabs((previousTabs) => [...previousTabs, nextTab]);
		activeTabIdRef.current = nextId;
		setActiveTabId(nextId);
		setInputValue(target);
		setIsNavigating(true);
		setErrorMessage(null);

		try {
			if (transportReadyRef.current) {
				await transportReadyRef.current;
			}

			await loadTab(nextTab);
		} catch (error) {
			setErrorMessage(
				error instanceof Error ? error.message : "Shortcut failed to open."
			);
		} finally {
			setIsNavigating(false);
		}
	};

	const selectTab = async (tabId: string) => {
		if (tabId === activeTabId) {
			return;
		}

		const nextTab = tabs.find((tab) => tab.id === tabId);
		if (!nextTab) {
			return;
		}

		activeTabIdRef.current = tabId;
		setActiveTabId(tabId);
		setInputValue(nextTab.url);
		await loadTab(nextTab);
	};

	const closeTab = async (tabId: string) => {
		if (tabs.length === 1) {
			const resetTab = createStartTab(tabId);
			setTabs([resetTab]);
			setFaviconFailures({});
			activeTabIdRef.current = tabId;
			setActiveTabId(tabId);
			setInputValue("");
			frameMapRef.current.get(tabId)?.frame.remove();
			frameMapRef.current.delete(tabId);
			await loadTab(resetTab);
			window.setTimeout(() => searchInputRef.current?.focus(), 0);

			return;
		}

		const index = tabs.findIndex((tab) => tab.id === tabId);
		if (index === -1) {
			return;
		}

		const remainingTabs = tabs.filter((tab) => tab.id !== tabId);
		const fallbackTab = remainingTabs[Math.max(0, index - 1)];
		frameMapRef.current.get(tabId)?.frame.remove();
		frameMapRef.current.delete(tabId);
		setFaviconFailures((previousFailures) => {
			if (!(tabId in previousFailures)) {
				return previousFailures;
			}

			const nextFailures = { ...previousFailures };
			delete nextFailures[tabId];

			return nextFailures;
		});

		setTabs(remainingTabs);

		if (activeTabId === tabId && fallbackTab) {
			activeTabIdRef.current = fallbackTab.id;
			setActiveTabId(fallbackTab.id);
			setInputValue(fallbackTab.url);
			await loadTab(fallbackTab);
		}
	};

	const goHome = async () => {
		if (!activeTab) {
			return;
		}

		const resetTab = {
			...activeTab,
			title: "Start",
			url: "",
			faviconUrl: null,
		};

		setTabs((previousTabs) =>
			previousTabs.map((tab) => (tab.id === activeTab.id ? resetTab : tab))
		);
		setFaviconFailures((previousFailures) => {
			if (!(activeTab.id in previousFailures)) {
				return previousFailures;
			}

			const nextFailures = { ...previousFailures };
			delete nextFailures[activeTab.id];

			return nextFailures;
		});
		setInputValue("");
		const frame = getFrameForTab(activeTab.id);
		if (frame) {
			updateFrameVisibility(activeTab.id);
			await Promise.resolve(frame.go(buildWelcomePage()));
		}
		window.setTimeout(() => searchInputRef.current?.focus(), 0);
	};

	const openExternal = () => {
		if (!controllerRef.current || !currentUrl) {
			return;
		}

		window.open(
			controllerRef.current.encodeUrl(currentUrl),
			"_blank",
			"noopener"
		);
	};

	const toggleSidebar = () => {
		setIsSidebarExpanded((value) => !value);
	};

	return (
		<div className={styles.shell}>
			<div className={styles.shellGlow} />
			{showSplash ? (
				<div
					className={`${styles.splash} ${
						isSplashLeaving ? styles.splashLeaving : ""
					}`}
					role="status"
					aria-live="polite"
					aria-label={loadingLabel}
				>
					<div className={styles.splashCard}>
						<img
							src="/assets/omniedu-logo.png"
							alt=""
							className={styles.splashLogo}
						/>
						<div className={styles.splashWordmark}>OmniEdu</div>
						<div className={styles.splashTrack}>
							<span />
						</div>
					</div>
				</div>
			) : null}

			<div
				className={`${styles.frame} ${
					isSidebarExpanded ? styles.frameExpanded : styles.frameCollapsed
				}`}
			>
				<aside
					className={`${styles.sidebar} ${
						isSidebarExpanded ? "" : styles.sidebarCollapsed
					}`}
				>
					<div className={styles.sidebarHeader}>
						<div
							className={`${styles.sidebarHeading} ${
								isSidebarExpanded ? "" : styles.sidebarHeadingHidden
							}`}
						>
							<p className={styles.sidebarEyebrow}>library</p>
							<h2>Tabs</h2>
						</div>

						<div className={styles.sidebarActions}>
							<button
								type="button"
								className={styles.sidebarToggleButton}
								onClick={toggleSidebar}
								aria-label={isSidebarExpanded ? "Collapse tabs" : "Expand tabs"}
								aria-pressed={!isSidebarExpanded}
							>
								<SidebarIcon collapsed={!isSidebarExpanded} />
							</button>
							<button
								type="button"
								className={styles.newTabButton}
								onClick={() => void createTab()}
								disabled={!isReady}
								aria-label="Create new tab"
							>
								<PlusIcon />
							</button>
						</div>
					</div>

					<div className={styles.tabList}>
						{tabs.map((tab) => (
							<div
								key={tab.id}
								className={`${styles.tabCard} ${
									tab.id === activeTabId ? styles.tabCardActive : ""
								}`}
							>
								<button
									type="button"
									className={styles.tabCardButton}
									onClick={() => void selectTab(tab.id)}
									title={tab.url ? `${tab.title} - ${tab.url}` : tab.title}
								>
									<div className={styles.tabCardBadge}>
										{tab.faviconUrl && !faviconFailures[tab.id] ? (
											<img
												src={tab.faviconUrl}
												alt=""
												className={styles.tabFavicon}
												onError={() =>
													setFaviconFailures((previousFailures) => ({
														...previousFailures,
														[tab.id]: true,
													}))
												}
											/>
										) : (
											buildTabBadge(tab.title)
										)}
									</div>
									<div
										className={`${styles.tabCardText} ${
											isSidebarExpanded ? "" : styles.tabCardTextHidden
										}`}
									>
										<strong>{tab.title}</strong>
										<span>{tab.url ? tab.url : "start page"}</span>
									</div>
								</button>

								<button
									type="button"
									className={styles.tabCloseButton}
									onClick={() => void closeTab(tab.id)}
									aria-label={`Close ${tab.title}`}
								>
									<CloseIcon />
								</button>
							</div>
						))}
					</div>

					<div className={styles.shortcutDock} aria-label="Media shortcuts">
						{SHORTCUTS.map((shortcut) => (
							<button
								key={shortcut.kind}
								type="button"
								className={styles.shortcutButton}
								onClick={() => void openShortcut(shortcut)}
								disabled={!isReady || isNavigating}
								title={shortcut.label}
								aria-label={`Open ${shortcut.label}`}
							>
								<ShortcutIcon kind={shortcut.kind} />
							</button>
						))}
					</div>
				</aside>

				<section
					className={`${styles.browser} ${
						currentUrl ? styles.browserFocused : ""
					}`}
				>
					<header
						className={`${styles.chrome} ${
							currentUrl ? styles.chromeFocused : ""
						}`}
					>
						<div className={styles.chromeBrand}>
							<img src="/assets/omniedu-logo.png" alt="" />
							<span>OmniEdu</span>
						</div>
						<div className={styles.currentTabPill}>{currentTitle}</div>
					</header>

					<div
						className={`${styles.toolbar} ${
							currentUrl ? styles.toolbarFocused : ""
						}`}
					>
						<div className={styles.navButtons}>
							<button
								type="button"
								className={styles.iconButton}
								onClick={() => getFrameForTab(activeTabId)?.back()}
								disabled={!currentUrl}
								aria-label="Go back"
							>
								<BackIcon />
							</button>
							<button
								type="button"
								className={styles.iconButton}
								onClick={() => getFrameForTab(activeTabId)?.forward()}
								disabled={!currentUrl}
								aria-label="Go forward"
							>
								<ForwardIcon />
							</button>
							<button
								type="button"
								className={styles.iconButton}
								onClick={() => getFrameForTab(activeTabId)?.reload()}
								disabled={!currentUrl}
								aria-label="Reload current page"
							>
								<ReloadIcon />
							</button>
						</div>

						<form
							className={styles.addressForm}
							onSubmit={(event) => {
								event.preventDefault();
								void navigateTo();
							}}
						>
							<span className={styles.addressPrefix}>*</span>
							<input
								value={inputValue}
								onChange={(event) => setInputValue(event.target.value)}
								placeholder="Search or enter a URL"
								autoCapitalize="off"
								autoComplete="off"
								autoCorrect="off"
								spellCheck={false}
								disabled={!isReady}
							/>
							<button type="submit" disabled={!isReady || isNavigating}>
								{isNavigating ? "..." : "go"}
							</button>
						</form>

						<div className={styles.toolbarActions}>
							<button
								type="button"
								className={styles.metaButton}
								onClick={() => void goHome()}
								disabled={!isReady}
								aria-label="Go to start page"
							>
								<HomeIcon />
							</button>
							<button
								type="button"
								className={styles.metaButton}
								onClick={openExternal}
								disabled={!currentUrl}
								aria-label="Open in new window"
							>
								<ExternalIcon />
							</button>
						</div>
					</div>

					<div
						className={`${styles.workspace} ${
							currentUrl ? styles.workspaceFocused : ""
						}`}
					>
						<div
							className={`${styles.launcherView} ${
								currentUrl ? styles.launcherViewHidden : ""
							}`}
						>
							<div className={styles.launcherInner}>
								<div className={styles.brandRow}>
									<img
										src="/assets/omniedu-logo.png"
										alt=""
										className={styles.brandLogo}
									/>
									<div>
										<p className={styles.brandLabel}>OmniEdu</p>
										<h1>Search or enter a URL</h1>
									</div>
								</div>

								<form
									className={styles.heroSearch}
									onSubmit={(event) => {
										event.preventDefault();
										void navigateTo();
									}}
								>
									<span className={styles.heroSearchIcon}>/</span>
									<input
										ref={searchInputRef}
										value={inputValue}
										onChange={(event) => setInputValue(event.target.value)}
										placeholder="Search or enter a URL"
										autoCapitalize="off"
										autoComplete="off"
										autoCorrect="off"
										spellCheck={false}
										disabled={!isReady}
									/>
									<button type="submit" disabled={!isReady || isNavigating}>
										{isNavigating ? "loading" : "go"}
									</button>
								</form>

								{errorMessage ? (
									<div className={styles.errorRow}>{errorMessage}</div>
								) : null}
							</div>
						</div>

						<div
							className={`${styles.liveView} ${
								currentUrl ? styles.liveViewVisible : ""
							}`}
						>
							<div
								className={`${styles.viewportShell} ${
									currentUrl ? styles.viewportShellFocused : ""
								}`}
							>
								<div ref={mountRef} className={styles.frameMount} />
							</div>
						</div>

						{!isReady ? (
							<div className={styles.loadingOverlay}>
								<p>{loadingLabel}</p>
							</div>
						) : null}
					</div>
				</section>
			</div>
		</div>
	);
}
