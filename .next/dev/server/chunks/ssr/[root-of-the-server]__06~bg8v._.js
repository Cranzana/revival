module.exports = [
	"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/shared/lib/no-fallback-error.external.js",
			() => require("next/dist/shared/lib/no-fallback-error.external.js")
		);

		module.exports = mod;
	},
	"[project]/components/ui/button.tsx [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["Button", () => Button]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ =
			__turbopack_context__.i(
				"[project]/components/omniedu.module.css [app-rsc] (css module)"
			);
		function Button({ children, href, kind = "primary" }) {
			const className = [
				__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
					"default"
				].button,
				kind === "secondary"
					? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
							"default"
						].buttonSecondary
					: "",
				kind === "ghost"
					? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
							"default"
						].buttonGhost
					: "",
			]
				.filter(Boolean)
				.join(" ");
			if (href) {
				return /*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"default"
					],
					{
						href: href,
						className: className,
						children: children,
					},
					void 0,
					false,
					{
						fileName: "[project]/components/ui/button.tsx",
						lineNumber: 27,
						columnNumber: 4,
					},
					this
				);
			}
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"button",
				{
					className: className,
					children: children,
				},
				void 0,
				false,
				{
					fileName: "[project]/components/ui/button.tsx",
					lineNumber: 33,
					columnNumber: 9,
				},
				this
			);
		}
	},
	"[project]/components/ui/card.tsx [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["Card", () => Card]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ =
			__turbopack_context__.i(
				"[project]/components/omniedu.module.css [app-rsc] (css module)"
			);
		function Card({ children, className = "" }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"div",
				{
					className:
						`${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].card} ${className}`.trim(),
					children: children,
				},
				void 0,
				false,
				{
					fileName: "[project]/components/ui/card.tsx",
					lineNumber: 12,
					columnNumber: 9,
				},
				this
			);
		}
	},
	"[project]/lib/platform/navigation.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"marketingNavigation",
			() => marketingNavigation,
			"platformNavigation",
			() => platformNavigation,
		]);
		const marketingNavigation = [
			{
				href: "/",
				label: "Home",
			},
			{
				href: "/pricing",
				label: "Pricing",
			},
			{
				href: "/sign-in",
				label: "Sign in",
			},
		];
		const platformNavigation = [
			{
				href: "/dashboard",
				label: "Dashboard",
			},
			{
				href: "/learn",
				label: "Learning",
			},
			{
				href: "/proxy",
				label: "Proxy Lab",
			},
			{
				href: "/admin",
				label: "Admin",
			},
		];
	},
	"[project]/app/(marketing)/page.tsx [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["default", () => HomePage]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/components/ui/button.tsx [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/components/ui/card.tsx [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ =
			__turbopack_context__.i(
				"[project]/components/omniedu.module.css [app-rsc] (css module)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/lib/platform/navigation.ts [app-rsc] (ecmascript)"
			);
		function HomePage() {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"main",
				{
					className:
						__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
							"default"
						].marketingShell,
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"jsxDEV"
					])(
						"div",
						{
							className:
								__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
									"default"
								].marketingContent,
							children: [
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									"header",
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
												"default"
											].topNav,
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
															"default"
														].wordmark,
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"span",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].wordmarkBadge,
																children: "OE",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 12,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"span",
															{
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"strong",
																		{
																			children: "OmniEdu",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 14,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"small",
																		{
																			children: "Unified education operations",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 15,
																			columnNumber: 8,
																		},
																		this
																	),
																],
															},
															void 0,
															true,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 13,
																columnNumber: 7,
															},
															this
														),
													],
												},
												void 0,
												true,
												{
													fileName: "[project]/app/(marketing)/page.tsx",
													lineNumber: 11,
													columnNumber: 6,
												},
												this
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"nav",
												{
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
															"default"
														].topLinks,
													children:
														__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"marketingNavigation"
														].map((item) =>
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																"a",
																{
																	href: item.href,
																	children: item.label,
																},
																item.href,
																false,
																{
																	fileName:
																		"[project]/app/(marketing)/page.tsx",
																	lineNumber: 20,
																	columnNumber: 8,
																},
																this
															)
														),
												},
												void 0,
												false,
												{
													fileName: "[project]/app/(marketing)/page.tsx",
													lineNumber: 18,
													columnNumber: 6,
												},
												this
											),
										],
									},
									void 0,
									true,
									{
										fileName: "[project]/app/(marketing)/page.tsx",
										lineNumber: 10,
										columnNumber: 5,
									},
									this
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									"section",
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
												"default"
											].heroGrid,
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
															"default"
														].heroCard,
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].kicker,
																children: "OmniEdu Platform",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 29,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"h1",
															{
																children:
																	"Run curriculum, campuses, and secure web access from one surface.",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 30,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																children:
																	"OmniEdu turns the current proxy runtime into a full learning operations platform with multi-tenant routing, RBAC, Prisma-ready data models, Redis session caching, and deployment scaffolding for real infrastructure.",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 31,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].heroActions,
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																			"Button"
																		],
																		{
																			href: "/dashboard",
																			children: "Open dashboard",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 38,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																			"Button"
																		],
																		{
																			href: "/proxy",
																			kind: "secondary",
																			children: "Launch proxy lab",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 39,
																			columnNumber: 8,
																		},
																		this
																	),
																],
															},
															void 0,
															true,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 37,
																columnNumber: 7,
															},
															this
														),
													],
												},
												void 0,
												true,
												{
													fileName: "[project]/app/(marketing)/page.tsx",
													lineNumber: 28,
													columnNumber: 6,
												},
												this
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
															"default"
														].promoPanel,
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].kicker,
																children: "Foundation",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 46,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].metricList,
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"div",
																		{
																			children: [
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					"strong",
																					{
																						children: "SSR",
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/app/(marketing)/page.tsx",
																						lineNumber: 49,
																						columnNumber: 9,
																					},
																					this
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					"p",
																					{
																						children:
																							"Next.js App Router with middleware-driven tenant and access handling.",
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/app/(marketing)/page.tsx",
																						lineNumber: 50,
																						columnNumber: 9,
																					},
																					this
																				),
																			],
																		},
																		void 0,
																		true,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 48,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"div",
																		{
																			children: [
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					"strong",
																					{
																						children: "PWA",
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/app/(marketing)/page.tsx",
																						lineNumber: 53,
																						columnNumber: 9,
																					},
																					this
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					"p",
																					{
																						children:
																							"Manifest and offline shell caching layered into the existing service worker.",
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/app/(marketing)/page.tsx",
																						lineNumber: 54,
																						columnNumber: 9,
																					},
																					this
																				),
																			],
																		},
																		void 0,
																		true,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 52,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"div",
																		{
																			children: [
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					"strong",
																					{
																						children: "Ops",
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/app/(marketing)/page.tsx",
																						lineNumber: 57,
																						columnNumber: 9,
																					},
																					this
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					"p",
																					{
																						children:
																							"Docker, Compose, CI, Kubernetes, and Terraform starter assets included.",
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/app/(marketing)/page.tsx",
																						lineNumber: 58,
																						columnNumber: 9,
																					},
																					this
																				),
																			],
																		},
																		void 0,
																		true,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 56,
																			columnNumber: 8,
																		},
																		this
																	),
																],
															},
															void 0,
															true,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 47,
																columnNumber: 7,
															},
															this
														),
													],
												},
												void 0,
												true,
												{
													fileName: "[project]/app/(marketing)/page.tsx",
													lineNumber: 45,
													columnNumber: 6,
												},
												this
											),
										],
									},
									void 0,
									true,
									{
										fileName: "[project]/app/(marketing)/page.tsx",
										lineNumber: 27,
										columnNumber: 5,
									},
									this
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									"section",
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
												"default"
											].grid3,
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
													"Card"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].kicker,
																children: "Architecture",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 66,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"h2",
															{
																children: "App Router and route groups",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 67,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"ul",
															{
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"Marketing, auth, and platform areas are split cleanly.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 69,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"Protected routes are enforced in middleware.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 70,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"Subdomains can rewrite into tenant-specific campus views.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 71,
																			columnNumber: 8,
																		},
																		this
																	),
																],
															},
															void 0,
															true,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 68,
																columnNumber: 7,
															},
															this
														),
													],
												},
												void 0,
												true,
												{
													fileName: "[project]/app/(marketing)/page.tsx",
													lineNumber: 65,
													columnNumber: 6,
												},
												this
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
													"Card"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].kicker,
																children: "Data Layer",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 75,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"h2",
															{
																children: "Prisma and Redis ready",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 76,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"ul",
															{
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"PostgreSQL schema covers tenants, users, sessions, courses, and audit logs.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 78,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"Redis client wiring is prepared for session and cache workloads.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 79,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"JWT helpers support role-aware session cookies.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 80,
																			columnNumber: 8,
																		},
																		this
																	),
																],
															},
															void 0,
															true,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 77,
																columnNumber: 7,
															},
															this
														),
													],
												},
												void 0,
												true,
												{
													fileName: "[project]/app/(marketing)/page.tsx",
													lineNumber: 74,
													columnNumber: 6,
												},
												this
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
													"Card"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].kicker,
																children: "Learning Ops",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 84,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"h2",
															{
																children: "Proxy, courses, and admin",
															},
															void 0,
															false,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 85,
																columnNumber: 7,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"ul",
															{
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"The stabilized Scramjet console now lives as the Proxy Lab.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 87,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"Dashboard and learning views provide the website shell around it.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 88,
																			columnNumber: 8,
																		},
																		this
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children:
																				"Admin routes model governance and tenant controls.",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/page.tsx",
																			lineNumber: 89,
																			columnNumber: 8,
																		},
																		this
																	),
																],
															},
															void 0,
															true,
															{
																fileName: "[project]/app/(marketing)/page.tsx",
																lineNumber: 86,
																columnNumber: 7,
															},
															this
														),
													],
												},
												void 0,
												true,
												{
													fileName: "[project]/app/(marketing)/page.tsx",
													lineNumber: 83,
													columnNumber: 6,
												},
												this
											),
										],
									},
									void 0,
									true,
									{
										fileName: "[project]/app/(marketing)/page.tsx",
										lineNumber: 64,
										columnNumber: 5,
									},
									this
								),
							],
						},
						void 0,
						true,
						{
							fileName: "[project]/app/(marketing)/page.tsx",
							lineNumber: 9,
							columnNumber: 4,
						},
						this
					),
				},
				void 0,
				false,
				{
					fileName: "[project]/app/(marketing)/page.tsx",
					lineNumber: 8,
					columnNumber: 3,
				},
				this
			);
		}
	},
	"[project]/app/page.tsx [app-rsc] (ecmascript) <locals>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$marketing$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/app/(marketing)/page.tsx [app-rsc] (ecmascript)"
			);
	},
	"[project]/app/page.tsx [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"default",
			() =>
				__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$marketing$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
					"default"
				],
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
			__turbopack_context__.i(
				"[project]/app/page.tsx [app-rsc] (ecmascript) <locals>"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$marketing$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/app/(marketing)/page.tsx [app-rsc] (ecmascript)"
			);
	},
	"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)",
	(__turbopack_context__) => {
		__turbopack_context__.n(
			__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)")
		);
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06~bg8v._.js.map
