import type { MetadataRoute } from "next";
import { caseStudyPlaceholders } from "@/data/case-studies";
import { siteBrand } from "@/data/site";
import { routes } from "@/lib/routes";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
    { path: routes.home, priority: 1, changeFrequency: "weekly" },
    { path: routes.services, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.aiSolutions, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.bookACall, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.contact, priority: 0.8, changeFrequency: "yearly" },
    { path: routes.about, priority: 0.7, changeFrequency: "yearly" },
    // Work is hidden from the site for now; add it back when it returns to the nav.
    // { path: routes.work, priority: 0.7, changeFrequency: "monthly" },
    ...(caseStudyPlaceholders.length > 0
      ? [
          { path: routes.caseStudies, priority: 0.6, changeFrequency: "monthly" as const },
          ...caseStudyPlaceholders.map((c) => ({
            path: `${routes.caseStudies}/${c.slug}`,
            priority: 0.5,
            changeFrequency: "yearly" as const,
          })),
        ]
      : []),
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, siteBrand.url).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
