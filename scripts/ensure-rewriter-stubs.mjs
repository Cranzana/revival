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
			"  rewrite_js(input) { return { js: new TextEncoder().encode(input), map: new Uint8Array(), scramtag: '', errors: [] }; }",
			"  rewrite_js_bytes(input) { return { js: input, map: new Uint8Array(), scramtag: '', errors: [] }; }",
			"  free() {}",
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
			"  js: Uint8Array;",
			"  map: Uint8Array;",
			"  scramtag: string;",
			"  errors: string[];",
			"};",
			"",
			"export function initSync(input?: unknown): unknown;",
			"",
			"export class Rewriter {",
			"  constructor(input?: unknown);",
			"  free(): void;",
			"  rewrite_js(js: string, base: string, url: string, module: boolean): JsRewriterOutput;",
			"  rewrite_js_bytes(js: Uint8Array, base: string, url: string, module: boolean): JsRewriterOutput;",
			"}",
			"",
		].join("\n")
	);
}
