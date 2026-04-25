import type { MetadataRoute } from "next";

const routes = ["", "/pricing", "/sign-in", "/dashboard", "/learn", "/proxy"];

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		changeFrequency: route ? "weekly" : "daily",
		priority: route === "" ? 1 : 0.7,
		lastModified: new Date(),
	}));
}
