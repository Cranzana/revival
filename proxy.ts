import { NextRequest, NextResponse } from "next/server";

import { hasRequiredRole } from "@lib/auth/rbac";
import { decodeAccessToken, ACCESS_TOKEN_COOKIE } from "@lib/auth/token";
import {
	adminRoutePrefixes,
	internalRoutePrefixes,
	protectedRoutePrefixes,
} from "@lib/platform/routes";
import { securityHeaders } from "@lib/platform/security";
import { getTenantFromHost } from "@lib/platform/tenancy";

function startsWithAny(pathname: string, prefixes: string[]) {
	return prefixes.some((prefix) => pathname.startsWith(prefix));
}

export function proxy(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const hostname = request.headers.get("host");
	const tenant = getTenantFromHost(hostname);
	const tokenValue = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
	const token = tokenValue ? decodeAccessToken(tokenValue) : null;

	if (
		tenant &&
		!pathname.startsWith(`/campus/${tenant}`) &&
		!startsWithAny(pathname, internalRoutePrefixes)
	) {
		const rewriteUrl = request.nextUrl.clone();
		rewriteUrl.pathname = `/campus/${tenant}${pathname}`;
		const rewriteResponse = NextResponse.rewrite(rewriteUrl);
		rewriteResponse.headers.set("x-omni-tenant", tenant);
		Object.entries(securityHeaders).forEach(([key, value]) =>
			rewriteResponse.headers.set(key, value)
		);
		
return rewriteResponse;
	}

	if (startsWithAny(pathname, protectedRoutePrefixes) && !token) {
		const signInUrl = request.nextUrl.clone();
		signInUrl.pathname = "/sign-in";
		signInUrl.searchParams.set("next", pathname);
		const response = NextResponse.redirect(signInUrl);
		Object.entries(securityHeaders).forEach(([key, value]) =>
			response.headers.set(key, value)
		);
		
return response;
	}

	if (
		token?.role &&
		startsWithAny(pathname, adminRoutePrefixes) &&
		!hasRequiredRole(token.role, "ADMIN")
	) {
		const dashboardUrl = request.nextUrl.clone();
		dashboardUrl.pathname = "/dashboard";
		dashboardUrl.searchParams.set("forbidden", "1");
		const response = NextResponse.redirect(dashboardUrl);
		Object.entries(securityHeaders).forEach(([key, value]) =>
			response.headers.set(key, value)
		);
		
return response;
	}

	const response = NextResponse.next();
	if (tenant) {
		response.headers.set("x-omni-tenant", tenant);
	}
	Object.entries(securityHeaders).forEach(([key, value]) =>
		response.headers.set(key, value)
	);
	
return response;
}

export const config = {
	matcher: ["/((?!_next/static|_next/image).*)"],
};
