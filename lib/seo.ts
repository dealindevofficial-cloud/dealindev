import type { Metadata } from "next";
import { siteBrand } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

const ogImage = {
  url: "/opengraph-image.png",
  alt: "Deal in Dev: websites, apps and AI that help teams move faster.",
};

/** Per-page metadata with canonical URL and matching Open Graph / Twitter fields. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteBrand.name}`,
      description,
      url: path,
      siteName: siteBrand.name,
      type: "website",
      locale: "en_US",
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteBrand.name}`,
      description,
      images: [ogImage.url],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteBrand.url).toString();
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
