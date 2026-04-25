import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const outDir = "rewriter/wasm/out";
const jsPath = `${outDir}/wasm.js`;
const dtsPath = `${outDir}/wasm.d.ts`;

if (!existsSync(jsPath)) {
	await mkdir(outDir, { recursive: true });
	await writeFile(
		jsPath,
		[
			"export function initSync() {}",
			"export class Rewriter {",
			"  constructor() {}",
			"  rewrite_js(input) { return { js: input, map: undefined }; }",
			"  rewrite_html(input) { return input; }",
			"}",
			"",
		].join("\n")
	);
}

if (!existsSync(dtsPath)) {
	await mkdir(outDir, { recursive: true });
	await writeFile(
		dtsPath,
		[
			"export type JsRewriterOutput = {",
			"  js: string;",
			"  map?: string;",
			"};",
			"",
			"export function initSync(input?: unknown): void;",
			"",
			"export class Rewriter {",
			"  constructor(input?: unknown);",
			"  rewrite_js(input: string): JsRewriterOutput;",
			"  rewrite_html(input: string): string;",
			"}",
			"",
		].join("\n")
	);
}
