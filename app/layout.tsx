import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://minova-chromium.github.io/Minova-Main/"),
  title: "Minova | Shape your own path",
  description:
    "The home of Minova: independent applications and experiments built with curiosity, including Minova Chromium and Minova Cinema.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: "https://minova-chromium.github.io/Minova-Main/",
  },
  openGraph: {
    title: "Minova | Shape your own path",
    description: "Explore independent applications and experiments from Minova.",
    type: "website",
    siteName: "Minova",
    url: "https://minova-chromium.github.io/Minova-Main/",
  },
  twitter: {
    card: "summary",
    title: "Minova | Shape your own path",
    description: "Explore independent applications and experiments from Minova.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://minova-chromium.github.io/Minova-Main/#organization",
      name: "Minova",
      url: "https://minova-chromium.github.io/Minova-Main/",
      logo: "https://minova-chromium.github.io/Minova-Main/brand/minova-symbol-color.svg",
      sameAs: ["https://github.com/minova-chromium"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://minova-chromium.github.io/Minova-Android-Tv-Cinema-Application/#software",
      name: "Minova Cinema",
      alternateName: "Minova Cinema Plex client",
      url: "https://minova-chromium.github.io/Minova-Android-Tv-Cinema-Application/",
      description:
        "Minova Cinema is an independent, private Plex client for Android phones, tablets, Android TV, Google TV, and Windows PCs.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: ["Android 10 or newer", "Windows 10", "Windows 11"],
      publisher: {
        "@id": "https://minova-chromium.github.io/Minova-Main/#organization",
      },
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      sameAs: [
        "https://github.com/minova-chromium/Minova-Android-Tv-Cinema-Application",
        "https://github.com/minova-chromium/Minova-Cinema-Windows",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script src="/ecosystem.js" defer />
      </head>
      <body>{children}</body>
    </html>
  );
}
