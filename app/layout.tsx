import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  category: "Portfolio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
