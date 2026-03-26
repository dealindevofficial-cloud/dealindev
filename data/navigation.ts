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
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services },
  { label: "Work", href: routes.work },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: routes.services },
      { label: "App Development", href: routes.services },
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
      { label: "About", href: routes.about },
      { label: "Process", href: routes.services },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    title: "Start",
    links: [
      { label: "Book a Call", href: routes.bookACall },
      { label: "Start a Project", href: routes.contact },
      { label: "Discuss Your Workflow", href: routes.contact },
    ],
  },
];
