import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { createWhatsAppUrl } from "@/lib/contact-links";

type WhatsAppButtonProps = {
  label?: string;
};

export function WhatsAppButton({ label = "Chat on WhatsApp" }: WhatsAppButtonProps) {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);

  return (
    <Button
      asChild
      size="lg"
      className="motion-fast premium-hover-lift h-11 bg-primary text-primary-foreground shadow-[0_10px_28px_rgb(0_229_255_/_22%)] hover:bg-primary/90 focus-visible:ring-cyan-300/40"
    >
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
