"use strict";

const products = {
  chromium: {
    api: "https://api.github.com/repos/minova-chromium/Minova-Chromium/releases/latest",
    asset: /Minova-Chromium-Setup-.*\.exe$/i,
  },
  cinema: {
    api: "https://api.github.com/repos/minova-chromium/Minova-Android-Tv-Cinema-Application/releases/latest",
    asset: /Minova-Cinema-.*\.apk$/i,
  },
};

async function refreshProduct(id, product) {
  try {
    const response = await fetch(product.api, {
      headers: { accept: "application/vnd.github+json" },
    });
    if (!response.ok) return;
    const release = await response.json();
    const asset = Array.isArray(release.assets)
      ? release.assets.find((item) => product.asset.test(item.name || ""))
      : null;
    const version = String(release.tag_name || "").replace(/^v/i, "");
    if (asset?.browser_download_url) {
      document.querySelectorAll(`[data-product-download="${id}"]`).forEach((link) => {
        link.href = asset.browser_download_url;
      });
    }
    if (version) {
      document.querySelectorAll(`[data-product-version="${id}"]`).forEach((node) => {
        node.textContent = version;
      });
    }
  } catch {
    // The static fallback URLs remain usable when GitHub's API is unavailable.
  }
}

Object.entries(products).forEach(([id, product]) => refreshProduct(id, product));
