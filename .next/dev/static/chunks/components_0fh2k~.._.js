(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([
	typeof document === "object" ? document.currentScript : undefined,
	"[project]/components/blank-title.tsx [app-client] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["BlankTitle", () => BlankTitle]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/navigation.js [app-client] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
			);
		var _s = __turbopack_context__.k.signature();
		("use client");
		function BlankTitle() {
			_s();
			const pathname = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				"usePathname"
			])();
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(
				{
					"BlankTitle.useEffect": () => {
						const clearTitle = {
							"BlankTitle.useEffect.clearTitle": () => {
								if (document.title !== "") {
									document.title = "";
								}
							},
						}["BlankTitle.useEffect.clearTitle"];
						clearTitle();
						const observer = new MutationObserver(clearTitle);
						observer.observe(document.head, {
							childList: true,
							subtree: true,
							characterData: true,
						});
						return {
							"BlankTitle.useEffect": () => observer.disconnect(),
						}["BlankTitle.useEffect"];
					},
				}["BlankTitle.useEffect"],
				[pathname]
			);
			return null;
		}
		_s(BlankTitle, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function () {
			return [
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					"usePathname"
				],
			];
		});
		_c = BlankTitle;
		var _c;
		__turbopack_context__.k.register(_c, "BlankTitle");
		if (
			typeof globalThis.$RefreshHelpers$ === "object" &&
			globalThis.$RefreshHelpers !== null
		) {
			__turbopack_context__.k.registerExports(
				__turbopack_context__.m,
				globalThis.$RefreshHelpers$
			);
		}
	},
	"[project]/components/providers/app-providers.tsx [app-client] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["AppProviders", () => AppProviders]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$100$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/@tanstack+query-core@5.100.1/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$100$2e$1_react$40$19$2e$2$2e$5$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/@tanstack+react-query@5.100.1_react@19.2.5/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
			);
		var _s = __turbopack_context__.k.signature();
		("use client");
		function AppProviders({ children }) {
			_s();
			const [queryClient] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				"useState"
			])(
				{
					"AppProviders.useState": () =>
						new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$100$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
							"QueryClient"
						]({
							defaultOptions: {
								queries: {
									refetchOnWindowFocus: false,
									staleTime: 30_000,
								},
							},
						}),
				}["AppProviders.useState"]
			);
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(
				{
					"AppProviders.useEffect": () => {
						if ("serviceWorker" in navigator) {
							void navigator.serviceWorker.register("/sw.js", {
								scope: "/",
							});
						}
					},
				}["AppProviders.useEffect"],
				[]
			);
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$100$2e$1_react$40$19$2e$2$2e$5$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
					"QueryClientProvider"
				],
				{
					client: queryClient,
					children: children,
				},
				void 0,
				false,
				{
					fileName: "[project]/components/providers/app-providers.tsx",
					lineNumber: 26,
					columnNumber: 3,
				},
				this
			);
		}
		_s(AppProviders, "93IriWGoXV65KtasakcF2jLGd5w=");
		_c = AppProviders;
		var _c;
		__turbopack_context__.k.register(_c, "AppProviders");
		if (
			typeof globalThis.$RefreshHelpers$ === "object" &&
			globalThis.$RefreshHelpers !== null
		) {
			__turbopack_context__.k.registerExports(
				__turbopack_context__.m,
				globalThis.$RefreshHelpers$
			);
		}
	},
]);

//# sourceMappingURL=components_0fh2k~.._.js.map
