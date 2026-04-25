import { access } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import os from "node:os";

const rootDir = process.cwd();
const buildDir = path.join(rootDir, "rewriter", "wasm");

async function fileExists(target) {
	try {
		await access(target);
		return true;
	} catch {
		return false;
	}
}

function splitPathEnv(pathValue) {
	return (pathValue || "")
		.split(path.delimiter)
		.map((entry) => entry.trim())
		.filter(Boolean);
}

async function resolveBash() {
	if (
		process.env.SCRAMJET_BASH &&
		(await fileExists(process.env.SCRAMJET_BASH))
	) {
		return process.env.SCRAMJET_BASH;
	}

	if (process.platform !== "win32") {
		return "bash";
	}

	const candidates = [];
	const gitExe = process.env["ProgramFiles"]
		? path.join(process.env["ProgramFiles"], "Git", "bin", "bash.exe")
		: null;
	const gitExeX86 = process.env["ProgramFiles(x86)"]
		? path.join(process.env["ProgramFiles(x86)"], "Git", "bin", "bash.exe")
		: null;

	if (gitExe) candidates.push(gitExe);
	if (gitExeX86) candidates.push(gitExeX86);

	for (const entry of splitPathEnv(process.env.PATH)) {
		candidates.push(path.join(entry, "bash.exe"));
		candidates.push(path.join(entry, "bash"));
	}

	for (const candidate of candidates) {
		if (!(await fileExists(candidate))) continue;

		const normalized = candidate.toLowerCase();
		if (normalized.includes("\\windows\\system32\\bash.exe")) continue;
		if (normalized.includes("\\windowsapps\\bash.exe")) continue;

		return candidate;
	}

	throw new Error(
		[
			"Unable to find a usable bash executable.",
			"On Windows, install Git for Windows and make sure Git Bash is available,",
			"or set SCRAMJET_BASH to a bash executable path.",
		].join(" ")
	);
}

function buildEnv() {
	const env = { ...process.env };
	const args = new Set(process.argv.slice(2));

	if (args.has("--release")) {
		env.RELEASE = "1";
	}

	if (process.platform === "win32") {
		const extraPaths = [
			path.join(os.homedir(), ".cargo", "bin"),
			path.join(os.homedir(), ".local", "bin"),
		];
		const existing = splitPathEnv(env.PATH);
		env.PATH = [...extraPaths, ...existing].join(path.delimiter);
	}

	return env;
}

try {
	const bash = await resolveBash();
	const env = buildEnv();

	await new Promise((resolve, reject) => {
		const child = spawn(bash, ["build.sh"], {
			cwd: buildDir,
			env,
			stdio: "inherit",
		});

		child.on("error", reject);
		child.on("exit", (code, signal) => {
			if (signal) {
				reject(new Error(`rewriter build terminated by signal ${signal}`));
				return;
			}

			process.exit(code ?? 1);
			resolve();
		});
	});
} catch (error) {
	console.error(error instanceof Error ? error.message : String(error));
	process.exit(1);
}
