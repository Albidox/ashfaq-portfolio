export type ServiceItem = {
  title: string;
  description: string;
  bullets: [string, string, string];
  stack: string;
  icon: "server" | "layout-dashboard" | "bug" | "sparkles" | "wrench" | "globe";
};

export const services: ServiceItem[] = [
  {
    title: "Spring Boot Backends",
    description:
      "Build secure backend systems for login, data management, order flows, and internal tools.",
    bullets: [
      "REST API design",
      "PostgreSQL database structure",
      "Validation and error handling",
    ],
    stack: "Java \u2022 Spring Boot \u2022 PostgreSQL",
    icon: "server",
  },
  {
    title: "Admin Dashboards",
    description:
      "Give your team a clean control panel to manage customers, orders, status, and reports confidently.",
    bullets: [
      "Role-based dashboard views",
      "Table and workflow actions",
      "Connected backend data",
    ],
    stack: "Next.js \u2022 API Integration \u2022 PostgreSQL",
    icon: "layout-dashboard",
  },
  {
    title: "Testing Automation",
    description:
      "Reduce release risk by turning repetitive checks into reliable automated testing flows.",
    bullets: [
      "API regression suites",
      "UI flow automation",
      "Failure reporting with logs",
    ],
    stack: "Postman \u2022 Playwright \u2022 Selenium",
    icon: "bug",
  },
  {
    title: "Business Automation Tools",
    description:
      "Replace repetitive manual tasks with small tools that save hours each week for your team.",
    bullets: [
      "Form-to-workflow automation",
      "File and report generators",
      "Notification-ready business scripts",
    ],
    stack: "Java \u2022 Scripts \u2022 Workflow APIs",
    icon: "sparkles",
  },
  {
    title: "Website Fixes",
    description:
      "Fix broken sections, unstable forms, and performance issues before they impact customer trust.",
    bullets: [
      "Layout and responsive fixes",
      "Form, CTA, and navigation repairs",
      "Deployment and production debugging",
    ],
    stack: "Next.js \u2022 Tailwind CSS \u2022 Debugging",
    icon: "wrench",
  },
  {
    title: "Business Websites",
    description:
      "Launch conversion-focused websites that clearly present your service, proof, and contact flow.",
    bullets: [
      "Service-focused landing sections",
      "Lead-ready contact experience",
      "Performance and mobile checks",
    ],
    stack: "Next.js \u2022 Tailwind CSS \u2022 SEO Basics",
    icon: "globe",
  },
];
