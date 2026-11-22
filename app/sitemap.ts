import type { MetadataRoute } from "next";
import { caseStudyPlaceholders } from "@/data/case-studies";
import { siteBrand } from "@/data/site";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: routes.home, priority: 1 },
    { path: routes.services, priority: 0.9 },
    { path: routes.aiSolutions, priority: 0.9 },
    { path: routes.contact, priority: 0.8 },
    { path: routes.about, priority: 0.7 },
    { path: routes.work, priority: 0.7 },
    { path: routes.caseStudies, priority: 0.6 },
    ...caseStudyPlaceholders.map((c) => ({ path: `${routes.caseStudies}/${c.slug}`, priority: 0.5 })),
  ];

  return pages.map(({ path, priority }) => ({
    url: new URL(path, siteBrand.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
