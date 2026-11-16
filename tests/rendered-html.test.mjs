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
  assert.match(html, /Where do you want to go/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /rel="canonical" href="https:\/\/project-minova\.com\/?"/);
  for (const domain of ["chromium", "cinema", "maugainz", "cloud"]) {
    assert.ok(html.includes(`href="https://${domain}.project-minova.com/"`));
  }
  assert.match(html, /Invitation only/);
  assert.match(html, /Development paused/);
  assert.match(html, /href="\/brand\.html"/);
  assert.doesNotMatch(html, /In development|NOW BUILDING/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("publishes crawl discovery files for the Minova hub", async () => {
  const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  assert.match(robots, /Allow: \/\s/);
  assert.match(robots, /project-minova\.com\/sitemap\.xml/);
  assert.match(sitemap, /project-minova\.com\//);
  assert.match(sitemap, /brand\.html/);
});

test("checks stable GitHub releases and keeps direct downloads current", async () => {
  const script = await readFile(new URL("../public/ecosystem.js", import.meta.url), "utf8");
  assert.match(script, /Minova-Chromium\/releases\?per_page=10/);
  assert.match(script, /Minova-Android-Tv-Cinema-Application\/releases\?per_page=10/);
  assert.match(script, /Minova-Cinema-Windows\/releases\?per_page=10/);
  assert.match(script, /Minova-Cinema-Desktop-\.\*-Setup\\\.exe/);
  assert.match(script, /!release\.draft && !release\.prerelease/);
  assert.match(script, /window\.setInterval\(\(\) => refreshAll\(true\)/);
  assert.match(script, /data-product-download/);
  assert.match(script, /data-product-version/);
});
