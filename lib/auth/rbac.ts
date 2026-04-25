export const platformRoles = ["STUDENT", "EDUCATOR", "ADMIN", "OWNER"] as const;

export type PlatformRole = (typeof platformRoles)[number];

export type SessionUser = {
	id: string;
	email: string;
	name: string;
	role: PlatformRole;
	tenantSlug: string;
};

const roleRank: Record<PlatformRole, number> = {
	STUDENT: 1,
	EDUCATOR: 2,
	ADMIN: 3,
	OWNER: 4,
};

export function hasRequiredRole(
	currentRole: PlatformRole,
	requiredRole: PlatformRole
) {
	return roleRank[currentRole] >= roleRank[requiredRole];
}
