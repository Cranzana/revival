import Redis from "ioredis";

declare global {
	var omniRedis: Redis | undefined;
}

export function getRedisClient() {
	if (!process.env.REDIS_URL) {
		return null;
	}

	if (!globalThis.omniRedis) {
		globalThis.omniRedis = new Redis(process.env.REDIS_URL, {
			lazyConnect: true,
			maxRetriesPerRequest: 1,
		});
	}

	return globalThis.omniRedis;
}
