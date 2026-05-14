import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-white/10 bg-background/65 py-16 sm:py-18 lg:scroll-mt-28"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Business outcomes you can hire me for"
            description="A focused preview of the most requested service outcomes."
            align="left"
            className="mx-0 max-w-4xl"
          />

          <Button
            asChild
            variant="outline"
            className="border-white/15 bg-white/5 text-foreground hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
