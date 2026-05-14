"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

import { GlassPanel } from "@/components/premium/GlassPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/data/contact";
import { createGmailComposeUrl, createMailtoUrl } from "@/lib/contact-links";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Freelance project inquiry from ${name || "website visitor"}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project Type: ${projectType}\n` +
      `Budget: ${budget}\n\n` +
      `Message:\n${message}`;

    const gmailUrl = createGmailComposeUrl({
      to: contact.email,
      subject,
      body,
    });
    const mailtoUrl = createMailtoUrl({
      to: contact.email,
      subject,
      body,
    });

    const openedWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

    if (!openedWindow) {
      window.location.href = mailtoUrl;
    }
  }

  return (
    <GlassPanel className="motion-normal border-white/10 bg-card/70" padding="lg">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Send a project inquiry
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Fill this form to prepare a prefilled email. It opens Gmail first, with a
        mailto fallback if popups are blocked.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
              Your name
            </label>
            <Input
              id="contact-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              className="motion-fast border-white/12 bg-background/70 text-foreground placeholder:text-slate-500 focus-visible:border-cyan-300/45 focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">
              Email address
            </label>
            <Input
              id="contact-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter your email"
              className="motion-fast border-white/12 bg-background/70 text-foreground placeholder:text-slate-500 focus-visible:border-cyan-300/45 focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Project type
            </label>
            <Select value={projectType} onValueChange={setProjectType}>
              <SelectTrigger
                aria-label="Project type"
                className="motion-fast border-white/12 bg-background/70 text-foreground focus-visible:border-cyan-300/45 focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
              >
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="border-white/12 bg-card text-foreground">
                <SelectItem value="Business Website">Business Website</SelectItem>
                <SelectItem value="Website Fixing">Website Fixing</SelectItem>
                <SelectItem value="Backend API">Backend API</SelectItem>
                <SelectItem value="Admin Dashboard">Admin Dashboard</SelectItem>
                <SelectItem value="Testing Automation">Testing Automation</SelectItem>
                <SelectItem value="Business Automation">Business Automation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Budget range
            </label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger
                aria-label="Budget range"
                className="motion-fast border-white/12 bg-background/70 text-foreground focus-visible:border-cyan-300/45 focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
              >
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent className="border-white/12 bg-card text-foreground">
                <SelectItem value="Below INR 5,000">Below INR 5,000</SelectItem>
                <SelectItem value="INR 5,000 - INR 10,000">INR 5,000 - INR 10,000</SelectItem>
                <SelectItem value="INR 10,000 - INR 20,000">INR 10,000 - INR 20,000</SelectItem>
                <SelectItem value="INR 20,000+">INR 20,000+</SelectItem>
                <SelectItem value="Not sure yet">Not sure yet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>
          <Textarea
            id="contact-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell me about your website, API, dashboard, testing, or automation requirement..."
            className="motion-fast min-h-36 border-white/12 bg-background/70 text-foreground placeholder:text-slate-500 focus-visible:border-cyan-300/45 focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
          />
        </div>

        <Button
          type="submit"
          className="motion-fast premium-hover-lift h-11 w-full bg-primary text-primary-foreground shadow-[0_10px_28px_rgb(0_229_255_/_22%)] hover:bg-primary/90 focus-visible:ring-cyan-300/40"
        >
          <Send className="mr-2 h-4 w-4" />
          Prepare Email
        </Button>
      </form>
    </GlassPanel>
  );
}
