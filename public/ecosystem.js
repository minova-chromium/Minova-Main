"use strict";

(() => {
  const refreshInterval = 15 * 60 * 1000;
  const products = {
    chromium: {
      api: "https://api.github.com/repos/minova-chromium/Minova-Chromium/releases?per_page=10",
      asset: /Minova-Chromium-Setup-.*\.exe$/i,
    },
    cinema: {
      api: "https://api.github.com/repos/minova-chromium/Minova-Android-Tv-Cinema-Application/releases?per_page=10",
      asset: /Minova-Cinema-.*\.apk$/i,
    },
  };

  function applyRelease(id, release) {
    if (!release) return;

    if (release.download) {
      document.querySelectorAll(`[data-product-download="${id}"]`).forEach((link) => {
        link.href = release.download;
      });
    }

    if (release.version) {
      document.querySelectorAll(`[data-product-version="${id}"]`).forEach((node) => {
        node.textContent = release.version;
      });
    }
  }

  function readCache(id) {
    try {
      return JSON.parse(localStorage.getItem(`minova-release-${id}`) || "null");
    } catch {
      return null;
    }
  }

  function writeCache(id, release) {
    try {
      localStorage.setItem(
        `minova-release-${id}`,
        JSON.stringify({ ...release, checkedAt: Date.now() }),
      );
    } catch {
      // The updater still works when storage is unavailable.
    }
  }

  async function refreshProduct(id, product, force = false) {
    const cached = readCache(id);
    applyRelease(id, cached);

    if (!force && cached?.checkedAt && Date.now() - cached.checkedAt < refreshInterval) {
      return;
    }

    try {
      const response = await fetch(product.api, {
        cache: "no-store",
        headers: { accept: "application/vnd.github+json" },
      });
      if (!response.ok) return;

      const releases = await response.json();
      const stableReleases = Array.isArray(releases)
        ? releases.filter((release) => !release.draft && !release.prerelease)
        : [];
      const release = stableReleases.find((candidate) =>
        Array.isArray(candidate.assets)
          ? candidate.assets.some((asset) => product.asset.test(asset.name || ""))
          : false,
      );
      const asset = release?.assets.find((candidate) =>
        product.asset.test(candidate.name || ""),
      );
      const latest = {
        version: String(release?.tag_name || "").replace(/^v/i, ""),
        download: asset?.browser_download_url || "",
      };

      if (!latest.version || !latest.download) return;
      applyRelease(id, latest);
      writeCache(id, latest);
    } catch {
      // Cached or static fallback values remain usable when GitHub is unavailable.
    }
  }

  function refreshAll(force = false) {
    Object.entries(products).forEach(([id, product]) =>
      refreshProduct(id, product, force),
    );
  }

  refreshAll();
  window.setInterval(() => refreshAll(true), refreshInterval);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") refreshAll();
  });
})();
