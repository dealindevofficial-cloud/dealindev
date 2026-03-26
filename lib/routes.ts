/**
 * Central route paths for navigation, links, and future pages.
 * Add new top-level routes here first, then wire nav and content.
 */
export const routes = {
  home: "/",
  services: "/services",
  about: "/about",
  contact: "/contact",
  work: "/work",
  caseStudies: "/case-studies",
  aiSolutions: "/ai-solutions",
  bookACall: "/book-a-call",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
