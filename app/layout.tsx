import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Kafe & Koktel Bar, Banja Luka`,
    template: `%s — ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Comodo Bar",
    "Comodo Banja Luka",
    "kafe bar Banja Luka",
    "koktel bar Banja Luka",
    "topla čokolada Banja Luka",
    "kafić Banja Luka"
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} — Kafe & Koktel Bar, Banja Luka`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/interior.jpg",
        width: 1031,
        height: 971,
        alt: "Enterijer bara Comodo u Banjoj Luci"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Kafe & Koktel Bar, Banja Luka`,
    description: siteConfig.description,
    images: ["/interior.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#0e0d0b",
  width: "device-width",
  initialScale: 1
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: siteConfig.name,
  image: `${siteConfig.url}/interior.jpg`,
  url: siteConfig.url,
  priceRange: "KM 1–5",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.value,
    reviewCount: siteConfig.rating.count
  },
  openingHoursSpecification: siteConfig.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close
  }))
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body font-light bg-ink text-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
