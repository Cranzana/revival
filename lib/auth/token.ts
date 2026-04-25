import { SignJWT, decodeJwt, jwtVerify } from "jose";

import type { SessionUser } from "@lib/auth/rbac";

export const ACCESS_TOKEN_COOKIE = "omniedu_access_token";
const DEFAULT_AUTH_SECRET = "omniedu-development-secret";

export type AccessTokenPayload = SessionUser & {
	sessionId: string;
};

function getSecret() {
	return new TextEncoder().encode(
		process.env.AUTH_SECRET || DEFAULT_AUTH_SECRET
	);
}

export async function signAccessToken(payload: AccessTokenPayload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("15m")
		.sign(getSecret());
}

export async function verifyAccessToken(token: string) {
	const { payload } = await jwtVerify(token, getSecret());
	
return payload as unknown as AccessTokenPayload;
}

export function decodeAccessToken(token: string) {
	try {
		return decodeJwt(token) as unknown as Partial<AccessTokenPayload>;
	} catch {
		return null;
	}
}
