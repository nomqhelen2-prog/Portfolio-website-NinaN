import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Clock, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ---------------------------------------------------------------------------
// EmailJS config — fill these in with your own EmailJS account's values.
// 1. Create a free account at https://www.emailjs.com and connect your Gmail
//    as an "Email Service" — that gives you the Service ID below.
// 2. Create an Email Template (the fields it expects: from_name, from_email,
//    message) — that gives you the Template ID below.
// 3. Account > General > Public Key — that's the Public Key below.
// Until these are filled in, the form falls back to a plain mailto link so
// it's never fully broken.
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const isConfigured =
  !EMAILJS_SERVICE_ID.startsWith("YOUR_") &&
  !EMAILJS_TEMPLATE_ID.startsWith("YOUR_") &&
  !EMAILJS_PUBLIC_KEY.startsWith("YOUR_");

const contactDetails = [
  { label: "Email", value: "nomqhelen2@gmail.com", icon: Mail },
  { label: "Availability", value: "Currently taking new projects", icon: CheckCircle2 },
  { label: "Response time", value: "Within one business day", icon: Clock },
];

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      // EmailJS hasn't been set up yet — fall back to opening the visitor's
      // email client with everything pre-filled, so the form still works.
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:nomqhelen2@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-card py-20 md:scroll-mt-28 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary">Let&apos;s work together</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Contact Me</h2>
        </div>

        <div className="mt-12 border border-border p-6 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <Input
                  id="contact-name"
                  required
                  type="text"
                  placeholder="Full Name"
                  className="h-11"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm font-medium">
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <Input
                  id="contact-email"
                  required
                  type="email"
                  placeholder="Email Address"
                  className="h-11"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                Message <span aria-hidden="true">*</span>
              </label>
              <Textarea
                id="contact-message"
                required
                placeholder="Message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-1 rounded-full"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send"}
            </Button>
            {status === "success" && (
              <p className="text-sm text-primary">Thanks! Your message is on its way.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please email me directly at nomqhelen2@gmail.com instead.
              </p>
            )}
          </form>

          <dl className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
            {contactDetails.map((row) => (
              <div key={row.label} className="border border-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <row.icon className="h-4 w-4 text-primary" />
                  </span>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    {row.label}
                  </dt>
                </div>
                <dd className="mt-3 text-sm text-muted-foreground">
                  {row.label === "Email" ? (
                    <a href={`mailto:${row.value}`} className="hover:text-primary">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
