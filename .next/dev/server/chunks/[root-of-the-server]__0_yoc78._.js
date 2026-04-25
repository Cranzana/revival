module.exports = [
	"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/build/adapter/setup-node-env.external.js",
			() => require("next/dist/build/adapter/setup-node-env.external.js")
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
	"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/compiled/@opentelemetry/api",
			() => require("next/dist/compiled/@opentelemetry/api")
		);

		module.exports = mod;
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
	"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/lib/incremental-cache/tags-manifest.external.js",
			() =>
				require("next/dist/server/lib/incremental-cache/tags-manifest.external.js")
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
	"[externals]/node:async_hooks [external] (node:async_hooks, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x("node:async_hooks", () =>
			require("node:async_hooks")
		);

		module.exports = mod;
	},
	"[externals]/path [external] (path, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x("path", () => require("path"));

		module.exports = mod;
	},
	"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/lib/incremental-cache/memory-cache.external.js",
			() =>
				require("next/dist/server/lib/incremental-cache/memory-cache.external.js")
		);

		module.exports = mod;
	},
	"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/lib/incremental-cache/shared-cache-controls.external.js",
			() =>
				require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js")
		);

		module.exports = mod;
	},
	"[externals]/crypto [external] (crypto, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x("crypto", () => require("crypto"));

		module.exports = mod;
	},
	"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/compiled/next-server/app-page-turbo.runtime.dev.js",
			() =>
				require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js")
		);

		module.exports = mod;
	},
	"[project]/lib/auth/rbac.ts [middleware] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"hasRequiredRole",
			() => hasRequiredRole,
			"platformRoles",
			() => platformRoles,
		]);
		const platformRoles = ["STUDENT", "EDUCATOR", "ADMIN", "OWNER"];
		const roleRank = {
			STUDENT: 1,
			EDUCATOR: 2,
			ADMIN: 3,
			OWNER: 4,
		};
		function hasRequiredRole(currentRole, requiredRole) {
			return roleRank[currentRole] >= roleRank[requiredRole];
		}
	},
	"[project]/lib/auth/token.ts [middleware] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"ACCESS_TOKEN_COOKIE",
			() => ACCESS_TOKEN_COOKIE,
			"decodeAccessToken",
			() => decodeAccessToken,
			"signAccessToken",
			() => signAccessToken,
			"verifyAccessToken",
			() => verifyAccessToken,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwt/sign.js [middleware] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/util/decode_jwt.js [middleware] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwt/verify.js [middleware] (ecmascript)"
			);
		const ACCESS_TOKEN_COOKIE = "omniedu_access_token";
		const DEFAULT_AUTH_SECRET = "omniedu-development-secret";
		function getSecret() {
			return new TextEncoder().encode(
				process.env.AUTH_SECRET || DEFAULT_AUTH_SECRET
			);
		}
		async function signAccessToken(payload) {
			return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
				"SignJWT"
			](payload)
				.setProtectedHeader({
					alg: "HS256",
				})
				.setIssuedAt()
				.setExpirationTime("15m")
				.sign(getSecret());
		}
		async function verifyAccessToken(token) {
			const { payload } = await (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
				"jwtVerify"
			])(token, getSecret());
			return payload;
		}
		function decodeAccessToken(token) {
			try {
				return (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
					"decodeJwt"
				])(token);
			} catch {
				return null;
			}
		}
	},
	"[project]/lib/platform/routes.ts [middleware] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"adminRoutePrefixes",
			() => adminRoutePrefixes,
			"internalRoutePrefixes",
			() => internalRoutePrefixes,
			"protectedRoutePrefixes",
			() => protectedRoutePrefixes,
		]);
		const protectedRoutePrefixes = [
			"/dashboard",
			"/learn",
			"/proxy",
			"/settings",
			"/admin",
		];
		const adminRoutePrefixes = ["/admin"];
		const internalRoutePrefixes = [
			"/_next",
			"/api",
			"/assets",
			"/bare",
			"/baremod",
			"/baremux",
			"/epoxy",
			"/libcurl",
			"/scram",
			"/wisp",
			"/sw.js",
			"/manifest.webmanifest",
			"/favicon.ico",
		];
	},
	"[project]/lib/platform/security.ts [middleware] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["securityHeaders", () => securityHeaders]);
		const securityHeaders = {
			"Cross-Origin-Embedder-Policy": "require-corp",
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Resource-Policy": "same-origin",
			"Permissions-Policy":
				"camera=(), geolocation=(), microphone=(), payment=(), usb=()",
			"Referrer-Policy": "strict-origin-when-cross-origin",
			"X-Content-Type-Options": "nosniff",
			"X-Frame-Options": "SAMEORIGIN",
		};
	},
	"[project]/lib/platform/tenancy.ts [middleware] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["getTenantFromHost", () => getTenantFromHost]);
		const localHosts = new Set(["localhost", "127.0.0.1"]);
		const platformDomains = [".fly.dev"];
		function getConfiguredAppHost() {
			if (!process.env.NEXT_PUBLIC_APP_URL) {
				return null;
			}
			try {
				return new URL(process.env.NEXT_PUBLIC_APP_URL).hostname.toLowerCase();
			} catch {
				return null;
			}
		}
		function getTenantFromHost(hostname) {
			if (!hostname) {
				return null;
			}
			const normalizedHost = hostname.split(":")[0].toLowerCase();
			if (localHosts.has(normalizedHost)) {
				return null;
			}
			const appHost = getConfiguredAppHost();
			if (appHost && normalizedHost === appHost) {
				return null;
			}
			if (platformDomains.some((domain) => normalizedHost.endsWith(domain))) {
				return null;
			}
			const segments = normalizedHost.split(".");
			if (segments.length < 3) {
				return null;
			}
			const [subdomain] = segments;
			if (!subdomain || subdomain === "www") {
				return null;
			}
			return subdomain;
		}
	},
	"[project]/proxy.ts [middleware] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["config", () => config, "proxy", () => proxy]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/.pnpm/next@16.2.4_@playwright+tes_531d8b397c25a2c72a4af9aac2d67e01/node_modules/next/server.js [middleware] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$rbac$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/lib/auth/rbac.ts [middleware] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$token$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/lib/auth/token.ts [middleware] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/lib/platform/routes.ts [middleware] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/lib/platform/security.ts [middleware] (ecmascript)"
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$tenancy$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/lib/platform/tenancy.ts [middleware] (ecmascript)"
			);
		function startsWithAny(pathname, prefixes) {
			return prefixes.some((prefix) => pathname.startsWith(prefix));
		}
		function proxy(request) {
			const pathname = request.nextUrl.pathname;
			const hostname = request.headers.get("host");
			const tenant = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$tenancy$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
				"getTenantFromHost"
			])(hostname);
			const tokenValue = request.cookies.get(
				__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$token$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
					"ACCESS_TOKEN_COOKIE"
				]
			)?.value;
			const token = tokenValue
				? (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$token$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
						"decodeAccessToken"
					])(tokenValue)
				: null;
			if (
				tenant &&
				!pathname.startsWith(`/campus/${tenant}`) &&
				!startsWithAny(
					pathname,
					__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
						"internalRoutePrefixes"
					]
				)
			) {
				const rewriteUrl = request.nextUrl.clone();
				rewriteUrl.pathname = `/campus/${tenant}${pathname}`;
				const rewriteResponse =
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
						"NextResponse"
					].rewrite(rewriteUrl);
				rewriteResponse.headers.set("x-omni-tenant", tenant);
				Object.entries(
					__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
						"securityHeaders"
					]
				).forEach(([key, value]) => rewriteResponse.headers.set(key, value));
				return rewriteResponse;
			}
			if (
				startsWithAny(
					pathname,
					__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
						"protectedRoutePrefixes"
					]
				) &&
				!token
			) {
				const signInUrl = request.nextUrl.clone();
				signInUrl.pathname = "/sign-in";
				signInUrl.searchParams.set("next", pathname);
				const response =
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
						"NextResponse"
					].redirect(signInUrl);
				Object.entries(
					__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
						"securityHeaders"
					]
				).forEach(([key, value]) => response.headers.set(key, value));
				return response;
			}
			if (
				token?.role &&
				startsWithAny(
					pathname,
					__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
						"adminRoutePrefixes"
					]
				) &&
				!(0,
				__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$rbac$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
					"hasRequiredRole"
				])(token.role, "ADMIN")
			) {
				const dashboardUrl = request.nextUrl.clone();
				dashboardUrl.pathname = "/dashboard";
				dashboardUrl.searchParams.set("forbidden", "1");
				const response =
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
						"NextResponse"
					].redirect(dashboardUrl);
				Object.entries(
					__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
						"securityHeaders"
					]
				).forEach(([key, value]) => response.headers.set(key, value));
				return response;
			}
			const response =
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$playwright$2b$tes_531d8b397c25a2c72a4af9aac2d67e01$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
					"NextResponse"
				].next();
			if (tenant) {
				response.headers.set("x-omni-tenant", tenant);
			}
			Object.entries(
				__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$platform$2f$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__[
					"securityHeaders"
				]
			).forEach(([key, value]) => response.headers.set(key, value));
			return response;
		}
		const config = {
			matcher: ["/((?!_next/static|_next/image).*)"],
		};
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_yoc78._.js.map
