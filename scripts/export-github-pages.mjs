import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "pages-dist");
const client = resolve(root, "dist", "client");
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static export failed with status ${response.status}`);
}

let html = await response.text();

// This site is server-rendered and needs no client JavaScript. Removing the
// framework scripts creates a small, durable static page for GitHub Pages.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
  .replace(/((?:href|src)=["'])\/(?!\/)/g, "$1./")
  .replace(/<html([^>]*)>/i, '<html$1 data-host="github-pages">');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(client, output, { recursive: true });
await writeFile(resolve(output, "index.html"), html, "utf8");
await writeFile(resolve(output, "404.html"), html, "utf8");
await writeFile(resolve(output, ".nojekyll"), "", "utf8");

const exported = await readFile(resolve(output, "index.html"), "utf8");
if (!exported.includes("Minova Chromium") || !exported.includes("./brand/minova-symbol-color.svg")) {
  throw new Error("Static export validation failed");
}

console.log("GitHub Pages export ready in pages-dist");
