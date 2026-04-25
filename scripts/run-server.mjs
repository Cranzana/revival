const args = new Set(process.argv.slice(2));

if (args.has("--production")) {
	process.env.NODE_ENV = "production";
}

if (args.has("--debug")) {
	process.env.DEBUG = "1";
}

await import("../server.js");
