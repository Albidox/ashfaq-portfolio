export type ProcessStep = {
  step: number;
  icon: "discovery" | "development" | "testing" | "deployment";
  title: string;
  description: string;
  output: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: "discovery",
    title: "Discovery & Architecture",
    description:
      "We align on business goals, core pages, and backend scope so delivery starts with a clear plan.",
    output: "Output: Scope brief + architecture plan",
  },
  {
    step: 2,
    icon: "development",
    title: "Development & Automation",
    description:
      "I build agreed features in structured milestones and automate repetitive tasks where it saves team time.",
    output: "Output: Working milestone demo",
  },
  {
    step: 3,
    icon: "testing",
    title: "Testing & QA",
    description:
      "Critical user flows and backend behavior are tested before release to reduce regressions and surprises.",
    output: "Output: QA checklist + fixes",
  },
  {
    step: 4,
    icon: "deployment",
    title: "Deployment & Handoff",
    description:
      "The project is deployed cleanly with practical handoff notes so your team can operate it with confidence.",
    output: "Output: Live release + handoff notes",
  },
];
