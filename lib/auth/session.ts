import { cookies } from "next/headers";

import { ACCESS_TOKEN_COOKIE, verifyAccessToken } from "@lib/auth/token";

export async function getCurrentSession() {
	const cookieStore = await cookies();
	const token = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

	if (!token) {
		return null;
	}

	try {
		return await verifyAccessToken(token);
	} catch {
		return null;
	}
}

export function getSessionCookieOptions() {
	return {
		httpOnly: true,
		path: "/",
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax" as const,
	};
}
