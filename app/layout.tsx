import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/data/site";



const serifFont = localFont({ src: "../public/fonts/newsreader.ttf", weight: "500", variable: "--font-serif", display: "swap" });
const sansFont = localFont({ src: [
 {path:"../public/fonts/archivo.ttf",weight:"400"},
 {path:"../public/fonts/archivo-1.ttf",weight:"500"},
 {path:"../public/fonts/archivo-2.ttf",weight:"600"},
 {path:"../public/fonts/archivo-3.ttf",weight:"700"}
], variable:"--font-sans", display:"swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reelancer.vercel.app";

export const viewport: Viewport = {
  themeColor: "#FCFCFA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.brandName} • ${siteConfig.role}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: `${siteConfig.name} (${siteConfig.handle}) — ${siteConfig.tagline}`,
  keywords: [
    "Performance Creative",
    "Digital Marketing Freelancer",
    "Short Form Video Production",
    "Meta Ads Growth",
    "TikTok Video Director",
    "Direct Response Reels",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteConfig.brandName} • ${siteConfig.role}`,
    description: siteConfig.tagline,
    siteName: siteConfig.brandName,
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} • ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} • ${siteConfig.role}`,
    description: siteConfig.tagline,
    creator: "@reelancer",
    images: [`${siteUrl}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-background text-offwhite font-sans antialiased selection:bg-lime selection:text-black">
        {/* Subtle camera film grain overlay */}
        <div className="film-grain" aria-hidden="true" />

        {/* Vignette */}
        <div className="vignette" aria-hidden="true" />

        {/* Custom Viewfinder Cursor on Desktop */}


        {/* Main Content */}
        {children}

        {/* Camera Control Bar (Mobile Bottom Tab Bar) */}

      </body>
    </html>
  );
}
