module.exports = [
	"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/shared/lib/no-fallback-error.external.js",
			() => require("next/dist/shared/lib/no-fallback-error.external.js")
		);

		module.exports = mod;
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
	"[project]/app/(marketing)/pricing/page.tsx [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["default", () => PricingPage]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/components/ui/card.tsx [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/components/ui/button.tsx [app-rsc] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ =
			__turbopack_context__.i(
				"[project]/components/omniedu.module.css [app-rsc] (css module)"
			);
		const tiers = [
			{
				name: "Campus Starter",
				price: "$79",
				description:
					"For a single learning site with core proxy and curriculum tools.",
				features: ["1 tenant", "RBAC basics", "Proxy lab access"],
			},
			{
				name: "District Cloud",
				price: "$249",
				description:
					"For multi-campus operations that need tenant-aware routing.",
				features: ["10 tenants", "Audit logs", "Redis-backed sessions"],
			},
			{
				name: "Omni Enterprise",
				price: "Custom",
				description:
					"For districts and organizations deploying OmniEdu at scale.",
				features: [
					"Dedicated infrastructure",
					"SSO and MFA rollout",
					"Kubernetes support",
				],
			},
		];
		function PricingPage() {
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
									"section",
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
													children: "Pricing",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/app/(marketing)/pricing/page.tsx",
													lineNumber: 31,
													columnNumber: 6,
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
														"Roll out OmniEdu by campus, district, or enterprise.",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/app/(marketing)/pricing/page.tsx",
													lineNumber: 32,
													columnNumber: 6,
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
														"This pricing surface is scaffolded as part of the public marketing site so the application can grow beyond an internal tool.",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/app/(marketing)/pricing/page.tsx",
													lineNumber: 33,
													columnNumber: 6,
												},
												this
											),
										],
									},
									void 0,
									true,
									{
										fileName: "[project]/app/(marketing)/pricing/page.tsx",
										lineNumber: 30,
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
										children: tiers.map((tier) =>
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
																children: tier.name,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/app/(marketing)/pricing/page.tsx",
																lineNumber: 41,
																columnNumber: 8,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"h2",
															{
																children: tier.price,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/app/(marketing)/pricing/page.tsx",
																lineNumber: 42,
																columnNumber: 8,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																children: tier.description,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/app/(marketing)/pricing/page.tsx",
																lineNumber: 43,
																columnNumber: 8,
															},
															this
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"ul",
															{
																children: tier.features.map((feature) =>
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"li",
																		{
																			children: feature,
																		},
																		feature,
																		false,
																		{
																			fileName:
																				"[project]/app/(marketing)/pricing/page.tsx",
																			lineNumber: 46,
																			columnNumber: 10,
																		},
																		this
																	)
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/app/(marketing)/pricing/page.tsx",
																lineNumber: 44,
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
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
																		"default"
																	].heroActions,
																children: /*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																	"jsxDEV"
																])(
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
																		"Button"
																	],
																	{
																		href: "/sign-in",
																		children: "Talk to OmniEdu",
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			"[project]/app/(marketing)/pricing/page.tsx",
																		lineNumber: 50,
																		columnNumber: 9,
																	},
																	this
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/app/(marketing)/pricing/page.tsx",
																lineNumber: 49,
																columnNumber: 8,
															},
															this
														),
													],
												},
												tier.name,
												true,
												{
													fileName:
														"[project]/app/(marketing)/pricing/page.tsx",
													lineNumber: 40,
													columnNumber: 7,
												},
												this
											)
										),
									},
									void 0,
									false,
									{
										fileName: "[project]/app/(marketing)/pricing/page.tsx",
										lineNumber: 38,
										columnNumber: 5,
									},
									this
								),
							],
						},
						void 0,
						true,
						{
							fileName: "[project]/app/(marketing)/pricing/page.tsx",
							lineNumber: 29,
							columnNumber: 4,
						},
						this
					),
				},
				void 0,
				false,
				{
					fileName: "[project]/app/(marketing)/pricing/page.tsx",
					lineNumber: 28,
					columnNumber: 3,
				},
				this
			);
		}
	},
	"[project]/app/(marketing)/pricing/page.tsx [app-rsc] (ecmascript, Next.js Server Component)",
	(__turbopack_context__) => {
		__turbopack_context__.n(
			__turbopack_context__.i(
				"[project]/app/(marketing)/pricing/page.tsx [app-rsc] (ecmascript)"
			)
		);
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0un120p._.js.map
