import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer, Navbar } from "@/components/layout";
import { RevealObserver } from "@/components/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { siteBrand } from "@/data/site";
import "./globals.css";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans.ttf",
  weight: "200 800",
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteBrand.url),
  title: {
    default: siteBrand.defaultTitle,
    template: `%s | ${siteBrand.name}`,
  },
  description: siteBrand.defaultDescription,
  applicationName: siteBrand.name,
  keywords: [...siteBrand.keywords],
  authors: [{ name: siteBrand.name, url: siteBrand.url }],
  creator: siteBrand.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteBrand.name,
    title: siteBrand.defaultTitle,
    description: siteBrand.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteBrand.defaultTitle,
    description: siteBrand.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7faf8" },
    { media: "(prefers-color-scheme: dark)", color: "#04120d" },
  ],
};

const organizationJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteBrand.url}/#organization`,
    name: siteBrand.name,
    url: siteBrand.url,
    logo: `${siteBrand.url}/brand/dealindev-mark-color-512x512.png`,
    email: siteBrand.email,
    description: siteBrand.defaultDescription,
    areaServed: { "@type": "Country", name: siteBrand.areaServed },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteBrand.url}/#website`,
    name: siteBrand.name,
    url: siteBrand.url,
    inLanguage: "en-US",
    publisher: { "@id": `${siteBrand.url}/#organization` },
  },
];

/* Adds `js` before first paint so reveal styles only apply when scripts run; falls back after 2.5s. */
const revealBootScript = `document.documentElement.classList.add('js');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.add('reveal-fallback')},2500);`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" data-scroll-behavior="smooth" className={`${jakarta.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="skip-link focus-ring">
          Skip to main content
        </a>
        <JsonLd data={organizationJsonLd} />
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
