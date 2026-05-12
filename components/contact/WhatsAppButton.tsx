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
    <Button asChild className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
