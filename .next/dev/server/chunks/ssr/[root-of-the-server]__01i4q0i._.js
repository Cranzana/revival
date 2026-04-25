module.exports = [
	"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/compiled/next-server/app-page-turbo.runtime.dev.js",
			() =>
				require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js")
		);

		module.exports = mod;
	},
	"[project]/components/providers/app-providers.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["AppProviders", () => AppProviders]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$99$2e$2$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/@tanstack+query-core@5.99.2/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$99$2e$2_react$40$19$2e$2$2e$5$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/@tanstack+react-query@5.99.2_react@19.2.5/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
			);
		("use client");
		function AppProviders({ children }) {
			const [queryClient] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(
				() =>
					new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$99$2e$2$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"QueryClient"
					]({
						defaultOptions: {
							queries: {
								refetchOnWindowFocus: false,
								staleTime: 30_000,
							},
						},
					})
			);
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(() => {
				if ("serviceWorker" in navigator) {
					void navigator.serviceWorker.register("/sw.js", {
						scope: "/",
					});
				}
			}, []);
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$99$2e$2_react$40$19$2e$2$2e$5$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
	},
	"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/app-render/work-unit-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/work-unit-async-storage.external.js")
		);

		module.exports = mod;
	},
	"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/app-render/work-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/work-async-storage.external.js")
		);

		module.exports = mod;
	},
	"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/app-render/action-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/action-async-storage.external.js")
		);

		module.exports = mod;
	},
	"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/app-render/after-task-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/after-task-async-storage.external.js")
		);

		module.exports = mod;
	},
	"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/app-render/dynamic-access-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/dynamic-access-async-storage.external.js")
		);

		module.exports = mod;
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01i4q0i._.js.map
