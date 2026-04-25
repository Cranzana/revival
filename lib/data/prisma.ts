type PrismaClientInstance = {
	$connect?: () => Promise<void>;
	$disconnect?: () => Promise<void>;
	[key: string]: unknown;
};

declare global {
	var prisma: PrismaClientInstance | undefined;
}

export async function getPrismaClient() {
	if (globalThis.prisma) {
		return globalThis.prisma;
	}

	const prismaModule = await import("@prisma/client");
	const PrismaClient = (
		prismaModule as {
			PrismaClient?: new (...args: unknown[]) => PrismaClientInstance;
		}
	).PrismaClient;

	if (!PrismaClient) {
		throw new Error(
			"Prisma client is not generated yet. Run `corepack pnpm db:generate` after approving Prisma build scripts."
		);
	}

	const client = new PrismaClient({
		log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
	});

	if (process.env.NODE_ENV !== "production") {
		globalThis.prisma = client;
	}

	return client;
}
