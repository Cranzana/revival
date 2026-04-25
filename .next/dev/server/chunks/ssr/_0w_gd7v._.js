module.exports = [
	"[project]/components/omniedu.module.css [app-ssr] (css module)",
	(__turbopack_context__) => {
		__turbopack_context__.v({
			authCard: "omniedu-module__ZuS8GG__authCard",
			authShell: "omniedu-module__ZuS8GG__authShell",
			button: "omniedu-module__ZuS8GG__button",
			buttonGhost: "omniedu-module__ZuS8GG__buttonGhost",
			buttonSecondary: "omniedu-module__ZuS8GG__buttonSecondary",
			card: "omniedu-module__ZuS8GG__card",
			field: "omniedu-module__ZuS8GG__field",
			fieldError: "omniedu-module__ZuS8GG__fieldError",
			formCard: "omniedu-module__ZuS8GG__formCard",
			formGrid: "omniedu-module__ZuS8GG__formGrid",
			grid2: "omniedu-module__ZuS8GG__grid2",
			grid3: "omniedu-module__ZuS8GG__grid3",
			heroActions: "omniedu-module__ZuS8GG__heroActions",
			heroCard: "omniedu-module__ZuS8GG__heroCard",
			heroGrid: "omniedu-module__ZuS8GG__heroGrid",
			inlineNotice: "omniedu-module__ZuS8GG__inlineNotice",
			kicker: "omniedu-module__ZuS8GG__kicker",
			marketingContent: "omniedu-module__ZuS8GG__marketingContent",
			marketingShell: "omniedu-module__ZuS8GG__marketingShell",
			metricList: "omniedu-module__ZuS8GG__metricList",
			navLink: "omniedu-module__ZuS8GG__navLink",
			pageHeader: "omniedu-module__ZuS8GG__pageHeader",
			platformContent: "omniedu-module__ZuS8GG__platformContent",
			platformShell: "omniedu-module__ZuS8GG__platformShell",
			promoPanel: "omniedu-module__ZuS8GG__promoPanel",
			sidebar: "omniedu-module__ZuS8GG__sidebar",
			sidebarCallout: "omniedu-module__ZuS8GG__sidebarCallout",
			sidebarNav: "omniedu-module__ZuS8GG__sidebarNav",
			stack: "omniedu-module__ZuS8GG__stack",
			statsGrid: "omniedu-module__ZuS8GG__statsGrid",
			statusPill: "omniedu-module__ZuS8GG__statusPill",
			table: "omniedu-module__ZuS8GG__table",
			tenantHero: "omniedu-module__ZuS8GG__tenantHero",
			topLinks: "omniedu-module__ZuS8GG__topLinks",
			topNav: "omniedu-module__ZuS8GG__topNav",
			wordmark: "omniedu-module__ZuS8GG__wordmark",
			wordmarkBadge: "omniedu-module__ZuS8GG__wordmarkBadge",
		});
	},
	"[project]/lib/auth/forms.ts [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["signInSchema", () => signInSchema]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>"
			);
		const signInSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				email:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					].email(),
				password:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.min(8, "Use at least 8 characters."),
				tenant:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.min(2, "Tenant slug is required.")
						.regex(
							/^[a-z0-9-]+$/,
							"Use lowercase letters, numbers, and hyphens."
						),
			});
	},
	"[project]/components/auth/sign-in-form.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["SignInForm", () => SignInForm]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_r_68bd501d870525feb7b54369e0a415e0$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/@hookform+resolvers@5.2.2_r_68bd501d870525feb7b54369e0a415e0/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$73$2e$1_react$40$19$2e$2$2e$5$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/react-hook-form@7.73.1_react@19.2.5/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ =
			__turbopack_context__.i(
				"[project]/components/omniedu.module.css [app-ssr] (css module)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$forms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/lib/auth/forms.ts [app-ssr] (ecmascript)"
			);
		("use client");
		function SignInForm() {
			const [submitted, setSubmitted] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(null);
			const {
				formState: { errors, isSubmitting },
				handleSubmit,
				register,
			} = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$73$2e$1_react$40$19$2e$2$2e$5$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useForm"
			])({
				defaultValues: {
					email: "admin@omniedu.dev",
					password: "omniedu-demo",
					tenant: "demo",
				},
				resolver: (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_r_68bd501d870525feb7b54369e0a415e0$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"zodResolver"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$forms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"signInSchema"
					]
				),
			});
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"form",
				{
					className:
						__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
							"default"
						].formCard,
					onSubmit: handleSubmit(async (values) => {
						await new Promise((resolve) => setTimeout(resolve, 300));
						setSubmitted(values);
					}),
					children: [
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"div",
							{
								className:
									__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
										"default"
									].formGrid,
								children: [
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										"label",
										{
											className:
												__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
													"default"
												].field,
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"span",
													{
														children: "Email",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/components/auth/sign-in-form.tsx",
														lineNumber: 35,
														columnNumber: 6,
													},
													this
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"input",
													{
														...register("email"),
														type: "email",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/components/auth/sign-in-form.tsx",
														lineNumber: 36,
														columnNumber: 6,
													},
													this
												),
												errors.email
													? /*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"small",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																		"default"
																	].fieldError,
																children: errors.email.message,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/components/auth/sign-in-form.tsx",
																lineNumber: 38,
																columnNumber: 7,
															},
															this
														)
													: null,
											],
										},
										void 0,
										true,
										{
											fileName: "[project]/components/auth/sign-in-form.tsx",
											lineNumber: 34,
											columnNumber: 5,
										},
										this
									),
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										"label",
										{
											className:
												__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
													"default"
												].field,
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"span",
													{
														children: "Password",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/components/auth/sign-in-form.tsx",
														lineNumber: 42,
														columnNumber: 6,
													},
													this
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"input",
													{
														...register("password"),
														type: "password",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/components/auth/sign-in-form.tsx",
														lineNumber: 43,
														columnNumber: 6,
													},
													this
												),
												errors.password
													? /*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"small",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																		"default"
																	].fieldError,
																children: errors.password.message,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/components/auth/sign-in-form.tsx",
																lineNumber: 45,
																columnNumber: 7,
															},
															this
														)
													: null,
											],
										},
										void 0,
										true,
										{
											fileName: "[project]/components/auth/sign-in-form.tsx",
											lineNumber: 41,
											columnNumber: 5,
										},
										this
									),
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										"label",
										{
											className:
												__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
													"default"
												].field,
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"span",
													{
														children: "Tenant",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/components/auth/sign-in-form.tsx",
														lineNumber: 51,
														columnNumber: 6,
													},
													this
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"input",
													{
														...register("tenant"),
													},
													void 0,
													false,
													{
														fileName:
															"[project]/components/auth/sign-in-form.tsx",
														lineNumber: 52,
														columnNumber: 6,
													},
													this
												),
												errors.tenant
													? /*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"small",
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																		"default"
																	].fieldError,
																children: errors.tenant.message,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/components/auth/sign-in-form.tsx",
																lineNumber: 54,
																columnNumber: 7,
															},
															this
														)
													: null,
											],
										},
										void 0,
										true,
										{
											fileName: "[project]/components/auth/sign-in-form.tsx",
											lineNumber: 50,
											columnNumber: 5,
										},
										this
									),
								],
							},
							void 0,
							true,
							{
								fileName: "[project]/components/auth/sign-in-form.tsx",
								lineNumber: 33,
								columnNumber: 4,
							},
							this
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"button",
							{
								className:
									__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
										"default"
									].button,
								type: "submit",
								disabled: isSubmitting,
								children: isSubmitting ? "Authenticating..." : "Enter OmniEdu",
							},
							void 0,
							false,
							{
								fileName: "[project]/components/auth/sign-in-form.tsx",
								lineNumber: 58,
								columnNumber: 4,
							},
							this
						),
						submitted
							? /*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									"div",
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omniedu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
												"default"
											].inlineNotice,
										children: [
											"Demo sign-in validated for tenant ",
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"strong",
												{
													children: submitted.tenant,
												},
												void 0,
												false,
												{
													fileName:
														"[project]/components/auth/sign-in-form.tsx",
													lineNumber: 63,
													columnNumber: 40,
												},
												this
											),
											". Wire this form to your JWT/session route when backend auth is ready.",
										],
									},
									void 0,
									true,
									{
										fileName: "[project]/components/auth/sign-in-form.tsx",
										lineNumber: 62,
										columnNumber: 5,
									},
									this
								)
							: null,
					],
				},
				void 0,
				true,
				{
					fileName: "[project]/components/auth/sign-in-form.tsx",
					lineNumber: 26,
					columnNumber: 3,
				},
				this
			);
		}
	},
];

//# sourceMappingURL=_0w_gd7v._.js.map
