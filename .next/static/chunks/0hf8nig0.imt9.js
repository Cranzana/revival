(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	"object" == typeof document ? document.currentScript : void 0,
	18376,
	(t, e, i) => {
		"use strict";
		(Object.defineProperty(i, "__esModule", { value: !0 }),
			Object.defineProperty(i, "warnOnce", {
				enumerable: !0,
				get: function () {
					return s;
				},
			}));
		let s = (t) => {};
	},
	98990,
	(t, e, i) => {
		"use strict";
		Object.defineProperty(i, "__esModule", { value: !0 });
		var s = {
			DecodeError: function () {
				return v;
			},
			MiddlewareNotFoundError: function () {
				return w;
			},
			MissingStaticPage: function () {
				return O;
			},
			NormalizeError: function () {
				return g;
			},
			PageNotFoundError: function () {
				return b;
			},
			SP: function () {
				return y;
			},
			ST: function () {
				return m;
			},
			WEB_VITALS: function () {
				return n;
			},
			execOnce: function () {
				return a;
			},
			getDisplayName: function () {
				return h;
			},
			getLocationOrigin: function () {
				return c;
			},
			getURL: function () {
				return l;
			},
			isAbsoluteUrl: function () {
				return u;
			},
			isResSent: function () {
				return d;
			},
			loadGetInitialProps: function () {
				return p;
			},
			normalizeRepeatedSlashes: function () {
				return f;
			},
			stringifyError: function () {
				return C;
			},
		};
		for (var r in s) Object.defineProperty(i, r, { enumerable: !0, get: s[r] });
		let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
		function a(t) {
			let e,
				i = !1;
			return (...s) => (i || ((i = !0), (e = t(...s))), e);
		}
		let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			u = (t) => o.test(t);
		function c() {
			let { protocol: t, hostname: e, port: i } = window.location;
			return `${t}//${e}${i ? ":" + i : ""}`;
		}
		function l() {
			let { href: t } = window.location,
				e = c();
			return t.substring(e.length);
		}
		function h(t) {
			return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
		}
		function d(t) {
			return t.finished || t.headersSent;
		}
		function f(t) {
			let e = t.split("?");
			return (
				e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
				(e[1] ? `?${e.slice(1).join("?")}` : "")
			);
		}
		async function p(t, e) {
			let i = e.res || (e.ctx && e.ctx.res);
			if (!t.getInitialProps)
				return e.ctx && e.Component
					? { pageProps: await p(e.Component, e.ctx) }
					: {};
			let s = await t.getInitialProps(e);
			if (i && d(i)) return s;
			if (!s)
				throw Object.defineProperty(
					Error(
						`"${h(t)}.getInitialProps()" should resolve to an object. But found "${s}" instead.`
					),
					"__NEXT_ERROR_CODE",
					{ value: "E1025", enumerable: !1, configurable: !0 }
				);
			return s;
		}
		let y = "u" > typeof performance,
			m =
				y &&
				["mark", "measure", "getEntriesByName"].every(
					(t) => "function" == typeof performance[t]
				);
		class v extends Error {}
		class g extends Error {}
		class b extends Error {
			constructor(t) {
				(super(),
					(this.code = "ENOENT"),
					(this.name = "PageNotFoundError"),
					(this.message = `Cannot find module for page: ${t}`));
			}
		}
		class O extends Error {
			constructor(t, e) {
				(super(),
					(this.message = `Failed to load static file for page: ${t} ${e}`));
			}
		}
		class w extends Error {
			constructor() {
				(super(),
					(this.code = "ENOENT"),
					(this.message = "Cannot find the middleware module"));
			}
		}
		function C(t) {
			return JSON.stringify({ message: t.message, stack: t.stack });
		}
	},
	60004,
	(t, e, i) => {
		"use strict";
		Object.defineProperty(i, "__esModule", { value: !0 });
		var s = {
			assign: function () {
				return u;
			},
			searchParamsToUrlQuery: function () {
				return n;
			},
			urlQueryToSearchParams: function () {
				return o;
			},
		};
		for (var r in s) Object.defineProperty(i, r, { enumerable: !0, get: s[r] });
		function n(t) {
			let e = {};
			for (let [i, s] of t.entries()) {
				let t = e[i];
				void 0 === t
					? (e[i] = s)
					: Array.isArray(t)
						? t.push(s)
						: (e[i] = [t, s]);
			}
			return e;
		}
		function a(t) {
			return "string" == typeof t
				? t
				: ("number" != typeof t || isNaN(t)) && "boolean" != typeof t
					? ""
					: String(t);
		}
		function o(t) {
			let e = new URLSearchParams();
			for (let [i, s] of Object.entries(t))
				if (Array.isArray(s)) for (let t of s) e.append(i, a(t));
				else e.set(i, a(s));
			return e;
		}
		function u(t, ...e) {
			for (let i of e) {
				for (let e of i.keys()) t.delete(e);
				for (let [e, s] of i.entries()) t.append(e, s);
			}
			return t;
		}
	},
	94407,
	(t, e, i) => {
		"use strict";
		Object.defineProperty(i, "__esModule", { value: !0 });
		var s = {
			cancelIdleCallback: function () {
				return a;
			},
			requestIdleCallback: function () {
				return n;
			},
		};
		for (var r in s) Object.defineProperty(i, r, { enumerable: !0, get: s[r] });
		let n =
				("u" > typeof self &&
					self.requestIdleCallback &&
					self.requestIdleCallback.bind(window)) ||
				function (t) {
					let e = Date.now();
					return self.setTimeout(function () {
						t({
							didTimeout: !1,
							timeRemaining: function () {
								return Math.max(0, 50 - (Date.now() - e));
							},
						});
					}, 1);
				},
			a =
				("u" > typeof self &&
					self.cancelIdleCallback &&
					self.cancelIdleCallback.bind(window)) ||
				function (t) {
					return clearTimeout(t);
				};
		("function" == typeof i.default ||
			("object" == typeof i.default && null !== i.default)) &&
			void 0 === i.default.__esModule &&
			(Object.defineProperty(i.default, "__esModule", { value: !0 }),
			Object.assign(i.default, i),
			(e.exports = i.default));
	},
	36418,
	(t, e, i) => {
		"use strict";
		Object.defineProperty(i, "__esModule", { value: !0 });
		var s = {
			default: function () {
				return b;
			},
			handleClientScriptLoad: function () {
				return m;
			},
			initScriptLoader: function () {
				return v;
			},
		};
		for (var r in s) Object.defineProperty(i, r, { enumerable: !0, get: s[r] });
		let n = t.r(81258),
			a = t.r(44066),
			o = t.r(45145),
			u = n._(t.r(88822)),
			c = a._(t.r(50614)),
			l = t.r(76156),
			h = t.r(49402),
			d = t.r(94407),
			f = new Map(),
			p = new Set(),
			y = (t) => {
				let {
						src: e,
						id: i,
						onLoad: s = () => {},
						onReady: r = null,
						dangerouslySetInnerHTML: n,
						children: a = "",
						strategy: o = "afterInteractive",
						onError: c,
						stylesheets: l,
					} = t,
					d = i || e;
				if (d && p.has(d)) return;
				if (f.has(e)) {
					(p.add(d), f.get(e).then(s, c));
					return;
				}
				let y = () => {
						(r && r(), p.add(d));
					},
					m = document.createElement("script"),
					v = new Promise((t, e) => {
						(m.addEventListener("load", function (e) {
							(t(), s && s.call(this, e), y());
						}),
							m.addEventListener("error", function (t) {
								e(t);
							}));
					}).catch(function (t) {
						c && c(t);
					});
				(n
					? ((m.innerHTML = n.__html || ""), y())
					: a
						? ((m.textContent =
								"string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
							y())
						: e && ((m.src = e), f.set(e, v)),
					(0, h.setAttributesFromProps)(m, t),
					"worker" === o && m.setAttribute("type", "text/partytown"),
					m.setAttribute("data-nscript", o),
					l &&
						((t) => {
							if (u.default.preinit)
								return t.forEach((t) => {
									u.default.preinit(t, { as: "style" });
								});
							if ("u" > typeof window) {
								let e = document.head;
								t.forEach((t) => {
									let i = document.createElement("link");
									((i.type = "text/css"),
										(i.rel = "stylesheet"),
										(i.href = t),
										e.appendChild(i));
								});
							}
						})(l),
					document.body.appendChild(m));
			};
		function m(t) {
			let { strategy: e = "afterInteractive" } = t;
			"lazyOnload" === e
				? window.addEventListener("load", () => {
						(0, d.requestIdleCallback)(() => y(t));
					})
				: y(t);
		}
		function v(t) {
			(t.forEach(m),
				[
					...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
					...document.querySelectorAll('[data-nscript="beforePageRender"]'),
				].forEach((t) => {
					let e = t.id || t.getAttribute("src");
					p.add(e);
				}));
		}
		function g(t) {
			let {
					id: e,
					src: i = "",
					onLoad: s = () => {},
					onReady: r = null,
					strategy: n = "afterInteractive",
					onError: a,
					stylesheets: h,
					...f
				} = t,
				{
					updateScripts: m,
					scripts: v,
					getIsSsr: g,
					appDir: b,
					nonce: O,
				} = (0, c.useContext)(l.HeadManagerContext);
			O = f.nonce || O;
			let w = (0, c.useRef)(!1);
			(0, c.useEffect)(() => {
				let t = e || i;
				w.current || (r && t && p.has(t) && r(), (w.current = !0));
			}, [r, e, i]);
			let C = (0, c.useRef)(!1);
			if (
				((0, c.useEffect)(() => {
					if (!C.current) {
						if ("afterInteractive" === n) y(t);
						else
							"lazyOnload" === n &&
								("complete" === document.readyState
									? (0, d.requestIdleCallback)(() => y(t))
									: window.addEventListener("load", () => {
											(0, d.requestIdleCallback)(() => y(t));
										}));
						C.current = !0;
					}
				}, [t, n]),
				("beforeInteractive" === n || "worker" === n) &&
					(m
						? ((v[n] = (v[n] || []).concat([
								{
									id: e,
									src: i,
									onLoad: s,
									onReady: r,
									onError: a,
									...f,
									nonce: O,
								},
							])),
							m(v))
						: g && g()
							? p.add(e || i)
							: g && !g() && y({ ...t, nonce: O })),
				b)
			) {
				if (
					(h &&
						h.forEach((t) => {
							u.default.preinit(t, { as: "style" });
						}),
					"beforeInteractive" === n)
				)
					if (!i)
						return (
							f.dangerouslySetInnerHTML &&
								((f.children = f.dangerouslySetInnerHTML.__html),
								delete f.dangerouslySetInnerHTML),
							(0, o.jsx)("script", {
								nonce: O,
								dangerouslySetInnerHTML: {
									__html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0, { ...f, id: e }])})`,
								},
							})
						);
					else
						return (
							u.default.preload(
								i,
								f.integrity
									? {
											as: "script",
											integrity: f.integrity,
											nonce: O,
											crossOrigin: f.crossOrigin,
										}
									: { as: "script", nonce: O, crossOrigin: f.crossOrigin }
							),
							(0, o.jsx)("script", {
								nonce: O,
								dangerouslySetInnerHTML: {
									__html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([i, { ...f, id: e }])})`,
								},
							})
						);
				"afterInteractive" === n &&
					i &&
					u.default.preload(
						i,
						f.integrity
							? {
									as: "script",
									integrity: f.integrity,
									nonce: O,
									crossOrigin: f.crossOrigin,
								}
							: { as: "script", nonce: O, crossOrigin: f.crossOrigin }
					);
			}
			return null;
		}
		Object.defineProperty(g, "__nextScript", { value: !0 });
		let b = g;
		("function" == typeof i.default ||
			("object" == typeof i.default && null !== i.default)) &&
			void 0 === i.default.__esModule &&
			(Object.defineProperty(i.default, "__esModule", { value: !0 }),
			Object.assign(i.default, i),
			(e.exports = i.default));
	},
	69135,
	(t, e, i) => {
		e.exports = t.r(83257);
	},
	74948,
	(t) => {
		"use strict";
		var e = t.i(69135),
			i = t.i(50614);
		t.s([
			"BlankTitle",
			0,
			function () {
				let t = (0, e.usePathname)();
				return (
					(0, i.useEffect)(() => {
						let t = () => {
							"" !== document.title && (document.title = "");
						};
						t();
						let e = new MutationObserver(t);
						return (
							e.observe(document.head, {
								childList: !0,
								subtree: !0,
								characterData: !0,
							}),
							() => e.disconnect()
						);
					}, [t]),
					null
				);
			},
		]);
	},
	71007,
	(t) => {
		"use strict";
		let e, i, s, r, n, a, o;
		var u = t.i(45145);
		t.i(68860);
		var c = {
				setTimeout: (t, e) => setTimeout(t, e),
				clearTimeout: (t) => clearTimeout(t),
				setInterval: (t, e) => setInterval(t, e),
				clearInterval: (t) => clearInterval(t),
			},
			l = new (class {
				#t = c;
				#e = !1;
				setTimeoutProvider(t) {
					this.#t = t;
				}
				setTimeout(t, e) {
					return this.#t.setTimeout(t, e);
				}
				clearTimeout(t) {
					this.#t.clearTimeout(t);
				}
				setInterval(t, e) {
					return this.#t.setInterval(t, e);
				}
				clearInterval(t) {
					this.#t.clearInterval(t);
				}
			})(),
			h = "u" < typeof window || "Deno" in globalThis;
		function d() {}
		function f(t, e) {
			return "function" == typeof t ? t(e) : t;
		}
		function p(t, e) {
			let {
				type: i = "all",
				exact: s,
				fetchStatus: r,
				predicate: n,
				queryKey: a,
				stale: o,
			} = t;
			if (a) {
				if (s) {
					if (e.queryHash !== m(a, e.options)) return !1;
				} else if (!g(e.queryKey, a)) return !1;
			}
			if ("all" !== i) {
				let t = e.isActive();
				if (("active" === i && !t) || ("inactive" === i && t)) return !1;
			}
			return (
				("boolean" != typeof o || e.isStale() === o) &&
				(!r || r === e.state.fetchStatus) &&
				(!n || !!n(e))
			);
		}
		function y(t, e) {
			let { exact: i, status: s, predicate: r, mutationKey: n } = t;
			if (n) {
				if (!e.options.mutationKey) return !1;
				if (i) {
					if (v(e.options.mutationKey) !== v(n)) return !1;
				} else if (!g(e.options.mutationKey, n)) return !1;
			}
			return (!s || e.state.status === s) && (!r || !!r(e));
		}
		function m(t, e) {
			return (e?.queryKeyHashFn || v)(t);
		}
		function v(t) {
			return JSON.stringify(t, (t, e) =>
				w(e)
					? Object.keys(e)
							.sort()
							.reduce((t, i) => ((t[i] = e[i]), t), {})
					: e
			);
		}
		function g(t, e) {
			return (
				t === e ||
				(typeof t == typeof e &&
					!!t &&
					!!e &&
					"object" == typeof t &&
					"object" == typeof e &&
					Object.keys(e).every((i) => g(t[i], e[i])))
			);
		}
		var b = Object.prototype.hasOwnProperty;
		function O(t) {
			return Array.isArray(t) && t.length === Object.keys(t).length;
		}
		function w(t) {
			if (!C(t)) return !1;
			let e = t.constructor;
			if (void 0 === e) return !0;
			let i = e.prototype;
			return (
				!!C(i) &&
				!!i.hasOwnProperty("isPrototypeOf") &&
				Object.getPrototypeOf(t) === Object.prototype
			);
		}
		function C(t) {
			return "[object Object]" === Object.prototype.toString.call(t);
		}
		function P(t, e, i = 0) {
			let s = [...t, e];
			return i && s.length > i ? s.slice(1) : s;
		}
		function S(t, e, i = 0) {
			let s = [e, ...t];
			return i && s.length > i ? s.slice(0, -1) : s;
		}
		var q = Symbol();
		function E(t, e) {
			return !t.queryFn && e?.initialPromise
				? () => e.initialPromise
				: t.queryFn && t.queryFn !== q
					? t.queryFn
					: () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
		}
		var F =
				((e = []),
				(i = 0),
				(s = (t) => {
					t();
				}),
				(r = (t) => {
					t();
				}),
				(n = function (t) {
					setTimeout(t, 0);
				}),
				{
					batch: (t) => {
						let a;
						i++;
						try {
							a = t();
						} finally {
							let t;
							--i ||
								((t = e),
								(e = []),
								t.length &&
									n(() => {
										r(() => {
											t.forEach((t) => {
												s(t);
											});
										});
									}));
						}
						return a;
					},
					batchCalls:
						(t) =>
						(...e) => {
							a(() => {
								t(...e);
							});
						},
					schedule: (a = (t) => {
						i
							? e.push(t)
							: n(() => {
									s(t);
								});
					}),
					setNotifyFunction: (t) => {
						s = t;
					},
					setBatchNotifyFunction: (t) => {
						r = t;
					},
					setScheduler: (t) => {
						n = t;
					},
				}),
			T = class {
				constructor() {
					((this.listeners = new Set()),
						(this.subscribe = this.subscribe.bind(this)));
				}
				subscribe(t) {
					return (
						this.listeners.add(t),
						this.onSubscribe(),
						() => {
							(this.listeners.delete(t), this.onUnsubscribe());
						}
					);
				}
				hasListeners() {
					return this.listeners.size > 0;
				}
				onSubscribe() {}
				onUnsubscribe() {}
			},
			A = new (class extends T {
				#i;
				#s;
				#r;
				constructor() {
					(super(),
						(this.#r = (t) => {
							if ("u" > typeof window && window.addEventListener) {
								let e = () => t();
								return (
									window.addEventListener("visibilitychange", e, !1),
									() => {
										window.removeEventListener("visibilitychange", e);
									}
								);
							}
						}));
				}
				onSubscribe() {
					this.#s || this.setEventListener(this.#r);
				}
				onUnsubscribe() {
					this.hasListeners() || (this.#s?.(), (this.#s = void 0));
				}
				setEventListener(t) {
					((this.#r = t),
						this.#s?.(),
						(this.#s = t((t) => {
							"boolean" == typeof t ? this.setFocused(t) : this.onFocus();
						})));
				}
				setFocused(t) {
					this.#i !== t && ((this.#i = t), this.onFocus());
				}
				onFocus() {
					let t = this.isFocused();
					this.listeners.forEach((e) => {
						e(t);
					});
				}
				isFocused() {
					return "boolean" == typeof this.#i
						? this.#i
						: globalThis.document?.visibilityState !== "hidden";
				}
			})(),
			j = new (class extends T {
				#n = !0;
				#s;
				#r;
				constructor() {
					(super(),
						(this.#r = (t) => {
							if ("u" > typeof window && window.addEventListener) {
								let e = () => t(!0),
									i = () => t(!1);
								return (
									window.addEventListener("online", e, !1),
									window.addEventListener("offline", i, !1),
									() => {
										(window.removeEventListener("online", e),
											window.removeEventListener("offline", i));
									}
								);
							}
						}));
				}
				onSubscribe() {
					this.#s || this.setEventListener(this.#r);
				}
				onUnsubscribe() {
					this.hasListeners() || (this.#s?.(), (this.#s = void 0));
				}
				setEventListener(t) {
					((this.#r = t),
						this.#s?.(),
						(this.#s = t(this.setOnline.bind(this))));
				}
				setOnline(t) {
					this.#n !== t &&
						((this.#n = t),
						this.listeners.forEach((e) => {
							e(t);
						}));
				}
				isOnline() {
					return this.#n;
				}
			})(),
			M =
				((o = () => h),
				{
					isServer: () => o(),
					setIsServer(t) {
						o = t;
					},
				});
		function x(t) {
			return Math.min(1e3 * 2 ** t, 3e4);
		}
		function I(t) {
			return (t ?? "online") !== "online" || j.isOnline();
		}
		var D = class extends Error {
			constructor(t) {
				(super("CancelledError"),
					(this.revert = t?.revert),
					(this.silent = t?.silent));
			}
		};
		function _(t) {
			let e,
				i = !1,
				s = 0,
				r = (function () {
					let t,
						e,
						i = new Promise((i, s) => {
							((t = i), (e = s));
						});
					function s(t) {
						(Object.assign(i, t), delete i.resolve, delete i.reject);
					}
					return (
						(i.status = "pending"),
						i.catch(() => {}),
						(i.resolve = (e) => {
							(s({ status: "fulfilled", value: e }), t(e));
						}),
						(i.reject = (t) => {
							(s({ status: "rejected", reason: t }), e(t));
						}),
						i
					);
				})(),
				n = () =>
					A.isFocused() &&
					("always" === t.networkMode || j.isOnline()) &&
					t.canRun(),
				a = () => I(t.networkMode) && t.canRun(),
				o = (t) => {
					"pending" === r.status && (e?.(), r.resolve(t));
				},
				u = (t) => {
					"pending" === r.status && (e?.(), r.reject(t));
				},
				c = () =>
					new Promise((i) => {
						((e = (t) => {
							("pending" !== r.status || n()) && i(t);
						}),
							t.onPause?.());
					}).then(() => {
						((e = void 0), "pending" === r.status && t.onContinue?.());
					}),
				h = () => {
					let e;
					if ("pending" !== r.status) return;
					let a = 0 === s ? t.initialPromise : void 0;
					try {
						e = a ?? t.fn();
					} catch (t) {
						e = Promise.reject(t);
					}
					Promise.resolve(e)
						.then(o)
						.catch((e) => {
							if ("pending" !== r.status) return;
							let a = t.retry ?? 3 * !M.isServer(),
								o = t.retryDelay ?? x,
								d = "function" == typeof o ? o(s, e) : o,
								f =
									!0 === a ||
									("number" == typeof a && s < a) ||
									("function" == typeof a && a(s, e));
							i || !f
								? u(e)
								: (s++,
									t.onFail?.(s, e),
									new Promise((t) => {
										l.setTimeout(t, d);
									})
										.then(() => (n() ? void 0 : c()))
										.then(() => {
											i ? u(e) : h();
										}));
						});
				};
			return {
				promise: r,
				status: () => r.status,
				cancel: (e) => {
					if ("pending" === r.status) {
						let i = new D(e);
						(u(i), t.onCancel?.(i));
					}
				},
				continue: () => (e?.(), r),
				cancelRetry: () => {
					i = !0;
				},
				continueRetry: () => {
					i = !1;
				},
				canStart: a,
				start: () => (a() ? h() : c().then(h), r),
			};
		}
		var R = class {
				#a;
				destroy() {
					this.clearGcTimeout();
				}
				scheduleGc() {
					var t;
					(this.clearGcTimeout(),
						"number" == typeof (t = this.gcTime) &&
							t >= 0 &&
							t !== 1 / 0 &&
							(this.#a = l.setTimeout(() => {
								this.optionalRemove();
							}, this.gcTime)));
				}
				updateGcTime(t) {
					this.gcTime = Math.max(
						this.gcTime || 0,
						t ?? (M.isServer() ? 1 / 0 : 3e5)
					);
				}
				clearGcTimeout() {
					void 0 !== this.#a && (l.clearTimeout(this.#a), (this.#a = void 0));
				}
			},
			Q = class extends R {
				#o;
				#u;
				#c;
				#l;
				#h;
				#d;
				#f;
				constructor(t) {
					(super(),
						(this.#f = !1),
						(this.#d = t.defaultOptions),
						this.setOptions(t.options),
						(this.observers = []),
						(this.#l = t.client),
						(this.#c = this.#l.getQueryCache()),
						(this.queryKey = t.queryKey),
						(this.queryHash = t.queryHash),
						(this.#o = L(this.options)),
						(this.state = t.state ?? this.#o),
						this.scheduleGc());
				}
				get meta() {
					return this.options.meta;
				}
				get promise() {
					return this.#h?.promise;
				}
				setOptions(t) {
					if (
						((this.options = { ...this.#d, ...t }),
						this.updateGcTime(this.options.gcTime),
						this.state && void 0 === this.state.data)
					) {
						let t = L(this.options);
						void 0 !== t.data &&
							(this.setState(k(t.data, t.dataUpdatedAt)), (this.#o = t));
					}
				}
				optionalRemove() {
					this.observers.length ||
						"idle" !== this.state.fetchStatus ||
						this.#c.remove(this);
				}
				setData(t, e) {
					var i, s;
					let r =
						((i = this.state.data),
						"function" == typeof (s = this.options).structuralSharing
							? s.structuralSharing(i, t)
							: !1 !== s.structuralSharing
								? (function t(e, i, s = 0) {
										if (e === i) return e;
										if (s > 500) return i;
										let r = O(e) && O(i);
										if (!r && !(w(e) && w(i))) return i;
										let n = (r ? e : Object.keys(e)).length,
											a = r ? i : Object.keys(i),
											o = a.length,
											u = r ? Array(o) : {},
											c = 0;
										for (let l = 0; l < o; l++) {
											let o = r ? l : a[l],
												h = e[o],
												d = i[o];
											if (h === d) {
												((u[o] = h), (r ? l < n : b.call(e, o)) && c++);
												continue;
											}
											if (
												null === h ||
												null === d ||
												"object" != typeof h ||
												"object" != typeof d
											) {
												u[o] = d;
												continue;
											}
											let f = t(h, d, s + 1);
											((u[o] = f), f === h && c++);
										}
										return n === o && c === n ? e : u;
									})(i, t)
								: t);
					return (
						this.#p({
							data: r,
							type: "success",
							dataUpdatedAt: e?.updatedAt,
							manual: e?.manual,
						}),
						r
					);
				}
				setState(t, e) {
					this.#p({ type: "setState", state: t, setStateOptions: e });
				}
				cancel(t) {
					let e = this.#h?.promise;
					return (
						this.#h?.cancel(t),
						e ? e.then(d).catch(d) : Promise.resolve()
					);
				}
				destroy() {
					(super.destroy(), this.cancel({ silent: !0 }));
				}
				get resetState() {
					return this.#o;
				}
				reset() {
					(this.destroy(), this.setState(this.resetState));
				}
				isActive() {
					return this.observers.some((t) => {
						var e;
						return (
							!1 !==
							((e = t.options.enabled), "function" == typeof e ? e(this) : e)
						);
					});
				}
				isDisabled() {
					return this.getObserversCount() > 0
						? !this.isActive()
						: this.options.queryFn === q || !this.isFetched();
				}
				isFetched() {
					return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
				}
				isStatic() {
					return (
						this.getObserversCount() > 0 &&
						this.observers.some(
							(t) => "static" === f(t.options.staleTime, this)
						)
					);
				}
				isStale() {
					return this.getObserversCount() > 0
						? this.observers.some((t) => t.getCurrentResult().isStale)
						: void 0 === this.state.data || this.state.isInvalidated;
				}
				isStaleByTime(t = 0) {
					return (
						void 0 === this.state.data ||
						("static" !== t &&
							(!!this.state.isInvalidated ||
								!Math.max(this.state.dataUpdatedAt + (t || 0) - Date.now(), 0)))
					);
				}
				onFocus() {
					let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
					(t?.refetch({ cancelRefetch: !1 }), this.#h?.continue());
				}
				onOnline() {
					let t = this.observers.find((t) => t.shouldFetchOnReconnect());
					(t?.refetch({ cancelRefetch: !1 }), this.#h?.continue());
				}
				addObserver(t) {
					this.observers.includes(t) ||
						(this.observers.push(t),
						this.clearGcTimeout(),
						this.#c.notify({
							type: "observerAdded",
							query: this,
							observer: t,
						}));
				}
				removeObserver(t) {
					this.observers.includes(t) &&
						((this.observers = this.observers.filter((e) => e !== t)),
						this.observers.length ||
							(this.#h &&
								(this.#f || this.#y()
									? this.#h.cancel({ revert: !0 })
									: this.#h.cancelRetry()),
							this.scheduleGc()),
						this.#c.notify({
							type: "observerRemoved",
							query: this,
							observer: t,
						}));
				}
				getObserversCount() {
					return this.observers.length;
				}
				#y() {
					return (
						"paused" === this.state.fetchStatus &&
						"pending" === this.state.status
					);
				}
				invalidate() {
					this.state.isInvalidated || this.#p({ type: "invalidate" });
				}
				async fetch(t, e) {
					let i;
					if (
						"idle" !== this.state.fetchStatus &&
						this.#h?.status() !== "rejected"
					) {
						if (void 0 !== this.state.data && e?.cancelRefetch)
							this.cancel({ silent: !0 });
						else if (this.#h) return (this.#h.continueRetry(), this.#h.promise);
					}
					if ((t && this.setOptions(t), !this.options.queryFn)) {
						let t = this.observers.find((t) => t.options.queryFn);
						t && this.setOptions(t.options);
					}
					let s = new AbortController(),
						r = (t) => {
							Object.defineProperty(t, "signal", {
								enumerable: !0,
								get: () => ((this.#f = !0), s.signal),
							});
						},
						n = () => {
							let t,
								i = E(this.options, e),
								s =
									(r(
										(t = {
											client: this.#l,
											queryKey: this.queryKey,
											meta: this.meta,
										})
									),
									t);
							return ((this.#f = !1), this.options.persister)
								? this.options.persister(i, s, this)
								: i(s);
						},
						a =
							(r(
								(i = {
									fetchOptions: e,
									options: this.options,
									queryKey: this.queryKey,
									client: this.#l,
									state: this.state,
									fetchFn: n,
								})
							),
							i);
					(this.options.behavior?.onFetch(a, this),
						(this.#u = this.state),
						("idle" === this.state.fetchStatus ||
							this.state.fetchMeta !== a.fetchOptions?.meta) &&
							this.#p({ type: "fetch", meta: a.fetchOptions?.meta }),
						(this.#h = _({
							initialPromise: e?.initialPromise,
							fn: a.fetchFn,
							onCancel: (t) => {
								(t instanceof D &&
									t.revert &&
									this.setState({ ...this.#u, fetchStatus: "idle" }),
									s.abort());
							},
							onFail: (t, e) => {
								this.#p({ type: "failed", failureCount: t, error: e });
							},
							onPause: () => {
								this.#p({ type: "pause" });
							},
							onContinue: () => {
								this.#p({ type: "continue" });
							},
							retry: a.options.retry,
							retryDelay: a.options.retryDelay,
							networkMode: a.options.networkMode,
							canRun: () => !0,
						})));
					try {
						let t = await this.#h.start();
						if (void 0 === t)
							throw Error(`${this.queryHash} data is undefined`);
						return (
							this.setData(t),
							this.#c.config.onSuccess?.(t, this),
							this.#c.config.onSettled?.(t, this.state.error, this),
							t
						);
					} catch (t) {
						if (t instanceof D) {
							if (t.silent) return this.#h.promise;
							else if (t.revert) {
								if (void 0 === this.state.data) throw t;
								return this.state.data;
							}
						}
						throw (
							this.#p({ type: "error", error: t }),
							this.#c.config.onError?.(t, this),
							this.#c.config.onSettled?.(this.state.data, t, this),
							t
						);
					} finally {
						this.scheduleGc();
					}
				}
				#p(t) {
					let e = (e) => {
						switch (t.type) {
							case "failed":
								return {
									...e,
									fetchFailureCount: t.failureCount,
									fetchFailureReason: t.error,
								};
							case "pause":
								return { ...e, fetchStatus: "paused" };
							case "continue":
								return { ...e, fetchStatus: "fetching" };
							case "fetch":
								var i;
								return {
									...e,
									...((i = e.data),
									{
										fetchFailureCount: 0,
										fetchFailureReason: null,
										fetchStatus: I(this.options.networkMode)
											? "fetching"
											: "paused",
										...(void 0 === i && { error: null, status: "pending" }),
									}),
									fetchMeta: t.meta ?? null,
								};
							case "success":
								let s = {
									...e,
									...k(t.data, t.dataUpdatedAt),
									dataUpdateCount: e.dataUpdateCount + 1,
									...(!t.manual && {
										fetchStatus: "idle",
										fetchFailureCount: 0,
										fetchFailureReason: null,
									}),
								};
								return ((this.#u = t.manual ? s : void 0), s);
							case "error":
								let r = t.error;
								return {
									...e,
									error: r,
									errorUpdateCount: e.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: e.fetchFailureCount + 1,
									fetchFailureReason: r,
									fetchStatus: "idle",
									status: "error",
									isInvalidated: !0,
								};
							case "invalidate":
								return { ...e, isInvalidated: !0 };
							case "setState":
								return { ...e, ...t.state };
						}
					};
					((this.state = e(this.state)),
						F.batch(() => {
							(this.observers.forEach((t) => {
								t.onQueryUpdate();
							}),
								this.#c.notify({ query: this, type: "updated", action: t }));
						}));
				}
			};
		function k(t, e) {
			return {
				data: t,
				dataUpdatedAt: e ?? Date.now(),
				error: null,
				isInvalidated: !1,
				status: "success",
			};
		}
		function L(t) {
			let e =
					"function" == typeof t.initialData ? t.initialData() : t.initialData,
				i = void 0 !== e,
				s = i
					? "function" == typeof t.initialDataUpdatedAt
						? t.initialDataUpdatedAt()
						: t.initialDataUpdatedAt
					: 0;
			return {
				data: e,
				dataUpdateCount: 0,
				dataUpdatedAt: i ? (s ?? Date.now()) : 0,
				error: null,
				errorUpdateCount: 0,
				errorUpdatedAt: 0,
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchMeta: null,
				isInvalidated: !1,
				status: i ? "success" : "pending",
				fetchStatus: "idle",
			};
		}
		var U = class extends T {
				constructor(t = {}) {
					(super(), (this.config = t), (this.#m = new Map()));
				}
				#m;
				build(t, e, i) {
					let s = e.queryKey,
						r = e.queryHash ?? m(s, e),
						n = this.get(r);
					return (
						n ||
							((n = new Q({
								client: t,
								queryKey: s,
								queryHash: r,
								options: t.defaultQueryOptions(e),
								state: i,
								defaultOptions: t.getQueryDefaults(s),
							})),
							this.add(n)),
						n
					);
				}
				add(t) {
					this.#m.has(t.queryHash) ||
						(this.#m.set(t.queryHash, t),
						this.notify({ type: "added", query: t }));
				}
				remove(t) {
					let e = this.#m.get(t.queryHash);
					e &&
						(t.destroy(),
						e === t && this.#m.delete(t.queryHash),
						this.notify({ type: "removed", query: t }));
				}
				clear() {
					F.batch(() => {
						this.getAll().forEach((t) => {
							this.remove(t);
						});
					});
				}
				get(t) {
					return this.#m.get(t);
				}
				getAll() {
					return [...this.#m.values()];
				}
				find(t) {
					let e = { exact: !0, ...t };
					return this.getAll().find((t) => p(e, t));
				}
				findAll(t = {}) {
					let e = this.getAll();
					return Object.keys(t).length > 0 ? e.filter((e) => p(t, e)) : e;
				}
				notify(t) {
					F.batch(() => {
						this.listeners.forEach((e) => {
							e(t);
						});
					});
				}
				onFocus() {
					F.batch(() => {
						this.getAll().forEach((t) => {
							t.onFocus();
						});
					});
				}
				onOnline() {
					F.batch(() => {
						this.getAll().forEach((t) => {
							t.onOnline();
						});
					});
				}
			},
			K = class extends R {
				#l;
				#v;
				#g;
				#h;
				constructor(t) {
					(super(),
						(this.#l = t.client),
						(this.mutationId = t.mutationId),
						(this.#g = t.mutationCache),
						(this.#v = []),
						(this.state = t.state || {
							context: void 0,
							data: void 0,
							error: null,
							failureCount: 0,
							failureReason: null,
							isPaused: !1,
							status: "idle",
							variables: void 0,
							submittedAt: 0,
						}),
						this.setOptions(t.options),
						this.scheduleGc());
				}
				setOptions(t) {
					((this.options = t), this.updateGcTime(this.options.gcTime));
				}
				get meta() {
					return this.options.meta;
				}
				addObserver(t) {
					this.#v.includes(t) ||
						(this.#v.push(t),
						this.clearGcTimeout(),
						this.#g.notify({
							type: "observerAdded",
							mutation: this,
							observer: t,
						}));
				}
				removeObserver(t) {
					((this.#v = this.#v.filter((e) => e !== t)),
						this.scheduleGc(),
						this.#g.notify({
							type: "observerRemoved",
							mutation: this,
							observer: t,
						}));
				}
				optionalRemove() {
					this.#v.length ||
						("pending" === this.state.status
							? this.scheduleGc()
							: this.#g.remove(this));
				}
				continue() {
					return this.#h?.continue() ?? this.execute(this.state.variables);
				}
				async execute(t) {
					let e = () => {
							this.#p({ type: "continue" });
						},
						i = {
							client: this.#l,
							meta: this.options.meta,
							mutationKey: this.options.mutationKey,
						};
					this.#h = _({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(t, i)
								: Promise.reject(Error("No mutationFn found")),
						onFail: (t, e) => {
							this.#p({ type: "failed", failureCount: t, error: e });
						},
						onPause: () => {
							this.#p({ type: "pause" });
						},
						onContinue: e,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#g.canRun(this),
					});
					let s = "pending" === this.state.status,
						r = !this.#h.canStart();
					try {
						if (s) e();
						else {
							(this.#p({ type: "pending", variables: t, isPaused: r }),
								this.#g.config.onMutate &&
									(await this.#g.config.onMutate(t, this, i)));
							let e = await this.options.onMutate?.(t, i);
							e !== this.state.context &&
								this.#p({
									type: "pending",
									context: e,
									variables: t,
									isPaused: r,
								});
						}
						let n = await this.#h.start();
						return (
							await this.#g.config.onSuccess?.(
								n,
								t,
								this.state.context,
								this,
								i
							),
							await this.options.onSuccess?.(n, t, this.state.context, i),
							await this.#g.config.onSettled?.(
								n,
								null,
								this.state.variables,
								this.state.context,
								this,
								i
							),
							await this.options.onSettled?.(n, null, t, this.state.context, i),
							this.#p({ type: "success", data: n }),
							n
						);
					} catch (e) {
						try {
							await this.#g.config.onError?.(e, t, this.state.context, this, i);
						} catch (t) {
							Promise.reject(t);
						}
						try {
							await this.options.onError?.(e, t, this.state.context, i);
						} catch (t) {
							Promise.reject(t);
						}
						try {
							await this.#g.config.onSettled?.(
								void 0,
								e,
								this.state.variables,
								this.state.context,
								this,
								i
							);
						} catch (t) {
							Promise.reject(t);
						}
						try {
							await this.options.onSettled?.(
								void 0,
								e,
								t,
								this.state.context,
								i
							);
						} catch (t) {
							Promise.reject(t);
						}
						throw (this.#p({ type: "error", error: e }), e);
					} finally {
						this.#g.runNext(this);
					}
				}
				#p(t) {
					((this.state = ((e) => {
						switch (t.type) {
							case "failed":
								return {
									...e,
									failureCount: t.failureCount,
									failureReason: t.error,
								};
							case "pause":
								return { ...e, isPaused: !0 };
							case "continue":
								return { ...e, isPaused: !1 };
							case "pending":
								return {
									...e,
									context: t.context,
									data: void 0,
									failureCount: 0,
									failureReason: null,
									error: null,
									isPaused: t.isPaused,
									status: "pending",
									variables: t.variables,
									submittedAt: Date.now(),
								};
							case "success":
								return {
									...e,
									data: t.data,
									failureCount: 0,
									failureReason: null,
									error: null,
									status: "success",
									isPaused: !1,
								};
							case "error":
								return {
									...e,
									data: void 0,
									error: t.error,
									failureCount: e.failureCount + 1,
									failureReason: t.error,
									isPaused: !1,
									status: "error",
								};
						}
					})(this.state)),
						F.batch(() => {
							(this.#v.forEach((e) => {
								e.onMutationUpdate(t);
							}),
								this.#g.notify({ mutation: this, type: "updated", action: t }));
						}));
				}
			},
			N = class extends T {
				constructor(t = {}) {
					(super(),
						(this.config = t),
						(this.#b = new Set()),
						(this.#O = new Map()),
						(this.#w = 0));
				}
				#b;
				#O;
				#w;
				build(t, e, i) {
					let s = new K({
						client: t,
						mutationCache: this,
						mutationId: ++this.#w,
						options: t.defaultMutationOptions(e),
						state: i,
					});
					return (this.add(s), s);
				}
				add(t) {
					this.#b.add(t);
					let e = H(t);
					if ("string" == typeof e) {
						let i = this.#O.get(e);
						i ? i.push(t) : this.#O.set(e, [t]);
					}
					this.notify({ type: "added", mutation: t });
				}
				remove(t) {
					if (this.#b.delete(t)) {
						let e = H(t);
						if ("string" == typeof e) {
							let i = this.#O.get(e);
							if (i)
								if (i.length > 1) {
									let e = i.indexOf(t);
									-1 !== e && i.splice(e, 1);
								} else i[0] === t && this.#O.delete(e);
						}
					}
					this.notify({ type: "removed", mutation: t });
				}
				canRun(t) {
					let e = H(t);
					if ("string" != typeof e) return !0;
					{
						let i = this.#O.get(e),
							s = i?.find((t) => "pending" === t.state.status);
						return !s || s === t;
					}
				}
				runNext(t) {
					let e = H(t);
					if ("string" != typeof e) return Promise.resolve();
					{
						let i = this.#O.get(e)?.find((e) => e !== t && e.state.isPaused);
						return i?.continue() ?? Promise.resolve();
					}
				}
				clear() {
					F.batch(() => {
						(this.#b.forEach((t) => {
							this.notify({ type: "removed", mutation: t });
						}),
							this.#b.clear(),
							this.#O.clear());
					});
				}
				getAll() {
					return Array.from(this.#b);
				}
				find(t) {
					let e = { exact: !0, ...t };
					return this.getAll().find((t) => y(e, t));
				}
				findAll(t = {}) {
					return this.getAll().filter((e) => y(t, e));
				}
				notify(t) {
					F.batch(() => {
						this.listeners.forEach((e) => {
							e(t);
						});
					});
				}
				resumePausedMutations() {
					let t = this.getAll().filter((t) => t.state.isPaused);
					return F.batch(() =>
						Promise.all(t.map((t) => t.continue().catch(d)))
					);
				}
			};
		function H(t) {
			return t.options.scope?.id;
		}
		function G(t) {
			return {
				onFetch: (e, i) => {
					let s = e.options,
						r = e.fetchOptions?.meta?.fetchMore?.direction,
						n = e.state.data?.pages || [],
						a = e.state.data?.pageParams || [],
						o = { pages: [], pageParams: [] },
						u = 0,
						c = async () => {
							let i = !1,
								c = E(e.options, e.fetchOptions),
								l = async (t, s, r) => {
									if (i) return Promise.reject();
									if (null == s && t.pages.length) return Promise.resolve(t);
									let n = (() => {
											var t, n;
											let a,
												o,
												u = {
													client: e.client,
													queryKey: e.queryKey,
													pageParam: s,
													direction: r ? "backward" : "forward",
													meta: e.options.meta,
												};
											return (
												(t = () => e.signal),
												(n = () => (i = !0)),
												(o = !1),
												Object.defineProperty(u, "signal", {
													enumerable: !0,
													get: () => (
														(a ??= t()),
														o ||
															((o = !0),
															a.aborted
																? n()
																: a.addEventListener("abort", n, { once: !0 })),
														a
													),
												}),
												u
											);
										})(),
										a = await c(n),
										{ maxPages: o } = e.options,
										u = r ? S : P;
									return {
										pages: u(t.pages, a, o),
										pageParams: u(t.pageParams, s, o),
									};
								};
							if (r && n.length) {
								let t = "backward" === r,
									e = { pages: n, pageParams: a },
									i = (
										t
											? function (t, { pages: e, pageParams: i }) {
													return e.length > 0
														? t.getPreviousPageParam?.(e[0], e, i[0], i)
														: void 0;
												}
											: $
									)(s, e);
								o = await l(e, i, t);
							} else {
								let e = t ?? n.length;
								do {
									let t = 0 === u ? (a[0] ?? s.initialPageParam) : $(s, o);
									if (u > 0 && null == t) break;
									((o = await l(o, t)), u++);
								} while (u < e);
							}
							return o;
						};
					e.options.persister
						? (e.fetchFn = () =>
								e.options.persister?.(
									c,
									{
										client: e.client,
										queryKey: e.queryKey,
										meta: e.options.meta,
										signal: e.signal,
									},
									i
								))
						: (e.fetchFn = c);
				},
			};
		}
		function $(t, { pages: e, pageParams: i }) {
			let s = e.length - 1;
			return e.length > 0 ? t.getNextPageParam(e[s], e, i[s], i) : void 0;
		}
		var B = class {
				#C;
				#g;
				#d;
				#P;
				#S;
				#q;
				#E;
				#F;
				constructor(t = {}) {
					((this.#C = t.queryCache || new U()),
						(this.#g = t.mutationCache || new N()),
						(this.#d = t.defaultOptions || {}),
						(this.#P = new Map()),
						(this.#S = new Map()),
						(this.#q = 0));
				}
				mount() {
					(this.#q++,
						1 === this.#q &&
							((this.#E = A.subscribe(async (t) => {
								t && (await this.resumePausedMutations(), this.#C.onFocus());
							})),
							(this.#F = j.subscribe(async (t) => {
								t && (await this.resumePausedMutations(), this.#C.onOnline());
							}))));
				}
				unmount() {
					(this.#q--,
						0 === this.#q &&
							(this.#E?.(),
							(this.#E = void 0),
							this.#F?.(),
							(this.#F = void 0)));
				}
				isFetching(t) {
					return this.#C.findAll({ ...t, fetchStatus: "fetching" }).length;
				}
				isMutating(t) {
					return this.#g.findAll({ ...t, status: "pending" }).length;
				}
				getQueryData(t) {
					let e = this.defaultQueryOptions({ queryKey: t });
					return this.#C.get(e.queryHash)?.state.data;
				}
				ensureQueryData(t) {
					let e = this.defaultQueryOptions(t),
						i = this.#C.build(this, e),
						s = i.state.data;
					return void 0 === s
						? this.fetchQuery(t)
						: (t.revalidateIfStale &&
								i.isStaleByTime(f(e.staleTime, i)) &&
								this.prefetchQuery(e),
							Promise.resolve(s));
				}
				getQueriesData(t) {
					return this.#C
						.findAll(t)
						.map(({ queryKey: t, state: e }) => [t, e.data]);
				}
				setQueryData(t, e, i) {
					let s = this.defaultQueryOptions({ queryKey: t }),
						r = this.#C.get(s.queryHash),
						n = r?.state.data,
						a = "function" == typeof e ? e(n) : e;
					if (void 0 !== a)
						return this.#C.build(this, s).setData(a, { ...i, manual: !0 });
				}
				setQueriesData(t, e, i) {
					return F.batch(() =>
						this.#C
							.findAll(t)
							.map(({ queryKey: t }) => [t, this.setQueryData(t, e, i)])
					);
				}
				getQueryState(t) {
					let e = this.defaultQueryOptions({ queryKey: t });
					return this.#C.get(e.queryHash)?.state;
				}
				removeQueries(t) {
					let e = this.#C;
					F.batch(() => {
						e.findAll(t).forEach((t) => {
							e.remove(t);
						});
					});
				}
				resetQueries(t, e) {
					let i = this.#C;
					return F.batch(
						() => (
							i.findAll(t).forEach((t) => {
								t.reset();
							}),
							this.refetchQueries({ type: "active", ...t }, e)
						)
					);
				}
				cancelQueries(t, e = {}) {
					let i = { revert: !0, ...e };
					return Promise.all(
						F.batch(() => this.#C.findAll(t).map((t) => t.cancel(i)))
					)
						.then(d)
						.catch(d);
				}
				invalidateQueries(t, e = {}) {
					return F.batch(() =>
						(this.#C.findAll(t).forEach((t) => {
							t.invalidate();
						}),
						t?.refetchType === "none")
							? Promise.resolve()
							: this.refetchQueries(
									{ ...t, type: t?.refetchType ?? t?.type ?? "active" },
									e
								)
					);
				}
				refetchQueries(t, e = {}) {
					let i = { ...e, cancelRefetch: e.cancelRefetch ?? !0 };
					return Promise.all(
						F.batch(() =>
							this.#C
								.findAll(t)
								.filter((t) => !t.isDisabled() && !t.isStatic())
								.map((t) => {
									let e = t.fetch(void 0, i);
									return (
										i.throwOnError || (e = e.catch(d)),
										"paused" === t.state.fetchStatus ? Promise.resolve() : e
									);
								})
						)
					).then(d);
				}
				fetchQuery(t) {
					let e = this.defaultQueryOptions(t);
					void 0 === e.retry && (e.retry = !1);
					let i = this.#C.build(this, e);
					return i.isStaleByTime(f(e.staleTime, i))
						? i.fetch(e)
						: Promise.resolve(i.state.data);
				}
				prefetchQuery(t) {
					return this.fetchQuery(t).then(d).catch(d);
				}
				fetchInfiniteQuery(t) {
					return ((t.behavior = G(t.pages)), this.fetchQuery(t));
				}
				prefetchInfiniteQuery(t) {
					return this.fetchInfiniteQuery(t).then(d).catch(d);
				}
				ensureInfiniteQueryData(t) {
					return ((t.behavior = G(t.pages)), this.ensureQueryData(t));
				}
				resumePausedMutations() {
					return j.isOnline()
						? this.#g.resumePausedMutations()
						: Promise.resolve();
				}
				getQueryCache() {
					return this.#C;
				}
				getMutationCache() {
					return this.#g;
				}
				getDefaultOptions() {
					return this.#d;
				}
				setDefaultOptions(t) {
					this.#d = t;
				}
				setQueryDefaults(t, e) {
					this.#P.set(v(t), { queryKey: t, defaultOptions: e });
				}
				getQueryDefaults(t) {
					let e = [...this.#P.values()],
						i = {};
					return (
						e.forEach((e) => {
							g(t, e.queryKey) && Object.assign(i, e.defaultOptions);
						}),
						i
					);
				}
				setMutationDefaults(t, e) {
					this.#S.set(v(t), { mutationKey: t, defaultOptions: e });
				}
				getMutationDefaults(t) {
					let e = [...this.#S.values()],
						i = {};
					return (
						e.forEach((e) => {
							g(t, e.mutationKey) && Object.assign(i, e.defaultOptions);
						}),
						i
					);
				}
				defaultQueryOptions(t) {
					if (t._defaulted) return t;
					let e = {
						...this.#d.queries,
						...this.getQueryDefaults(t.queryKey),
						...t,
						_defaulted: !0,
					};
					return (
						e.queryHash || (e.queryHash = m(e.queryKey, e)),
						void 0 === e.refetchOnReconnect &&
							(e.refetchOnReconnect = "always" !== e.networkMode),
						void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
						!e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
						e.queryFn === q && (e.enabled = !1),
						e
					);
				}
				defaultMutationOptions(t) {
					return t?._defaulted
						? t
						: {
								...this.#d.mutations,
								...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
								...t,
								_defaulted: !0,
							};
				}
				clear() {
					(this.#C.clear(), this.#g.clear());
				}
			},
			z = t.i(50614),
			W = z.createContext(void 0),
			J = ({ client: t, children: e }) => (
				z.useEffect(
					() => (
						t.mount(),
						() => {
							t.unmount();
						}
					),
					[t]
				),
				(0, u.jsx)(W.Provider, { value: t, children: e })
			);
		t.s(
			[
				"AppProviders",
				0,
				function ({ children: t }) {
					let [e] = (0, z.useState)(
						() =>
							new B({
								defaultOptions: {
									queries: { refetchOnWindowFocus: !1, staleTime: 3e4 },
								},
							})
					);
					return (
						(0, z.useEffect)(() => {
							"serviceWorker" in navigator &&
								navigator.serviceWorker.register("/sw.js", { scope: "/" });
						}, []),
						(0, u.jsx)(J, { client: e, children: t })
					);
				},
			],
			71007
		);
	},
]);
