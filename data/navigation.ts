import { routes } from "@/lib/routes";

export type NavItem = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export const primaryNavigation: NavItem[] = [
  { label: "Services", href: routes.services },
  { label: "AI Solutions", href: routes.aiSolutions },
  { label: "Work", href: routes.work },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: `${routes.services}#website-development` },
      { label: "App Development", href: `${routes.services}#app-development` },
      { label: "AI Agents & Automation", href: routes.aiSolutions },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Portfolio", href: routes.work },
      { label: "Case Studies", href: routes.caseStudies },
      { label: "AI Solutions", href: routes.aiSolutions },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: routes.about },
      { label: "Our Process", href: `${routes.services}#process` },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Book a Strategy Call", href: routes.contact },
      { label: "Start a Project", href: routes.contact },
      { label: "Email Us", href: "mailto:dealindevofficial@gmail.com" },
    ],
  },
];
