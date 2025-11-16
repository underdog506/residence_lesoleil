import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://residencelesoleil.ca"),
  title: "Résidence Le Soleil | Maison de retraite à Gatineau, QC",
  description: "Résidence Le Soleil - Vivez en toute sérénité dans un environnement chaleureux et sécurisé à Gatineau. Partenaire du CISSSO. Système de maison intelligente. Places limitées. 819-744-0672",
  keywords: "résidence pour personnes âgées, maison de retraite, Gatineau, CISSSO, soins professionnels, sécurité, résidence le soleil, maison intelligente, Masson-Angers",
  authors: [{ name: "Résidence Le Soleil" }],
  creator: "Résidence Le Soleil",
  publisher: "Résidence Le Soleil",
  alternates: {
    canonical: "https://residencelesoleil.ca",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Résidence Le Soleil | Maison de retraite à Gatineau",
    description: "Vivez en toute sérénité dans un environnement chaleureux et sécurisé. Partenaire du CISSSO.",
    url: "https://residencelesoleil.ca",
    siteName: "Résidence Le Soleil",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Résidence Le Soleil - Maison de retraite à Gatineau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Résidence Le Soleil | Maison de retraite à Gatineau",
    description: "Vivez en toute sérénité dans un environnement chaleureux et sécurisé. Partenaire du CISSSO.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SeniorCare",
    "name": "Résidence Le Soleil",
    "description": "Maison de retraite offrant des soins professionnels dans un environnement chaleureux et sécurisé à Gatineau, partenaire du CISSSO.",
    "url": "https://residencelesoleil.ca",
    "telephone": "+1-819-744-0672",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "365 Rue Jean-Baptiste-Routhier",
      "addressLocality": "Gatineau",
      "addressRegion": "QC",
      "postalCode": "J8M 0B2",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.543661",
      "longitude": "-75.437079"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Gatineau"
    },
    "sameAs": [
      "https://residencelesoleil.ca"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "25"
    }
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
