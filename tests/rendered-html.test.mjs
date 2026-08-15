import assert from "node:assert/strict";
import test from "node:test";

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
  assert.match(html, /Minova-Cinema-2\.2\.1\.apk/);
  assert.match(html, /data-product-download="chromium"/);
  assert.match(html, /data-product-download="cinema"/);
  assert.match(html, /brand-kit\/minova-brand-guide\.html/);
  assert.doesNotMatch(html, /In development|NOW BUILDING/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
