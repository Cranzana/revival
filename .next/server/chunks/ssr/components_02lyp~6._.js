module.exports = [
	74856,
	(a) => {
		a.v({
			addressForm: "browser-hub-module__XrEQEW__addressForm",
			addressPrefix: "browser-hub-module__XrEQEW__addressPrefix",
			brandLabel: "browser-hub-module__XrEQEW__brandLabel",
			brandLogo: "browser-hub-module__XrEQEW__brandLogo",
			brandRow: "browser-hub-module__XrEQEW__brandRow",
			browser: "browser-hub-module__XrEQEW__browser",
			browserFocused: "browser-hub-module__XrEQEW__browserFocused",
			chrome: "browser-hub-module__XrEQEW__chrome",
			chromeBrand: "browser-hub-module__XrEQEW__chromeBrand",
			chromeFocused: "browser-hub-module__XrEQEW__chromeFocused",
			currentTabPill: "browser-hub-module__XrEQEW__currentTabPill",
			errorRow: "browser-hub-module__XrEQEW__errorRow",
			frame: "browser-hub-module__XrEQEW__frame",
			frameCollapsed: "browser-hub-module__XrEQEW__frameCollapsed",
			frameExpanded: "browser-hub-module__XrEQEW__frameExpanded",
			frameMount: "browser-hub-module__XrEQEW__frameMount",
			heroSearch: "browser-hub-module__XrEQEW__heroSearch",
			heroSearchIcon: "browser-hub-module__XrEQEW__heroSearchIcon",
			iconButton: "browser-hub-module__XrEQEW__iconButton",
			launcherInner: "browser-hub-module__XrEQEW__launcherInner",
			launcherView: "browser-hub-module__XrEQEW__launcherView",
			launcherViewHidden: "browser-hub-module__XrEQEW__launcherViewHidden",
			liveView: "browser-hub-module__XrEQEW__liveView",
			liveViewVisible: "browser-hub-module__XrEQEW__liveViewVisible",
			loadingOverlay: "browser-hub-module__XrEQEW__loadingOverlay",
			metaButton: "browser-hub-module__XrEQEW__metaButton",
			navButtons: "browser-hub-module__XrEQEW__navButtons",
			newTabButton: "browser-hub-module__XrEQEW__newTabButton",
			proxyFrame: "browser-hub-module__XrEQEW__proxyFrame",
			proxyFrameActive: "browser-hub-module__XrEQEW__proxyFrameActive",
			proxyFrameHidden: "browser-hub-module__XrEQEW__proxyFrameHidden",
			shell: "browser-hub-module__XrEQEW__shell",
			shellGlow: "browser-hub-module__XrEQEW__shellGlow",
			shortcutButton: "browser-hub-module__XrEQEW__shortcutButton",
			shortcutDock: "browser-hub-module__XrEQEW__shortcutDock",
			sidebar: "browser-hub-module__XrEQEW__sidebar",
			sidebarActions: "browser-hub-module__XrEQEW__sidebarActions",
			sidebarCollapsed: "browser-hub-module__XrEQEW__sidebarCollapsed",
			sidebarEyebrow: "browser-hub-module__XrEQEW__sidebarEyebrow",
			sidebarHeader: "browser-hub-module__XrEQEW__sidebarHeader",
			sidebarHeading: "browser-hub-module__XrEQEW__sidebarHeading",
			sidebarHeadingHidden: "browser-hub-module__XrEQEW__sidebarHeadingHidden",
			sidebarToggleButton: "browser-hub-module__XrEQEW__sidebarToggleButton",
			splash: "browser-hub-module__XrEQEW__splash",
			splashCard: "browser-hub-module__XrEQEW__splashCard",
			splashIn: "browser-hub-module__XrEQEW__splashIn",
			splashLeaving: "browser-hub-module__XrEQEW__splashLeaving",
			splashLogo: "browser-hub-module__XrEQEW__splashLogo",
			splashPulse: "browser-hub-module__XrEQEW__splashPulse",
			splashSweep: "browser-hub-module__XrEQEW__splashSweep",
			splashTrack: "browser-hub-module__XrEQEW__splashTrack",
			splashWordmark: "browser-hub-module__XrEQEW__splashWordmark",
			tabCard: "browser-hub-module__XrEQEW__tabCard",
			tabCardActive: "browser-hub-module__XrEQEW__tabCardActive",
			tabCardBadge: "browser-hub-module__XrEQEW__tabCardBadge",
			tabCardButton: "browser-hub-module__XrEQEW__tabCardButton",
			tabCardText: "browser-hub-module__XrEQEW__tabCardText",
			tabCardTextHidden: "browser-hub-module__XrEQEW__tabCardTextHidden",
			tabCloseButton: "browser-hub-module__XrEQEW__tabCloseButton",
			tabFavicon: "browser-hub-module__XrEQEW__tabFavicon",
			tabList: "browser-hub-module__XrEQEW__tabList",
			toolbar: "browser-hub-module__XrEQEW__toolbar",
			toolbarActions: "browser-hub-module__XrEQEW__toolbarActions",
			toolbarFocused: "browser-hub-module__XrEQEW__toolbarFocused",
			viewportShell: "browser-hub-module__XrEQEW__viewportShell",
			viewportShellFocused: "browser-hub-module__XrEQEW__viewportShellFocused",
			workspace: "browser-hub-module__XrEQEW__workspace",
			workspaceFocused: "browser-hub-module__XrEQEW__workspaceFocused",
		});
	},
	3284,
	(a) => {
		"use strict";
		var b = a.i(48117),
			c = a.i(99819),
			d = a.i(74856);
		let e = [
				{ kind: "games", label: "Games", url: "https://www.crazygames.com/" },
				{ kind: "movies", label: "Movies", url: "https://cineby.sc/" },
				{ kind: "music", label: "Music", url: "https://open.spotify.com/" },
			],
			f = "omniedu.sw.control-reload";
		function g(a) {
			return { id: a, title: "Start", url: "", faviconUrl: null };
		}
		function h(a) {
			let b = a.trim();
			return b
				? b.startsWith("http://") ||
					b.startsWith("https://") ||
					b.startsWith("data:") ||
					b.startsWith("about:")
					? b
					: b.includes(" ") ||
						  !(
								"localhost" === b ||
								b.startsWith("localhost:") ||
								b.startsWith("127.0.0.1") ||
								b.startsWith("[::1]") ||
								/^(?:[a-z0-9-]+\.)+[a-z]{2,}(?:[/:?#]|$)/i.test(b)
						  )
						? `https://www.google.com/search?q=${encodeURIComponent(b)}`
						: `https://${b}`
				: "";
		}
		async function i(a, b) {
			"/baremod/index.mjs" === b.transport
				? await Promise.resolve(a.setTransport(b.transport, [b.bareUrl]))
				: await Promise.resolve(
						a.setTransport(b.transport, [{ wisp: b.wispUrl }])
					);
		}
		function j() {
			let a = `
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
			return `data:text/html;charset=utf-8,${encodeURIComponent(a)}`;
		}
		function k(a) {
			if (!a) return "Start";
			try {
				return new URL(a).hostname.replace(/^www\./, "");
			} catch {
				return "Live";
			}
		}
		function l(a) {
			if (!a) return null;
			try {
				let b = new URL(a);
				if ("http:" === b.protocol || "https:" === b.protocol)
					return new URL("/favicon.ico", b.origin).toString();
			} catch {}
			return null;
		}
		function m() {
			return (0, b.jsxs)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("path", {
						d: "M10.75 4.75 5.5 10l5.25 5.25",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "1.8",
					}),
					(0, b.jsx)("path", {
						d: "M6 10h8.5",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: "1.8",
					}),
				],
			});
		}
		function n() {
			return (0, b.jsxs)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("path", {
						d: "M9.25 4.75 14.5 10l-5.25 5.25",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "1.8",
					}),
					(0, b.jsx)("path", {
						d: "M14 10H5.5",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: "1.8",
					}),
				],
			});
		}
		function o() {
			return (0, b.jsxs)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("path", {
						d: "M15.1 7.4A6 6 0 1 0 16 10",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "1.8",
					}),
					(0, b.jsx)("path", {
						d: "M12.25 4.9h3.35v3.35",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "1.8",
					}),
				],
			});
		}
		function p() {
			return (0, b.jsx)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: (0, b.jsx)("path", {
					d: "M10 4.5v11M4.5 10h11",
					fill: "none",
					stroke: "currentColor",
					strokeLinecap: "round",
					strokeWidth: "1.8",
				}),
			});
		}
		function q({ collapsed: a }) {
			return (0, b.jsxs)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("rect", {
						x: "3.75",
						y: "4.25",
						width: "12.5",
						height: "11.5",
						rx: "2",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
					}),
					(0, b.jsx)("path", {
						d: a ? "M8 4.5v11" : "M11.75 4.5v11",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: "1.6",
					}),
				],
			});
		}
		function r() {
			return (0, b.jsx)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: (0, b.jsx)("path", {
					d: "m5.5 5.5 9 9m0-9-9 9",
					fill: "none",
					stroke: "currentColor",
					strokeLinecap: "round",
					strokeWidth: "1.8",
				}),
			});
		}
		function s() {
			return (0, b.jsx)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: (0, b.jsx)("path", {
					d: "m4.75 9.25 5.25-4.5 5.25 4.5v5.5H11.9v-3.3H8.1v3.3H4.75z",
					fill: "none",
					stroke: "currentColor",
					strokeLinejoin: "round",
					strokeWidth: "1.8",
				}),
			});
		}
		function t() {
			return (0, b.jsxs)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("path", {
						d: "M6.5 8h7A3.5 3.5 0 0 1 17 11.5v1.75a2 2 0 0 1-3.3 1.52l-1.4-1.2H7.7l-1.4 1.2A2 2 0 0 1 3 13.25V11.5A3.5 3.5 0 0 1 6.5 8Z",
						fill: "none",
						stroke: "currentColor",
						strokeLinejoin: "round",
						strokeWidth: "1.7",
					}),
					(0, b.jsx)("path", {
						d: "M6.5 11.25h2.6M7.8 9.95v2.6",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: "1.7",
					}),
					(0, b.jsx)("path", {
						d: "M12.95 10.85h.05M14.75 12.45h.05",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: "2.4",
					}),
					(0, b.jsx)("path", {
						d: "M8.5 8V6.75a1.25 1.25 0 0 1 2.5 0V8",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: "1.7",
					}),
				],
			});
		}
		function u() {
			return (0, b.jsxs)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("rect", {
						x: "4",
						y: "5",
						width: "12",
						height: "10",
						rx: "1.8",
						fill: "none",
						stroke: "currentColor",
						strokeLinejoin: "round",
						strokeWidth: "1.7",
					}),
					(0, b.jsx)("path", {
						d: "M7 5v10M13 5v10M4 8h3M4 12h3M13 8h3M13 12h3",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: "1.5",
					}),
				],
			});
		}
		function v() {
			return (0, b.jsx)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: (0, b.jsx)("path", {
					d: "M8 13.25a2 2 0 1 1-1-1.73V5.75l7-1.5v7.5a2 2 0 1 1-1-1.73V7.05l-5 1.08Z",
					fill: "none",
					stroke: "currentColor",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: "1.7",
				}),
			});
		}
		function w() {
			return (0, b.jsxs)("svg", {
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				children: [
					(0, b.jsx)("path", {
						d: "M8 5.25H5.75A1.5 1.5 0 0 0 4.25 6.75v7.5a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V12",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "1.8",
					}),
					(0, b.jsx)("path", {
						d: "M11 4.25h4.75V9",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "1.8",
					}),
					(0, b.jsx)("path", {
						d: "M9.25 10.75 15.5 4.5",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeWidth: "1.8",
					}),
				],
			});
		}
		function x({ kind: a }) {
			switch (a) {
				case "movies":
					return (0, b.jsx)(u, {});
				case "music":
					return (0, b.jsx)(v, {});
				default:
					return (0, b.jsx)(t, {});
			}
		}
		async function y(a = 2500) {
			return navigator.serviceWorker.controller ||
				(await new Promise((b) => {
					let c = window.setTimeout(() => {
						(navigator.serviceWorker.removeEventListener("controllerchange", d),
							b(!1));
					}, a);
					function d() {
						(window.clearTimeout(c),
							navigator.serviceWorker.removeEventListener(
								"controllerchange",
								d
							),
							b(!0));
					}
					navigator.serviceWorker.addEventListener("controllerchange", d);
				}))
				? (window.sessionStorage.removeItem(f), !0)
				: (window.sessionStorage.getItem(f) ||
						(window.sessionStorage.setItem(f, "1"), window.location.reload()),
					!1);
		}
		a.s([
			"BrowserHub",
			0,
			function () {
				let [a, f] = (0, c.useState)(null),
					[t, u] = (0, c.useState)([g("tab-1")]),
					[v, z] = (0, c.useState)("tab-1"),
					[A, B] = (0, c.useState)(""),
					[C, D] = (0, c.useState)(!0),
					[E, F] = (0, c.useState)("waiting"),
					[G, H] = (0, c.useState)(!1),
					[I, J] = (0, c.useState)(!0),
					[K, L] = (0, c.useState)(!1),
					[M, N] = (0, c.useState)(!1),
					[O, P] = (0, c.useState)(null),
					[Q, R] = (0, c.useState)({}),
					S = (0, c.useRef)(null),
					T = (0, c.useRef)(null),
					U = (0, c.useRef)(null),
					V = (0, c.useRef)(new Map()),
					W = (0, c.useRef)(null),
					X = (0, c.useRef)(null),
					Y = (0, c.useRef)(2),
					Z = (0, c.useRef)(v),
					$ = (0, c.useMemo)(() => t.find((a) => a.id === v) ?? t[0], [t, v]),
					_ = $?.url ?? "",
					aa = $?.title ?? "Start",
					ab = (function (a) {
						switch (a) {
							case "installing":
							case "claiming":
								return "Preparing your session";
							case "attached":
								return "Almost there";
							default:
								return "Starting OmniEdu";
						}
					})(E);
				((0, c.useEffect)(() => {
					S.current = window.performance.now();
				}, []),
					(0, c.useEffect)(() => {
						let a;
						if (!G && !O) return;
						let b = S.current ?? window.performance.now(),
							c = Math.max(0, 900 - (window.performance.now() - b)),
							d = window.setTimeout(() => {
								(L(!0), (a = window.setTimeout(() => J(!1), 220)));
							}, c);
						return () => {
							(window.clearTimeout(d), a && window.clearTimeout(a));
						};
					}, [G, O]),
					(0, c.useEffect)(() => {
						Z.current = v;
					}, [v]),
					(0, c.useEffect)(() => {
						f({
							transport: "/epoxy/index.mjs",
							wispUrl: "ws://localhost:3000/wisp/",
							bareUrl: "http://localhost:3000/bare/",
						});
					}, []),
					(0, c.useEffect)(() => {
						a &&
							window.localStorage.setItem(
								"omniedu.browser.settings",
								JSON.stringify(a)
							);
					}, [a]),
					(0, c.useEffect)(() => {
						B(_);
					}, [_]));
				let ac = (a, b) => {
						(R((b) => {
							if (!(a in b)) return b;
							let c = { ...b };
							return (delete c[a], c);
						}),
							u((c) =>
								c.map((c) =>
									c.id === a
										? { ...c, url: b, title: k(b), faviconUrl: l(b) }
										: c
								)
							));
					},
					ad = (a) => {
						for (let [b, c] of V.current.entries())
							c.frame.className =
								b === a
									? `${d.default.proxyFrame} ${d.default.proxyFrameActive}`
									: `${d.default.proxyFrame} ${d.default.proxyFrameHidden}`;
					},
					ae = (a) => V.current.get(a) ?? null,
					af = async (a) => {
						if (!W.current || !T.current) return null;
						let b = ae(a.id);
						if (b) return b;
						let e = W.current.createFrame();
						return (
							(e.frame.className = `${d.default.proxyFrame} ${d.default.proxyFrameHidden}`),
							e.frame.setAttribute("title", `OmniEdu workspace ${a.id}`),
							e.frame.setAttribute("allow", "clipboard-read; clipboard-write"),
							e.addEventListener("urlchange", (b) => {
								let d = b.url ?? "";
								!d ||
									d.startsWith("data:text/html") ||
									(0, c.startTransition)(() => {
										(ac(a.id, d), Z.current === a.id && B(d));
									});
							}),
							T.current.appendChild(e.frame),
							V.current.set(a.id, e),
							a.url
								? await Promise.resolve(e.go(a.url))
								: await Promise.resolve(e.go(j())),
							e
						);
					},
					ag = async (a) => {
						!G || (P(null), (await af(a)) && ad(a.id));
					};
				(0, c.useEffect)(() => {
					let b;
					if (!a) return;
					let c = !1,
						d = async () => {
							let e,
								f =
									"function" == typeof (e = window).$scramjetLoadController &&
									e.BareMux?.BareMuxConnection
										? e
										: null;
							if (!f) {
								b = window.setTimeout(d, 120);
								return;
							}
							try {
								if (
									(F("installing"),
									await navigator.serviceWorker.register("/sw.js", {
										scope: "/",
										updateViaCache: "none",
									}),
									await navigator.serviceWorker.ready,
									c)
								)
									return;
								F("claiming");
								let b = await y();
								if (c || !b) return void P("Worker control never attached.");
								F("attached");
								let { ScramjetController: d } = f.$scramjetLoadController(),
									e = new d({
										files: {
											wasm: "/scram/scramjet.wasm.wasm",
											all: "/scram/scramjet.all.js",
											sync: "/scram/scramjet.sync.js",
										},
										flags: {
											rewriterLogs: !1,
											scramitize: !1,
											cleanErrors: !0,
											sourcemaps: !1,
										},
									});
								if ((await Promise.resolve(e.init()), c)) return;
								let h = new f.BareMux.BareMuxConnection("/baremux/worker.js"),
									j = i(h, a);
								if (((X.current = j), await j, c)) return;
								((W.current = e),
									P(null),
									H(!0),
									await af(g("tab-1")),
									ad("tab-1"),
									window.setTimeout(() => U.current?.focus(), 0));
							} catch (a) {
								P(a instanceof Error ? a.message : "Failed to initialize.");
							}
						};
					return (
						d(),
						() => {
							((c = !0),
								b && window.clearTimeout(b),
								V.current.clear(),
								T.current?.replaceChildren());
						}
					);
				}, [a]);
				let ah = async (a = A) => {
						if (!G || !$) return;
						let b = h(a);
						if (b) {
							(N(!0), P(null));
							try {
								X.current && (await X.current);
								let a = await af($);
								if (!a) return;
								(ad($.id),
									await Promise.resolve(a.go(b)),
									(0, c.startTransition)(() => {
										(ac($.id, b), B(b));
									}));
							} catch (a) {
								P(a instanceof Error ? a.message : "Navigation failed.");
							} finally {
								N(!1);
							}
						}
					},
					ai = async () => {
						let a = `tab-${Y.current++}`,
							b = g(a);
						(u((a) => [...a, b]),
							(Z.current = a),
							z(a),
							B(""),
							G &&
								(await ag(b), window.setTimeout(() => U.current?.focus(), 0)));
					},
					aj = async (a) => {
						if (!G) return;
						let b = h(a.url),
							c = `tab-${Y.current++}`,
							d = { id: c, title: k(b), url: b, faviconUrl: l(b) };
						(u((a) => [...a, d]), (Z.current = c), z(c), B(b), N(!0), P(null));
						try {
							(X.current && (await X.current), await ag(d));
						} catch (a) {
							P(a instanceof Error ? a.message : "Shortcut failed to open.");
						} finally {
							N(!1);
						}
					},
					ak = async (a) => {
						if (a === v) return;
						let b = t.find((b) => b.id === a);
						b && ((Z.current = a), z(a), B(b.url), await ag(b));
					},
					al = async (a) => {
						if (1 === t.length) {
							let b = g(a);
							(u([b]),
								R({}),
								(Z.current = a),
								z(a),
								B(""),
								V.current.get(a)?.frame.remove(),
								V.current.delete(a),
								await ag(b),
								window.setTimeout(() => U.current?.focus(), 0));
							return;
						}
						let b = t.findIndex((b) => b.id === a);
						if (-1 === b) return;
						let c = t.filter((b) => b.id !== a),
							d = c[Math.max(0, b - 1)];
						(V.current.get(a)?.frame.remove(),
							V.current.delete(a),
							R((b) => {
								if (!(a in b)) return b;
								let c = { ...b };
								return (delete c[a], c);
							}),
							u(c),
							v === a &&
								d &&
								((Z.current = d.id), z(d.id), B(d.url), await ag(d)));
					},
					am = async () => {
						if (!$) return;
						let a = { ...$, title: "Start", url: "", faviconUrl: null };
						(u((b) => b.map((b) => (b.id === $.id ? a : b))),
							R((a) => {
								if (!($.id in a)) return a;
								let b = { ...a };
								return (delete b[$.id], b);
							}),
							B(""));
						let b = ae($.id);
						(b && (ad($.id), await Promise.resolve(b.go(j()))),
							window.setTimeout(() => U.current?.focus(), 0));
					};
				return (0, b.jsxs)("div", {
					className: d.default.shell,
					children: [
						(0, b.jsx)("div", { className: d.default.shellGlow }),
						I
							? (0, b.jsx)("div", {
									className: `${d.default.splash} ${K ? d.default.splashLeaving : ""}`,
									role: "status",
									"aria-live": "polite",
									"aria-label": ab,
									children: (0, b.jsxs)("div", {
										className: d.default.splashCard,
										children: [
											(0, b.jsx)("img", {
												src: "/assets/omniedu-logo.png",
												alt: "",
												className: d.default.splashLogo,
											}),
											(0, b.jsx)("div", {
												className: d.default.splashWordmark,
												children: "OmniEdu",
											}),
											(0, b.jsx)("div", {
												className: d.default.splashTrack,
												children: (0, b.jsx)("span", {}),
											}),
										],
									}),
								})
							: null,
						(0, b.jsxs)("div", {
							className: `${d.default.frame} ${C ? d.default.frameExpanded : d.default.frameCollapsed}`,
							children: [
								(0, b.jsxs)("aside", {
									className: `${d.default.sidebar} ${C ? "" : d.default.sidebarCollapsed}`,
									children: [
										(0, b.jsxs)("div", {
											className: d.default.sidebarHeader,
											children: [
												(0, b.jsxs)("div", {
													className: `${d.default.sidebarHeading} ${C ? "" : d.default.sidebarHeadingHidden}`,
													children: [
														(0, b.jsx)("p", {
															className: d.default.sidebarEyebrow,
															children: "library",
														}),
														(0, b.jsx)("h2", { children: "Tabs" }),
													],
												}),
												(0, b.jsxs)("div", {
													className: d.default.sidebarActions,
													children: [
														(0, b.jsx)("button", {
															type: "button",
															className: d.default.sidebarToggleButton,
															onClick: () => {
																D((a) => !a);
															},
															"aria-label": C ? "Collapse tabs" : "Expand tabs",
															"aria-pressed": !C,
															children: (0, b.jsx)(q, { collapsed: !C }),
														}),
														(0, b.jsx)("button", {
															type: "button",
															className: d.default.newTabButton,
															onClick: () => void ai(),
															disabled: !G,
															"aria-label": "Create new tab",
															children: (0, b.jsx)(p, {}),
														}),
													],
												}),
											],
										}),
										(0, b.jsx)("div", {
											className: d.default.tabList,
											children: t.map((a) =>
												(0, b.jsxs)(
													"div",
													{
														className: `${d.default.tabCard} ${a.id === v ? d.default.tabCardActive : ""}`,
														children: [
															(0, b.jsxs)("button", {
																type: "button",
																className: d.default.tabCardButton,
																onClick: () => void ak(a.id),
																title: a.url
																	? `${a.title} - ${a.url}`
																	: a.title,
																children: [
																	(0, b.jsx)("div", {
																		className: d.default.tabCardBadge,
																		children:
																			a.faviconUrl && !Q[a.id]
																				? (0, b.jsx)("img", {
																						src: a.faviconUrl,
																						alt: "",
																						className: d.default.tabFavicon,
																						onError: () =>
																							R((b) => ({ ...b, [a.id]: !0 })),
																					})
																				: a.title.slice(0, 2).toUpperCase(),
																	}),
																	(0, b.jsxs)("div", {
																		className: `${d.default.tabCardText} ${C ? "" : d.default.tabCardTextHidden}`,
																		children: [
																			(0, b.jsx)("strong", {
																				children: a.title,
																			}),
																			(0, b.jsx)("span", {
																				children: a.url ? a.url : "start page",
																			}),
																		],
																	}),
																],
															}),
															(0, b.jsx)("button", {
																type: "button",
																className: d.default.tabCloseButton,
																onClick: () => void al(a.id),
																"aria-label": `Close ${a.title}`,
																children: (0, b.jsx)(r, {}),
															}),
														],
													},
													a.id
												)
											),
										}),
										(0, b.jsx)("div", {
											className: d.default.shortcutDock,
											"aria-label": "Media shortcuts",
											children: e.map((a) =>
												(0, b.jsx)(
													"button",
													{
														type: "button",
														className: d.default.shortcutButton,
														onClick: () => void aj(a),
														disabled: !G || M,
														title: a.label,
														"aria-label": `Open ${a.label}`,
														children: (0, b.jsx)(x, { kind: a.kind }),
													},
													a.kind
												)
											),
										}),
									],
								}),
								(0, b.jsxs)("section", {
									className: `${d.default.browser} ${_ ? d.default.browserFocused : ""}`,
									children: [
										(0, b.jsxs)("header", {
											className: `${d.default.chrome} ${_ ? d.default.chromeFocused : ""}`,
											children: [
												(0, b.jsxs)("div", {
													className: d.default.chromeBrand,
													children: [
														(0, b.jsx)("img", {
															src: "/assets/omniedu-logo.png",
															alt: "",
														}),
														(0, b.jsx)("span", { children: "OmniEdu" }),
													],
												}),
												(0, b.jsx)("div", {
													className: d.default.currentTabPill,
													children: aa,
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: `${d.default.toolbar} ${_ ? d.default.toolbarFocused : ""}`,
											children: [
												(0, b.jsxs)("div", {
													className: d.default.navButtons,
													children: [
														(0, b.jsx)("button", {
															type: "button",
															className: d.default.iconButton,
															onClick: () => ae(v)?.back(),
															disabled: !_,
															"aria-label": "Go back",
															children: (0, b.jsx)(m, {}),
														}),
														(0, b.jsx)("button", {
															type: "button",
															className: d.default.iconButton,
															onClick: () => ae(v)?.forward(),
															disabled: !_,
															"aria-label": "Go forward",
															children: (0, b.jsx)(n, {}),
														}),
														(0, b.jsx)("button", {
															type: "button",
															className: d.default.iconButton,
															onClick: () => ae(v)?.reload(),
															disabled: !_,
															"aria-label": "Reload current page",
															children: (0, b.jsx)(o, {}),
														}),
													],
												}),
												(0, b.jsxs)("form", {
													className: d.default.addressForm,
													onSubmit: (a) => {
														(a.preventDefault(), ah());
													},
													children: [
														(0, b.jsx)("span", {
															className: d.default.addressPrefix,
															children: "*",
														}),
														(0, b.jsx)("input", {
															value: A,
															onChange: (a) => B(a.target.value),
															placeholder: "Search or enter a URL",
															autoCapitalize: "off",
															autoComplete: "off",
															autoCorrect: "off",
															spellCheck: !1,
															disabled: !G,
														}),
														(0, b.jsx)("button", {
															type: "submit",
															disabled: !G || M,
															children: M ? "..." : "go",
														}),
													],
												}),
												(0, b.jsxs)("div", {
													className: d.default.toolbarActions,
													children: [
														(0, b.jsx)("button", {
															type: "button",
															className: d.default.metaButton,
															onClick: () => void am(),
															disabled: !G,
															"aria-label": "Go to start page",
															children: (0, b.jsx)(s, {}),
														}),
														(0, b.jsx)("button", {
															type: "button",
															className: d.default.metaButton,
															onClick: () => {
																W.current &&
																	_ &&
																	window.open(
																		W.current.encodeUrl(_),
																		"_blank",
																		"noopener"
																	);
															},
															disabled: !_,
															"aria-label": "Open in new window",
															children: (0, b.jsx)(w, {}),
														}),
													],
												}),
											],
										}),
										(0, b.jsxs)("div", {
											className: `${d.default.workspace} ${_ ? d.default.workspaceFocused : ""}`,
											children: [
												(0, b.jsx)("div", {
													className: `${d.default.launcherView} ${_ ? d.default.launcherViewHidden : ""}`,
													children: (0, b.jsxs)("div", {
														className: d.default.launcherInner,
														children: [
															(0, b.jsxs)("div", {
																className: d.default.brandRow,
																children: [
																	(0, b.jsx)("img", {
																		src: "/assets/omniedu-logo.png",
																		alt: "",
																		className: d.default.brandLogo,
																	}),
																	(0, b.jsxs)("div", {
																		children: [
																			(0, b.jsx)("p", {
																				className: d.default.brandLabel,
																				children: "OmniEdu",
																			}),
																			(0, b.jsx)("h1", {
																				children: "Search or enter a URL",
																			}),
																		],
																	}),
																],
															}),
															(0, b.jsxs)("form", {
																className: d.default.heroSearch,
																onSubmit: (a) => {
																	(a.preventDefault(), ah());
																},
																children: [
																	(0, b.jsx)("span", {
																		className: d.default.heroSearchIcon,
																		children: "/",
																	}),
																	(0, b.jsx)("input", {
																		ref: U,
																		value: A,
																		onChange: (a) => B(a.target.value),
																		placeholder: "Search or enter a URL",
																		autoCapitalize: "off",
																		autoComplete: "off",
																		autoCorrect: "off",
																		spellCheck: !1,
																		disabled: !G,
																	}),
																	(0, b.jsx)("button", {
																		type: "submit",
																		disabled: !G || M,
																		children: M ? "loading" : "go",
																	}),
																],
															}),
															O
																? (0, b.jsx)("div", {
																		className: d.default.errorRow,
																		children: O,
																	})
																: null,
														],
													}),
												}),
												(0, b.jsx)("div", {
													className: `${d.default.liveView} ${_ ? d.default.liveViewVisible : ""}`,
													children: (0, b.jsx)("div", {
														className: `${d.default.viewportShell} ${_ ? d.default.viewportShellFocused : ""}`,
														children: (0, b.jsx)("div", {
															ref: T,
															className: d.default.frameMount,
														}),
													}),
												}),
												G
													? null
													: (0, b.jsx)("div", {
															className: d.default.loadingOverlay,
															children: (0, b.jsx)("p", { children: ab }),
														}),
											],
										}),
									],
								}),
							],
						}),
					],
				});
			},
		]);
	},
];

//# sourceMappingURL=components_02lyp~6._.js.map
