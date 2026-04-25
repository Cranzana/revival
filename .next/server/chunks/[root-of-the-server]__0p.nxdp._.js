module.exports = [
	18622,
	(e, t, r) => {
		t.exports = e.x(
			"next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",
			() =>
				require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js")
		);
	},
	56704,
	(e, t, r) => {
		t.exports = e.x(
			"next/dist/server/app-render/work-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/work-async-storage.external.js")
		);
	},
	32319,
	(e, t, r) => {
		t.exports = e.x(
			"next/dist/server/app-render/work-unit-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/work-unit-async-storage.external.js")
		);
	},
	70406,
	(e, t, r) => {
		t.exports = e.x("next/dist/compiled/@opentelemetry/api", () =>
			require("next/dist/compiled/@opentelemetry/api")
		);
	},
	93695,
	(e, t, r) => {
		t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
			require("next/dist/shared/lib/no-fallback-error.external.js")
		);
	},
	20942,
	(e) => {
		"use strict";
		var t = e.i(83097),
			r = e.i(14007),
			a = e.i(72673),
			n = e.i(20180),
			i = e.i(65695),
			o = e.i(69428),
			s = e.i(79761),
			l = e.i(38734),
			d = e.i(72857),
			u = e.i(65754),
			p = e.i(23683),
			c = e.i(80947),
			h = e.i(8854),
			x = e.i(53134),
			R = e.i(10219),
			v = e.i(93695);
		e.i(54624);
		var g = e.i(14185);
		e.s(
			[
				"GET",
				0,
				function () {
					return Response.json({
						ok: !0,
						service: "omniedu-web",
						features: ["app-router", "proxy-lab", "middleware", "pwa"],
						timestamp: new Date().toISOString(),
					});
				},
			],
			57007
		);
		var m = e.i(57007);
		let w = new t.AppRouteRouteModule({
				definition: {
					kind: r.RouteKind.APP_ROUTE,
					page: "/api/health/route",
					pathname: "/api/health",
					filename: "route",
					bundlePath: "",
				},
				distDir: ".next",
				relativeProjectDir: "",
				resolvedPagePath: "[project]/app/api/health/route.ts",
				nextConfigOutput: "",
				userland: m,
				...{},
			}),
			{ workAsyncStorage: f, workUnitAsyncStorage: E, serverHooks: C } = w;
		async function y(e, t, a) {
			(a.requestMeta && (0, n.setRequestMeta)(e, a.requestMeta),
				w.isDev &&
					(0, n.addRequestMeta)(
						e,
						"devRequestTimingInternalsEnd",
						process.hrtime.bigint()
					));
			let m = "/api/health/route";
			m = m.replace(/\/index$/, "") || "/";
			let f = await w.prepare(e, t, { srcPage: m, multiZoneDraftMode: !1 });
			if (!f)
				return (
					(t.statusCode = 400),
					t.end("Bad Request"),
					null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
					null
				);
			let {
					buildId: E,
					params: C,
					nextConfig: y,
					parsedUrl: b,
					isDraftMode: A,
					prerenderManifest: T,
					routerServerContext: N,
					isOnDemandRevalidate: P,
					revalidateOnlyGenerated: S,
					resolvedPathname: q,
					clientReferenceManifest: O,
					serverActionsManifest: _,
				} = f,
				k = (0, s.normalizeAppPath)(m),
				H = !!(T.dynamicRoutes[k] || T.routes[q]),
				I = async () => (
					(null == N ? void 0 : N.render404)
						? await N.render404(e, t, b, !1)
						: t.end("This page could not be found"),
					null
				);
			if (H && !A) {
				let e = !!T.routes[q],
					t = T.dynamicRoutes[k];
				if (t && !1 === t.fallback && !e) {
					if (y.adapterPath) return await I();
					throw new v.NoFallbackError();
				}
			}
			let j = null;
			!H || w.isDev || A || (j = "/index" === (j = q) ? "/" : j);
			let U = !0 === w.isDev || !H,
				M = H && !U;
			_ &&
				O &&
				(0, o.setManifestsSingleton)({
					page: m,
					clientReferenceManifest: O,
					serverActionsManifest: _,
				});
			let D = e.method || "GET",
				$ = (0, i.getTracer)(),
				F = $.getActiveScopeSpan(),
				K = !!(null == N ? void 0 : N.isWrappedByNextServer),
				B = !!(0, n.getRequestMeta)(e, "minimalMode"),
				L =
					(0, n.getRequestMeta)(e, "incrementalCache") ||
					(await w.getIncrementalCache(e, y, T, B));
			(null == L || L.resetRequestCache(), (globalThis.__incrementalCache = L));
			let G = {
					params: C,
					previewProps: T.preview,
					renderOpts: {
						experimental: { authInterrupts: !!y.experimental.authInterrupts },
						cacheComponents: !!y.cacheComponents,
						supportsDynamicResponse: U,
						incrementalCache: L,
						cacheLifeProfiles: y.cacheLife,
						waitUntil: a.waitUntil,
						onClose: (e) => {
							t.on("close", e);
						},
						onAfterTaskError: void 0,
						onInstrumentationRequestError: (t, r, a, n) =>
							w.onRequestError(e, t, a, n, N),
					},
					sharedContext: { buildId: E },
				},
				V = new l.NodeNextRequest(e),
				W = new l.NodeNextResponse(t),
				X = d.NextRequestAdapter.fromNodeNextRequest(
					V,
					(0, d.signalFromNodeResponse)(t)
				);
			try {
				let n,
					o = async (e) =>
						w.handle(X, G).finally(() => {
							if (!e) return;
							e.setAttributes({
								"http.status_code": t.statusCode,
								"next.rsc": !1,
							});
							let r = $.getRootSpanAttributes();
							if (!r) return;
							if (r.get("next.span_type") !== u.BaseServerSpan.handleRequest)
								return void console.warn(
									`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`
								);
							let a = r.get("next.route");
							if (a) {
								let t = `${D} ${a}`;
								(e.setAttributes({
									"next.route": a,
									"http.route": a,
									"next.span_name": t,
								}),
									e.updateName(t),
									n &&
										n !== e &&
										(n.setAttribute("http.route", a), n.updateName(t)));
							} else e.updateName(`${D} ${m}`);
						}),
					s = async (n) => {
						var i, s;
						let l = async ({ previousCacheEntry: r }) => {
								try {
									if (!B && P && S && !r)
										return (
											(t.statusCode = 404),
											t.setHeader("x-nextjs-cache", "REVALIDATED"),
											t.end("This page could not be found"),
											null
										);
									let i = await o(n);
									e.fetchMetrics = G.renderOpts.fetchMetrics;
									let s = G.renderOpts.pendingWaitUntil;
									s && a.waitUntil && (a.waitUntil(s), (s = void 0));
									let l = G.renderOpts.collectedTags;
									if (!H)
										return (
											await (0, c.sendResponse)(
												V,
												W,
												i,
												G.renderOpts.pendingWaitUntil
											),
											null
										);
									{
										let e = await i.blob(),
											t = (0, h.toNodeOutgoingHttpHeaders)(i.headers);
										(l && (t[R.NEXT_CACHE_TAGS_HEADER] = l),
											!t["content-type"] &&
												e.type &&
												(t["content-type"] = e.type));
										let r =
												void 0 !== G.renderOpts.collectedRevalidate &&
												!(
													G.renderOpts.collectedRevalidate >= R.INFINITE_CACHE
												) &&
												G.renderOpts.collectedRevalidate,
											a =
												void 0 === G.renderOpts.collectedExpire ||
												G.renderOpts.collectedExpire >= R.INFINITE_CACHE
													? void 0
													: G.renderOpts.collectedExpire;
										return {
											value: {
												kind: g.CachedRouteKind.APP_ROUTE,
												status: i.status,
												body: Buffer.from(await e.arrayBuffer()),
												headers: t,
											},
											cacheControl: { revalidate: r, expire: a },
										};
									}
								} catch (t) {
									throw (
										(null == r ? void 0 : r.isStale) &&
											(await w.onRequestError(
												e,
												t,
												{
													routerKind: "App Router",
													routePath: m,
													routeType: "route",
													revalidateReason: (0, p.getRevalidateReason)({
														isStaticGeneration: M,
														isOnDemandRevalidate: P,
													}),
												},
												!1,
												N
											)),
										t
									);
								}
							},
							d = await w.handleResponse({
								req: e,
								nextConfig: y,
								cacheKey: j,
								routeKind: r.RouteKind.APP_ROUTE,
								isFallback: !1,
								prerenderManifest: T,
								isRoutePPREnabled: !1,
								isOnDemandRevalidate: P,
								revalidateOnlyGenerated: S,
								responseGenerator: l,
								waitUntil: a.waitUntil,
								isMinimalMode: B,
							});
						if (!H) return null;
						if (
							(null == d || null == (i = d.value) ? void 0 : i.kind) !==
							g.CachedRouteKind.APP_ROUTE
						)
							throw Object.defineProperty(
								Error(
									`Invariant: app-route received invalid cache entry ${null == d || null == (s = d.value) ? void 0 : s.kind}`
								),
								"__NEXT_ERROR_CODE",
								{ value: "E701", enumerable: !1, configurable: !0 }
							);
						(B ||
							t.setHeader(
								"x-nextjs-cache",
								P
									? "REVALIDATED"
									: d.isMiss
										? "MISS"
										: d.isStale
											? "STALE"
											: "HIT"
							),
							A &&
								t.setHeader(
									"Cache-Control",
									"private, no-cache, no-store, max-age=0, must-revalidate"
								));
						let u = (0, h.fromNodeOutgoingHttpHeaders)(d.value.headers);
						return (
							(B && H) || u.delete(R.NEXT_CACHE_TAGS_HEADER),
							!d.cacheControl ||
								t.getHeader("Cache-Control") ||
								u.get("Cache-Control") ||
								u.set(
									"Cache-Control",
									(0, x.getCacheControlHeader)(d.cacheControl)
								),
							await (0, c.sendResponse)(
								V,
								W,
								new Response(d.value.body, {
									headers: u,
									status: d.value.status || 200,
								})
							),
							null
						);
					};
				K && F
					? await s(F)
					: ((n = $.getActiveScopeSpan()),
						await $.withPropagatedContext(
							e.headers,
							() =>
								$.trace(
									u.BaseServerSpan.handleRequest,
									{
										spanName: `${D} ${m}`,
										kind: i.SpanKind.SERVER,
										attributes: { "http.method": D, "http.target": e.url },
									},
									s
								),
							void 0,
							!K
						));
			} catch (t) {
				if (
					(t instanceof v.NoFallbackError ||
						(await w.onRequestError(
							e,
							t,
							{
								routerKind: "App Router",
								routePath: k,
								routeType: "route",
								revalidateReason: (0, p.getRevalidateReason)({
									isStaticGeneration: M,
									isOnDemandRevalidate: P,
								}),
							},
							!1,
							N
						)),
					H)
				)
					throw t;
				return (
					await (0, c.sendResponse)(V, W, new Response(null, { status: 500 })),
					null
				);
			}
		}
		e.s(
			[
				"handler",
				0,
				y,
				"patchFetch",
				0,
				function () {
					return (0, a.patchFetch)({
						workAsyncStorage: f,
						workUnitAsyncStorage: E,
					});
				},
				"routeModule",
				0,
				w,
				"serverHooks",
				0,
				C,
				"workAsyncStorage",
				0,
				f,
				"workUnitAsyncStorage",
				0,
				E,
			],
			20942
		);
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0p.nxdp._.js.map
