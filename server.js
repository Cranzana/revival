import { createBareServer } from "@nebula-services/bare-server-node";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { createServer } from "node:http";
import { chmodSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import next from "next";
import { rspack } from "@rspack/core";
import { logging as wispLogging, server as wisp } from "@mercuryworkshop/wisp-js/server";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { bareModulePath } from "@mercuryworkshop/bare-as-module3";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const dev = process.env.NODE_ENV !== "production";
const PORT = Number.parseInt(process.env.PORT ?? "3000", 10) || 3000;

const bare = createBareServer("/bare/", {
	logErrors: true,
	blockLocal: false,
});

if (dev) {
	wispLogging.set_level(wispLogging.INFO);
} else {
	wispLogging.set_level(wispLogging.WARN);
}

wisp.options.allow_loopback_ips = true;
wisp.options.allow_private_ips = true;

const fastify = Fastify({
	serverFactory: (handler) =>
		createServer()
			.on("request", (req, res) => {
				res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
				res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
				res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
				res.setHeader("Permissions-Policy", "camera=(), geolocation=(), microphone=(), payment=(), usb=()");
				res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
				res.setHeader("X-Content-Type-Options", "nosniff");
				res.setHeader("X-Frame-Options", "SAMEORIGIN");

				if (bare.shouldRoute(req)) {
					bare.routeRequest(req, res);
					return;
				}

				handler(req, res);
			})
			.on("upgrade", (req, socket, head) => {
				if (bare.shouldRoute(req)) {
					bare.routeUpgrade(req, socket, head);
					return;
				}

				if (req.url?.startsWith("/wisp/")) {
					wisp.routeRequest(req, socket, head);
				}
			}),
});

const app = next({
	dev,
	httpServer: fastify.server,
	hostname: "localhost",
	port: PORT,
});
const handle = app.getRequestHandler();

await app.prepare();

fastify.register(fastifyStatic, {
	root: join(__dirname, "dist"),
	prefix: "/scram/",
	decorateReply: false,
});
fastify.register(fastifyStatic, {
	root: join(__dirname, "assets"),
	prefix: "/assets/",
	decorateReply: false,
});
fastify.register(fastifyStatic, {
	root: baremuxPath,
	prefix: "/baremux/",
	decorateReply: false,
});
fastify.register(fastifyStatic, {
	root: epoxyPath,
	prefix: "/epoxy/",
	decorateReply: false,
});
fastify.register(fastifyStatic, {
	root: libcurlPath,
	prefix: "/libcurl/",
	decorateReply: false,
});
fastify.register(fastifyStatic, {
	root: bareModulePath,
	prefix: "/baremod/",
	decorateReply: false,
});

fastify.all("/*", async (request, reply) => {
	reply.hijack();
	await handle(request.raw, reply.raw);
});

await fastify.listen({
	port: PORT,
	host: "0.0.0.0",
});

console.log(`OmniEdu server listening on http://localhost:${PORT}/`);

if (dev) {
	try {
		writeFileSync(
			".git/hooks/pre-commit",
			"npm run format\ngit update-index --again"
		);
		chmodSync(".git/hooks/pre-commit", 0o755);
	} catch {}

	process.env.SCRAMJET_TYPECHECK = "1";
	const { default: rspackConfig } = await import("./rspack.config.js");
	const compiler = rspack(rspackConfig);
	compiler.watch({}, (_err, stats) => {
		if (!stats) return;

		console.log(
			stats.toString({
				preset: "minimal",
				colors: true,
				version: false,
			})
		);
	});
}
