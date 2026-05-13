export type RoadmapStatus = "architecture" | "building" | "testing" | "upcoming";

export type RoadmapItem = {
  id: string;
  title: string;
  status: RoadmapStatus;
  statusLabel: string;
  prove: string;
  techStack: string;
  caseStudyNote: string;
  liveDemoNote: string;
  githubNote: string;
};

export const roadmapProjects: RoadmapItem[] = [
  {
    id: "PRJ-001",
    title: "Business Website",
    status: "building",
    statusLabel: "In Development",
    prove:
      "Demonstrates conversion-focused page structure and client-ready contact flow for local service businesses.",
    techStack: "Next.js \u2022 TypeScript \u2022 Tailwind CSS",
    caseStudyNote: "Case Study Coming Soon",
    liveDemoNote: "Live Demo Planned",
    githubNote: "GitHub Planned",
  },
  {
    id: "PRJ-002",
    title: "Spring Boot API System",
    status: "architecture",
    statusLabel: "Architecture Phase",
    prove:
      "Proves secure API architecture for authentication, data operations, and backend reliability.",
    techStack: "Java \u2022 Spring Boot \u2022 PostgreSQL",
    caseStudyNote: "Case Study Coming Soon",
    liveDemoNote: "Live Demo Planned",
    githubNote: "GitHub Planned",
  },
  {
    id: "PRJ-003",
    title: "Admin Dashboard",
    status: "building",
    statusLabel: "In Development",
    prove:
      "Shows practical dashboard workflows for managing business operations with clear role-based views.",
    techStack: "Next.js \u2022 API Integration \u2022 PostgreSQL",
    caseStudyNote: "Case Study Coming Soon",
    liveDemoNote: "Live Demo Planned",
    githubNote: "GitHub Planned",
  },
  {
    id: "PRJ-004",
    title: "Testing Automation Framework",
    status: "testing",
    statusLabel: "Testing Phase",
    prove:
      "Validates regression-safe delivery with reusable API and UI checks across important user flows.",
    techStack: "Postman \u2022 Playwright \u2022 Selenium",
    caseStudyNote: "Case Study Coming Soon",
    liveDemoNote: "Live Demo Planned",
    githubNote: "GitHub Planned",
  },
  {
    id: "PRJ-005",
    title: "Invoice / Report Generator",
    status: "upcoming",
    statusLabel: "Build Planned",
    prove:
      "Demonstrates small business automation for repeatable document creation and reporting workflows.",
    techStack: "Next.js \u2022 TypeScript \u2022 PDF Workflows",
    caseStudyNote: "Case Study Coming Soon",
    liveDemoNote: "Live Demo Planned",
    githubNote: "GitHub Planned",
  },
];
