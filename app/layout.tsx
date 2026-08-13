import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minova | Shape your own path",
  description:
    "The home of Minova: independent applications and experiments built with curiosity, including Minova Chromium and Minova Cinema.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Minova | Shape your own path",
    description: "Explore independent applications and experiments from Minova.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Minova | Shape your own path",
    description: "Explore independent applications and experiments from Minova.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
