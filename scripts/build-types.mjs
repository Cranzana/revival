import { rm } from "node:fs/promises";
import { spawn } from "node:child_process";

await new Promise((resolve, reject) => {
	const command = process.platform === "win32" ? "corepack.cmd" : "corepack";
	const child = spawn(command, ["pnpm", "exec", "rslib", "build"], {
		stdio: "inherit",
	});

	child.on("error", reject);
	child.on("exit", (code, signal) => {
		if (signal) {
			reject(new Error(`rslib build terminated by signal ${signal}`));
			return;
		}

		if (code !== 0) {
			reject(new Error(`rslib build failed with exit code ${code}`));
			return;
		}

		resolve(undefined);
	});
});

await rm("dist/temp", {
	force: true,
	recursive: true,
});
