import type { MetadataRoute } from "next";
import { siteBrand } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteBrand.url}/sitemap.xml`,
    host: siteBrand.url,
  };
}
