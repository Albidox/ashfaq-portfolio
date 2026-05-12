type EmailComposeOptions = {
  to: string;
  subject?: string;
  body?: string;
  cc?: string;
  bcc?: string;
};

const GMAIL_COMPOSE_BASE = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1";

export function normalizeWhatsappNumber(value: string): string {
  return value.replace(/\D+/g, "");
}

export function createWhatsAppUrl(phone: string, message?: string): string {
  const normalizedPhone = normalizeWhatsappNumber(phone);
  const baseUrl = `https://wa.me/${normalizedPhone}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export function createGmailComposeUrl({
  to,
  subject,
  body,
  cc,
  bcc,
}: EmailComposeOptions): string {
  const params = new URLSearchParams({ to });

  if (subject) {
    params.set("su", subject);
  }

  if (body) {
    params.set("body", body);
  }

  if (cc) {
    params.set("cc", cc);
  }

  if (bcc) {
    params.set("bcc", bcc);
  }

  return `${GMAIL_COMPOSE_BASE}&${params.toString()}`;
}

export function createMailtoUrl({
  to,
  subject,
  body,
  cc,
  bcc,
}: EmailComposeOptions): string {
  const params = new URLSearchParams();

  if (subject) {
    params.set("subject", subject);
  }

  if (body) {
    params.set("body", body);
  }

  if (cc) {
    params.set("cc", cc);
  }

  if (bcc) {
    params.set("bcc", bcc);
  }

  const query = params.toString();

  return query ? `mailto:${to}?${query}` : `mailto:${to}`;
}
