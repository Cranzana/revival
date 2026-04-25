export function GET() {
	return Response.json({
		ok: true,
		service: "omniedu-web",
		features: ["app-router", "proxy-lab", "middleware", "pwa"],
		timestamp: new Date().toISOString(),
	});
}
