import { rspack } from "@rspack/core";

const { default: rspackConfig } = await import("../rspack.config.js");

const compiler = rspack(rspackConfig);

const stats = await new Promise((resolve, reject) => {
	compiler.run((error, nextStats) => {
		if (error) {
			reject(error);
			return;
		}

		if (!nextStats) {
			reject(new Error("Rspack completed without returning build stats."));
			return;
		}

		resolve(nextStats);
	});
});

console.log(
	stats.toString({
		preset: "minimal",
		colors: true,
		version: false,
	})
);

await new Promise((resolve, reject) => {
	compiler.close((error) => {
		if (error) {
			reject(error);
			return;
		}

		resolve(undefined);
	});
});

if (stats.hasErrors()) {
	process.exitCode = 1;
}
