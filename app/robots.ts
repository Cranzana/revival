import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		host: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
		rules: [{ userAgent: "*", allow: "/" }],
		sitemap: `${
			process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
		}/sitemap.xml`,
	};
}
