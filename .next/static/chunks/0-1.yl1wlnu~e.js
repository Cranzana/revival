(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	6805,
	(e, r, t) => {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var a = {
			formatUrl: function () {
				return s;
			},
			formatWithValidation: function () {
				return c;
			},
			urlObjectKeys: function () {
				return i;
			},
		};
		for (var o in a) Object.defineProperty(t, o, { enumerable: !0, get: a[o] });
		let n = e.r(44066)._(e.r(60004)),
			l = /https?|ftp|gopher|file/;
		function s(e) {
			let { auth: r, hostname: t } = e,
				a = e.protocol || "",
				o = e.pathname || "",
				s = e.hash || "",
				i = e.query || "",
				c = !1;
			((r = r ? encodeURIComponent(r).replace(/%3A/i, ":") + "@" : ""),
				e.host
					? (c = r + e.host)
					: t &&
						((c = r + (~t.indexOf(":") ? `[${t}]` : t)),
						e.port && (c += ":" + e.port)),
				i && "object" == typeof i && (i = String(n.urlQueryToSearchParams(i))));
			let u = e.search || (i && `?${i}`) || "";
			return (
				a && !a.endsWith(":") && (a += ":"),
				e.slashes || ((!a || l.test(a)) && !1 !== c)
					? ((c = "//" + (c || "")), o && "/" !== o[0] && (o = "/" + o))
					: c || (c = ""),
				s && "#" !== s[0] && (s = "#" + s),
				u && "?" !== u[0] && (u = "?" + u),
				(o = o.replace(/[?#]/g, encodeURIComponent)),
				(u = u.replace("#", "%23")),
				`${a}${c}${o}${u}${s}`
			);
		}
		let i = [
			"auth",
			"hash",
			"host",
			"hostname",
			"href",
			"path",
			"pathname",
			"port",
			"protocol",
			"query",
			"search",
			"slashes",
		];
		function c(e) {
			return s(e);
		}
	},
	33756,
	(e, r, t) => {
		"use strict";
		(Object.defineProperty(t, "__esModule", { value: !0 }),
			Object.defineProperty(t, "useMergedRef", {
				enumerable: !0,
				get: function () {
					return o;
				},
			}));
		let a = e.r(50614);
		function o(e, r) {
			let t = (0, a.useRef)(null),
				o = (0, a.useRef)(null);
			return (0, a.useCallback)(
				(a) => {
					if (null === a) {
						let e = t.current;
						e && ((t.current = null), e());
						let r = o.current;
						r && ((o.current = null), r());
					} else (e && (t.current = n(e, a)), r && (o.current = n(r, a)));
				},
				[e, r]
			);
		}
		function n(e, r) {
			if ("function" != typeof e)
				return (
					(e.current = r),
					() => {
						e.current = null;
					}
				);
			{
				let t = e(r);
				return "function" == typeof t ? t : () => e(null);
			}
		}
		("function" == typeof t.default ||
			("object" == typeof t.default && null !== t.default)) &&
			void 0 === t.default.__esModule &&
			(Object.defineProperty(t.default, "__esModule", { value: !0 }),
			Object.assign(t.default, t),
			(r.exports = t.default));
	},
	83999,
	(e, r, t) => {
		"use strict";
		(Object.defineProperty(t, "__esModule", { value: !0 }),
			Object.defineProperty(t, "isLocalURL", {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let a = e.r(98990),
			o = e.r(52310);
		function n(e) {
			if (!(0, a.isAbsoluteUrl)(e)) return !0;
			try {
				let r = (0, a.getLocationOrigin)(),
					t = new URL(e, r);
				return t.origin === r && (0, o.hasBasePath)(t.pathname);
			} catch (e) {
				return !1;
			}
		}
	},
	98904,
	(e, r, t) => {
		"use strict";
		(Object.defineProperty(t, "__esModule", { value: !0 }),
			Object.defineProperty(t, "errorOnce", {
				enumerable: !0,
				get: function () {
					return a;
				},
			}));
		let a = (e) => {};
	},
	91140,
	(e, r, t) => {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var a = {
			default: function () {
				return w;
			},
			useLinkStatus: function () {
				return v;
			},
		};
		for (var o in a) Object.defineProperty(t, o, { enumerable: !0, get: a[o] });
		let n = e.r(44066),
			l = e.r(45145),
			s = n._(e.r(50614)),
			i = e.r(6805),
			c = e.r(20289),
			u = e.r(33756),
			d = e.r(98990),
			p = e.r(21642);
		e.r(18376);
		let f = e.r(89311),
			m = e.r(10181),
			h = e.r(83999),
			_ = e.r(65889);
		function w(r) {
			var t, a;
			let o,
				n,
				w,
				[v, x] = (0, s.useOptimistic)(m.IDLE_LINK_STATUS),
				b = (0, s.useRef)(null),
				{
					href: g,
					as: j,
					children: k,
					prefetch: q = null,
					passHref: E,
					replace: S,
					shallow: C,
					scroll: N,
					onClick: R,
					onMouseEnter: P,
					onTouchStart: L,
					legacyBehavior: O = !1,
					onNavigate: T,
					transitionTypes: M,
					ref: U,
					unstable_dynamicOnHover: B,
					...I
				} = r;
			((o = k),
				O &&
					("string" == typeof o || "number" == typeof o) &&
					(o = (0, l.jsx)("a", { children: o })));
			let A = s.default.useContext(c.AppRouterContext),
				$ = !1 !== q,
				D =
					!1 !== q
						? null === (a = q) || "auto" === a
							? _.FetchStrategy.PPR
							: _.FetchStrategy.Full
						: _.FetchStrategy.PPR,
				F = "string" == typeof (t = j || g) ? t : (0, i.formatUrl)(t);
			if (O) {
				if (o?.$$typeof === Symbol.for("react.lazy"))
					throw Object.defineProperty(
						Error(
							"`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
						),
						"__NEXT_ERROR_CODE",
						{ value: "E863", enumerable: !1, configurable: !0 }
					);
				n = s.default.Children.only(o);
			}
			let W = O ? n && "object" == typeof n && n.ref : U,
				K = s.default.useCallback(
					(e) => (
						null !== A &&
							(b.current = (0, m.mountLinkInstance)(e, F, A, D, $, x)),
						() => {
							(b.current &&
								((0, m.unmountLinkForCurrentNavigation)(b.current),
								(b.current = null)),
								(0, m.unmountPrefetchableInstance)(e));
						}
					),
					[$, F, A, D, x]
				),
				z = {
					ref: (0, u.useMergedRef)(K, W),
					onClick(r) {
						(O || "function" != typeof R || R(r),
							O &&
								n.props &&
								"function" == typeof n.props.onClick &&
								n.props.onClick(r),
							!A ||
								r.defaultPrevented ||
								(function (r, t, a, o, n, l, i) {
									if ("u" > typeof window) {
										let c,
											{ nodeName: u } = r.currentTarget;
										if (
											("A" === u.toUpperCase() &&
												(((c = r.currentTarget.getAttribute("target")) &&
													"_self" !== c) ||
													r.metaKey ||
													r.ctrlKey ||
													r.shiftKey ||
													r.altKey ||
													(r.nativeEvent && 2 === r.nativeEvent.which))) ||
											r.currentTarget.hasAttribute("download")
										)
											return;
										if (!(0, h.isLocalURL)(t)) {
											o && (r.preventDefault(), location.replace(t));
											return;
										}
										if ((r.preventDefault(), l)) {
											let e = !1;
											if (
												(l({
													preventDefault: () => {
														e = !0;
													},
												}),
												e)
											)
												return;
										}
										let { dispatchNavigateAction: d } = e.r(53385);
										s.default.startTransition(() => {
											d(
												t,
												o ? "replace" : "push",
												!1 === n
													? f.ScrollBehavior.NoScroll
													: f.ScrollBehavior.Default,
												a.current,
												i
											);
										});
									}
								})(r, F, b, S, N, T, M));
					},
					onMouseEnter(e) {
						(O || "function" != typeof P || P(e),
							O &&
								n.props &&
								"function" == typeof n.props.onMouseEnter &&
								n.props.onMouseEnter(e),
							A && $ && (0, m.onNavigationIntent)(e.currentTarget, !0 === B));
					},
					onTouchStart: function (e) {
						(O || "function" != typeof L || L(e),
							O &&
								n.props &&
								"function" == typeof n.props.onTouchStart &&
								n.props.onTouchStart(e),
							A && $ && (0, m.onNavigationIntent)(e.currentTarget, !0 === B));
					},
				};
			return (
				(0, d.isAbsoluteUrl)(F)
					? (z.href = F)
					: (O && !E && ("a" !== n.type || "href" in n.props)) ||
						(z.href = (0, p.addBasePath)(F)),
				(w = O
					? s.default.cloneElement(n, z)
					: (0, l.jsx)("a", { ...I, ...z, children: o })),
				(0, l.jsx)(y.Provider, { value: v, children: w })
			);
		}
		e.r(98904);
		let y = (0, s.createContext)(m.IDLE_LINK_STATUS),
			v = () => (0, s.useContext)(y);
		("function" == typeof t.default ||
			("object" == typeof t.default && null !== t.default)) &&
			void 0 === t.default.__esModule &&
			(Object.defineProperty(t.default, "__esModule", { value: !0 }),
			Object.assign(t.default, t),
			(r.exports = t.default));
	},
	32593,
	(e) => {
		e.v({
			actions: "proxy-workspace-module__47qvEq__actions",
			addressBar: "proxy-workspace-module__47qvEq__addressBar",
			aurora: "proxy-workspace-module__47qvEq__aurora",
			badge: "proxy-workspace-module__47qvEq__badge",
			badgeMuted: "proxy-workspace-module__47qvEq__badgeMuted",
			badges: "proxy-workspace-module__47qvEq__badges",
			brandColumn: "proxy-workspace-module__47qvEq__brandColumn",
			consoleColumn: "proxy-workspace-module__47qvEq__consoleColumn",
			consolePanel: "proxy-workspace-module__47qvEq__consolePanel",
			controls: "proxy-workspace-module__47qvEq__controls",
			emptyState: "proxy-workspace-module__47qvEq__emptyState",
			errorBanner: "proxy-workspace-module__47qvEq__errorBanner",
			field: "proxy-workspace-module__47qvEq__field",
			frameMount: "proxy-workspace-module__47qvEq__frameMount",
			hero: "proxy-workspace-module__47qvEq__hero",
			heroCard: "proxy-workspace-module__47qvEq__heroCard",
			kicker: "proxy-workspace-module__47qvEq__kicker",
			lede: "proxy-workspace-module__47qvEq__lede",
			loadingState: "proxy-workspace-module__47qvEq__loadingState",
			metaRow: "proxy-workspace-module__47qvEq__metaRow",
			metric: "proxy-workspace-module__47qvEq__metric",
			omnibox: "proxy-workspace-module__47qvEq__omnibox",
			panel: "proxy-workspace-module__47qvEq__panel",
			panelLabel: "proxy-workspace-module__47qvEq__panelLabel",
			proxyFrame: "proxy-workspace-module__47qvEq__proxyFrame",
			quickLink: "proxy-workspace-module__47qvEq__quickLink",
			quickList: "proxy-workspace-module__47qvEq__quickList",
			shell: "proxy-workspace-module__47qvEq__shell",
			sidebar: "proxy-workspace-module__47qvEq__sidebar",
			statusRow: "proxy-workspace-module__47qvEq__statusRow",
			viewport: "proxy-workspace-module__47qvEq__viewport",
			viewportChrome: "proxy-workspace-module__47qvEq__viewportChrome",
			viewportPanel: "proxy-workspace-module__47qvEq__viewportPanel",
			workspace: "proxy-workspace-module__47qvEq__workspace",
		});
	},
	45915,
	(e) => {
		"use strict";
		var r = e.i(45145),
			t = e.i(50614),
			a = e.i(32593);
		let o = "scramjet.console.settings",
			n = "scramjet.console.recents",
			l = [
				{ label: "Google", url: "https://google.com" },
				{ label: "GitHub", url: "https://github.com" },
				{ label: "Wikipedia", url: "https://wikipedia.org" },
				{ label: "MDN", url: "https://developer.mozilla.org" },
			];
		function s() {
			return {
				transport: "/epoxy/index.mjs",
				wispUrl:
					("https:" === window.location.protocol ? "wss" : "ws") +
					"://" +
					window.location.host +
					"/wisp/",
				bareUrl:
					("https:" === window.location.protocol ? "https" : "http") +
					"://" +
					window.location.host +
					"/bare/",
			};
		}
		function i(e) {
			let r = e.trim();
			return r
				? r.startsWith("http://") ||
					r.startsWith("https://") ||
					r.startsWith("data:") ||
					r.startsWith("about:")
					? r
					: r.includes(" ")
						? `https://www.google.com/search?q=${encodeURIComponent(r)}`
						: `https://${r}`
				: "";
		}
		function c(e) {
			try {
				return new URL(e).hostname.replace(/^www\./, "");
			} catch {
				return e;
			}
		}
		async function u(e, r) {
			"/baremod/index.mjs" === r.transport
				? await Promise.resolve(e.setTransport(r.transport, [r.bareUrl]))
				: await Promise.resolve(
						e.setTransport(r.transport, [{ wisp: r.wispUrl }])
					);
		}
		e.s([
			"ProxyWorkspace",
			0,
			function () {
				let [e, d] = (0, t.useState)(s),
					[p, f] = (0, t.useState)([]),
					[m, h] = (0, t.useState)("https://google.com"),
					[_, w] = (0, t.useState)(""),
					[y, v] = (0, t.useState)("Starting workspace"),
					[x, b] = (0, t.useState)("Preparing session"),
					[g, j] = (0, t.useState)(null),
					[k, q] = (0, t.useState)(!1),
					[E, S] = (0, t.useState)(!1),
					[C, N] = (0, t.useState)(!1),
					R = (0, t.useDeferredValue)(m),
					P = (0, t.useRef)(null),
					L = (0, t.useRef)(null),
					O = (0, t.useRef)(null),
					T = (0, t.useRef)(null),
					M = (0, t.useRef)(e),
					U = (0, t.useRef)(null);
				((M.current = e),
					(0, t.useEffect)(() => {
						(d(
							(function () {
								try {
									let e = window.localStorage.getItem(o);
									if (!e) return s();
									return { ...s(), ...JSON.parse(e) };
								} catch {
									return s();
								}
							})()
						),
							f(
								(function () {
									try {
										let e = window.localStorage.getItem(n);
										return e ? JSON.parse(e) : [];
									} catch {
										return [];
									}
								})()
							),
							N(!0));
					}, []),
					(0, t.useEffect)(() => {
						C && window.localStorage.setItem(o, JSON.stringify(e));
					}, [e, C]),
					(0, t.useEffect)(() => {
						C && window.localStorage.setItem(n, JSON.stringify(p));
					}, [p, C]),
					(0, t.useEffect)(() => {
						let e;
						if (!C) return;
						let r = !1,
							o = async () => {
								let n,
									l =
										"function" == typeof (n = window).$scramjetLoadController &&
										n.BareMux?.BareMuxConnection
											? n
											: null;
								if (!l) {
									e = window.setTimeout(o, 120);
									return;
								}
								try {
									let e;
									if (
										(v("Starting workspace"),
										await navigator.serviceWorker.register("/sw.js", {
											scope: "/",
										}),
										await navigator.serviceWorker.ready,
										r)
									)
										return;
									(b(
										navigator.serviceWorker.controller
											? "Session ready"
											: "Preparing session"
									),
										v("Loading browser"));
									let { ScramjetController: o } = l.$scramjetLoadController(),
										n = new o({
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
									if ((await Promise.resolve(n.init()), r)) return;
									let s = new l.BareMux.BareMuxConnection("/baremux/worker.js");
									v("Connecting");
									let i = u(s, M.current);
									if (((U.current = i), await i, r)) return;
									v("Opening browser");
									let c = n.createFrame();
									((c.frame.className = a.default.proxyFrame),
										c.frame.setAttribute("title", "OmniEdu browser viewport"),
										c.frame.setAttribute(
											"allow",
											"clipboard-read; clipboard-write"
										),
										c.addEventListener("urlchange", (e) => {
											let r = e.url ?? "";
											r &&
												(0, t.startTransition)(() => {
													(w(r), h(r));
												});
										}),
										P.current?.replaceChildren(c.frame),
										await Promise.resolve(
											c.go(
												((e = `
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
	`),
												`data:text/html;charset=utf-8,${encodeURIComponent(e)}`)
											)
										),
										(L.current = n),
										(O.current = c),
										(T.current = s),
										v("Ready"),
										q(!0));
								} catch (e) {
									(j(
										e instanceof Error ? e.message : "Failed to start OmniEdu."
									),
										v("Attention needed"));
								}
							};
						return (
							o(),
							() => {
								((r = !0),
									e && window.clearTimeout(e),
									P.current?.replaceChildren());
							}
						);
					}, [C]),
					(0, t.useEffect)(() => {
						if (!T.current) return;
						let r = u(T.current, e);
						((U.current = r),
							r.then(() => {
								M.current === e && v("Ready");
							}));
					}, [e]));
				let B = async (e = m) => {
						if (!O.current) return;
						let r = i(e);
						if (r) {
							(S(!0), j(null), v("Opening"));
							try {
								let e;
								(U.current && (await U.current),
									await Promise.resolve(O.current.go(r)),
									(e = { label: c(r), url: r }),
									(0, t.startTransition)(() => {
										f((t) => [e, ...t.filter((e) => e.url !== r)].slice(0, 6));
									}),
									(0, t.startTransition)(() => {
										(w(r), h(r));
									}),
									v("Console ready"));
							} catch (e) {
								(j(e instanceof Error ? e.message : "Navigation failed."),
									v("Navigation failed"));
							} finally {
								S(!1);
							}
						}
					},
					I = R ? c(i(R)) : "awaiting target";
				return (0, r.jsxs)("main", {
					className: a.default.shell,
					children: [
						(0, r.jsx)("div", { className: a.default.aurora }),
						(0, r.jsxs)("section", {
							className: a.default.hero,
							children: [
								(0, r.jsxs)("div", {
									className: a.default.brandColumn,
									children: [
										(0, r.jsx)("p", {
											className: a.default.kicker,
											children: "OmniEdu workspace",
										}),
										(0, r.jsx)("h1", {
											children: "Open pages from one simple browser view.",
										}),
										(0, r.jsx)("p", {
											className: a.default.lede,
											children:
												"Search, open, and revisit pages without leaving the workspace.",
										}),
									],
								}),
								(0, r.jsxs)("div", {
									className: a.default.heroCard,
									children: [
										(0, r.jsxs)("div", {
											className: a.default.metric,
											children: [
												(0, r.jsx)("span", { children: "Status" }),
												(0, r.jsx)("strong", {
													children: k ? "Ready" : "Starting",
												}),
											],
										}),
										(0, r.jsxs)("div", {
											className: a.default.metric,
											children: [
												(0, r.jsx)("span", { children: "Session" }),
												(0, r.jsx)("strong", { children: _ ? "Live" : "Idle" }),
											],
										}),
										(0, r.jsxs)("div", {
											className: a.default.metric,
											children: [
												(0, r.jsx)("span", { children: "Preview" }),
												(0, r.jsx)("strong", { children: I }),
											],
										}),
									],
								}),
							],
						}),
						(0, r.jsxs)("section", {
							className: a.default.workspace,
							children: [
								(0, r.jsxs)("aside", {
									className: a.default.sidebar,
									children: [
										(0, r.jsxs)("div", {
											className: a.default.panel,
											children: [
												(0, r.jsx)("p", {
													className: a.default.panelLabel,
													children: "Launch deck",
												}),
												(0, r.jsx)("div", {
													className: a.default.quickList,
													children: l.map((e) =>
														(0, r.jsxs)(
															"button",
															{
																type: "button",
																className: a.default.quickLink,
																onClick: () => void B(e.url),
																children: [
																	(0, r.jsx)("span", { children: e.label }),
																	(0, r.jsx)("small", { children: c(e.url) }),
																],
															},
															e.url
														)
													),
												}),
											],
										}),
										(0, r.jsxs)("div", {
											className: a.default.panel,
											children: [
												(0, r.jsx)("p", {
													className: a.default.panelLabel,
													children: "Recent routes",
												}),
												(0, r.jsx)("div", {
													className: a.default.quickList,
													children:
														0 === p.length
															? (0, r.jsx)("p", {
																	className: a.default.emptyState,
																	children:
																		"Destinations you open here will appear for one-click relaunch.",
																})
															: p.map((e) =>
																	(0, r.jsxs)(
																		"button",
																		{
																			type: "button",
																			className: a.default.quickLink,
																			onClick: () => void B(e.url),
																			children: [
																				(0, r.jsx)("span", {
																					children: e.label,
																				}),
																				(0, r.jsx)("small", {
																					children: e.url,
																				}),
																			],
																		},
																		e.url
																	)
																),
												}),
											],
										}),
									],
								}),
								(0, r.jsxs)("section", {
									className: a.default.consoleColumn,
									children: [
										(0, r.jsxs)("div", {
											className: a.default.consolePanel,
											children: [
												(0, r.jsxs)("div", {
													className: a.default.statusRow,
													children: [
														(0, r.jsxs)("div", {
															children: [
																(0, r.jsx)("p", {
																	className: a.default.panelLabel,
																	children: "Browser",
																}),
																(0, r.jsx)("h2", {
																	children: "Open pages inside OmniEdu",
																}),
															],
														}),
														(0, r.jsxs)("div", {
															className: a.default.badges,
															children: [
																(0, r.jsx)("span", {
																	className: a.default.badge,
																	children: y,
																}),
																(0, r.jsx)("span", {
																	className: a.default.badgeMuted,
																	children: x,
																}),
															],
														}),
													],
												}),
												(0, r.jsxs)("form", {
													className: a.default.omnibox,
													onSubmit: (e) => {
														(e.preventDefault(), B());
													},
													children: [
														(0, r.jsxs)("div", {
															className: a.default.controls,
															children: [
																(0, r.jsx)("button", {
																	type: "button",
																	onClick: () => O.current?.back(),
																	disabled: !k,
																	children: "Back",
																}),
																(0, r.jsx)("button", {
																	type: "button",
																	onClick: () => O.current?.forward(),
																	disabled: !k,
																	children: "Forward",
																}),
																(0, r.jsx)("button", {
																	type: "button",
																	onClick: () => O.current?.reload(),
																	disabled: !k,
																	children: "Reload",
																}),
															],
														}),
														(0, r.jsx)("input", {
															className: a.default.addressBar,
															value: m,
															onChange: (e) => h(e.target.value),
															placeholder: "Enter a URL or search query",
															autoCapitalize: "off",
															autoCorrect: "off",
															autoComplete: "off",
															spellCheck: !1,
														}),
														(0, r.jsxs)("div", {
															className: a.default.actions,
															children: [
																(0, r.jsx)("button", {
																	type: "submit",
																	disabled: !k || E,
																	children: E ? "Opening..." : "Launch",
																}),
																(0, r.jsx)("button", {
																	type: "button",
																	onClick: () => {
																		if (!L.current) return;
																		let e = i(m);
																		e &&
																			window.open(
																				L.current.encodeUrl(e),
																				"_blank",
																				"noopener"
																			);
																	},
																	disabled: !k,
																	children: "New tab",
																}),
															],
														}),
													],
												}),
												(0, r.jsxs)("div", {
													className: a.default.metaRow,
													children: [
														(0, r.jsxs)("p", {
															children: [
																"Current route:",
																(0, r.jsx)("span", { children: _ || " idle" }),
															],
														}),
														(0, r.jsx)("a", {
															href: "/api/health",
															target: "_blank",
															rel: "noreferrer",
															children: "Health check",
														}),
													],
												}),
												g
													? (0, r.jsx)("div", {
															className: a.default.errorBanner,
															children: g,
														})
													: null,
											],
										}),
										(0, r.jsxs)("div", {
											className: a.default.viewportPanel,
											children: [
												(0, r.jsxs)("div", {
													className: a.default.viewportChrome,
													children: [
														(0, r.jsx)("span", {}),
														(0, r.jsx)("span", {}),
														(0, r.jsx)("span", {}),
													],
												}),
												(0, r.jsxs)("div", {
													className: a.default.viewport,
													children: [
														(0, r.jsx)("div", {
															ref: P,
															className: a.default.frameMount,
														}),
														k
															? null
															: (0, r.jsx)("div", {
																	className: a.default.loadingState,
																	children: (0, r.jsx)("p", {
																		children:
																			"Preparing the Scramjet frame and transport stack...",
																	}),
																}),
													],
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
]);
