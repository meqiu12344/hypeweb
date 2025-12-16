import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hypeweb.space"),
  title: {
    default: "HypeWeb - Stworzymy twoją stronę marzeń",
    template: "%s | hypeweb",
  },
  description:
    "Projektujemy i tworzymy nowoczesne, szybkie i responsywne strony internetowe dla firm. UX/UI, development, SEO i wsparcie powdrożeniowe.",
  applicationName: "hypeweb",
  authors: [{ name: "hypeweb", url: "https://hypeweb.space" }],
  creator: "hypeweb",
  publisher: "hypeweb",
  category: "technology",
  keywords: [
    "strony internetowe",
    "projektowanie www",
    "Next.js",
    "TypeScript",
    "SEO",
    "UX",
    "UI",
    "agencja web",
    "audyt seo",
    "performance",
  ],
  openGraph: {
    title: "HypeWeb - Stworzymy twoją stronę marzeń",
    description:
      "Projektujemy i tworzymy nowoczesne, szybkie i responsywne strony internetowe dla firm. UX/UI, development, SEO i wsparcie powdrożeniowe.",
    url: "https://hypeweb.space",
    siteName: "hypeweb",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "hypeweb - nowoczesne strony internetowe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hypeweb — Strony internetowe na zamówienie",
    description:
      "Projektujemy i tworzymy nowoczesne, szybkie i responsywne strony internetowe dla firm. UX/UI, development, SEO i wsparcie powdrożeniowe.",
    images: [
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  colorScheme: "dark",
  themeColor: "#0b1224",
  viewport: {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0b1224",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'hypeweb',
              url: 'https://hypeweb.space',
              description:
                'Projektowanie UX/UI, development Next.js, SEO i wsparcie powdrożeniowe dla firm.',
              sameAs: ['https://hypeweb.space'],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+48 500 111 222',
                  contactType: 'sales',
                  areaServed: 'PL',
                  availableLanguage: ['pl'],
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+48 730 496 403',
                  contactType: 'sales',
                  areaServed: 'PL',
                  availableLanguage: ['pl'],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'hypeweb',
              url: 'https://hypeweb.space',
              inLanguage: 'pl-PL',
              potentialAction: {
                '@type': 'ContactAction',
                target: 'https://hypeweb.space/#kontakt',
                name: 'Kontakt',
                urlTemplate: 'https://hypeweb.space/#kontakt',
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
