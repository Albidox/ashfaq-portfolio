import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance services by Sk Ashfaq Bux including business website development, website fixing, Spring Boot APIs, admin dashboards, testing automation, and business automation tools.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_35%)]" />

        <Container>
          <SectionHeading
            eyebrow="Services"
            title="What I Can Build For You"
            description="Small, clear, practical freelance services for businesses that need websites, backend APIs, dashboards, testing, or automation support."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold text-white">
              Have a small project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              You can start with a small milestone like a website fix, landing page,
              API module, dashboard screen, or testing task.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
