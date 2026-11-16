# Minova Main

The central launcher for Minova Chromium, Minova Cinema, MauGainZ, and Minova Cloud.

The visual system follows the official Minova Brand Kit 2.1: graphite surfaces, the cobalt-to-teal spectrum, Bahnschrift display typography, Segoe UI interface typography, and the approved Prism M artwork.

## Live website

[project-minova.com](https://project-minova.com/)

- Chromium: https://chromium.project-minova.com/
- Cinema: https://cinema.project-minova.com/
- MauGainZ: https://maugainz.project-minova.com/
- Cloud: https://cloud.project-minova.com/

The homepage and product websites run on GitHub Pages with custom domains configured in each repository's Pages settings. Cloudflare manages DNS. Cloud uses its existing Cloudflare Tunnel to the owner's Windows PC, where private files and Minova accounts remain. Cloud access is invitation-only. The homepage forwards older `#invite=…` links to Cloud without sending the token to the homepage server.

GitHub Actions builds and deploys this public site from the `main` branch. It is hosted entirely by GitHub Pages and requires no ChatGPT account or sign-in.

## Development

```powershell
npm install
npm run dev
```

## Production check

```powershell
npm run build
npm test
npm run build:pages
```
