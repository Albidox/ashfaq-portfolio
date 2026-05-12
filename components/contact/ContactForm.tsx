"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="border-white/10 bg-white/[0.03] text-white shadow-2xl shadow-black/20">
      <CardContent className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white">Send a project inquiry</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Fill this form and it opens a prefilled Gmail compose screen, with a
          mailto fallback if popups are blocked.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Your name
              </label>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email address
              </label>
              <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Enter your email"
                className="border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Project type
              </label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger className="border-white/10 bg-slate-950/60 text-white">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
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
                <SelectTrigger className="border-white/10 bg-slate-950/60 text-white">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
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
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Message
            </label>
            <Textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me about your website, API, dashboard, testing, or automation requirement..."
              className="min-h-36 border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500"
            />
          </div>

          <Button type="submit" className="w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
            <Send className="mr-2 h-4 w-4" />
            Prepare Email
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
