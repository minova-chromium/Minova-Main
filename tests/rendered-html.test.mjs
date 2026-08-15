import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Minova project hub", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Minova \| Shape your own path<\/title>/i);
  assert.match(html, /Shape your/);
  assert.match(html, /Minova Chromium/);
  assert.match(html, /Minova Cinema/);
  assert.match(html, /minova-chromium\.github\.io\/Minova-Chromium/);
  assert.match(html, /Minova-Cinema-2\.4\.1\.apk/);
  assert.match(html, /data-product-download="chromium"/);
  assert.match(html, /data-product-download="cinema"/);
  assert.match(html, /Visit Chromium website/);
  assert.match(html, /Visit Cinema website/);
  assert.ok((html.match(/project-website-button/g) || []).length >= 2);
  assert.match(html, /href="\/brand\.html"/);
  assert.doesNotMatch(html, /In development|NOW BUILDING/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("checks stable GitHub releases and keeps direct downloads current", async () => {
  const script = await readFile(new URL("../public/ecosystem.js", import.meta.url), "utf8");
  assert.match(script, /Minova-Chromium\/releases\?per_page=10/);
  assert.match(script, /Minova-Android-Tv-Cinema-Application\/releases\?per_page=10/);
  assert.match(script, /!release\.draft && !release\.prerelease/);
  assert.match(script, /window\.setInterval\(\(\) => refreshAll\(true\)/);
  assert.match(script, /data-product-download/);
  assert.match(script, /data-product-version/);
});
