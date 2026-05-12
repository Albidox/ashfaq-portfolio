import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="border-y border-white/10 bg-slate-900/40 py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="What I can build for you"
            description="Clear freelance services focused on websites, APIs, dashboards, testing, and automation."
            align="left"
            className="mx-0"
          />

          <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
