import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://project-minova.com/"),
  title: "Minova | Shape your own path",
  description:
    "Choose your Minova experience: Chromium, Cinema, MauGainZ, or your private Minova Cloud.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: "https://project-minova.com/",
  },
  openGraph: {
    title: "Minova | Shape your own path",
    description: "Explore independent applications and experiments from Minova.",
    type: "website",
    siteName: "Minova",
    url: "https://project-minova.com/",
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
      "@id": "https://project-minova.com/#organization",
      name: "Minova",
      url: "https://project-minova.com/",
      logo: "https://project-minova.com/brand/minova-symbol-color.svg",
      sameAs: ["https://github.com/minova-chromium"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://cinema.project-minova.com/#software",
      name: "Minova Cinema",
      alternateName: "Minova Cinema Plex client",
      url: "https://cinema.project-minova.com/",
      description:
        "Minova Cinema is an independent, private Plex client for Android phones, tablets, Android TV, Google TV, and Windows PCs.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: ["Android 10 or newer", "Windows 10", "Windows 11"],
      publisher: {
        "@id": "https://project-minova.com/#organization",
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
