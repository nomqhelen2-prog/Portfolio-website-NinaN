import { Link } from "react-router-dom";

import { stack } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  usePageMeta(
    "About — Nomqhele N Moyo, Frontend Developer",
    "A development practice built on continuous learning, attention to detail and transparent collaboration — combining computer science foundations with hands-on React work.",
  );

  return (
    <>
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-2xl font-bold uppercase tracking-wide md:text-3xl">
            What makes my work different
          </h1>
          <div className="mt-6 space-y-4 text-primary-foreground/90">
            <p>
              Detail is the whole of it. Every engagement combines a designer&apos;s eye with an
              engineer&apos;s discipline — clean component architecture, considered typography and
              layout, and code built on modern, sustainable web standards.
            </p>
            <p>
              Beyond the interface, I take pride in clear communication and genuinely understanding
              what a project needs — whether you&apos;re a small business, an agency, or building
              your first web presence, the goal is expert guidance and support at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-6 py-16 md:order-1 md:px-16 md:py-24">
          <p className="font-serif text-2xl italic text-primary md:text-3xl">Our Vision</p>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              To be a dependable partner for brands and small businesses building their presence
              online — combining continuous learning, rigorous attention to detail and transparent
              collaboration on every build.
            </p>
            <p>
              By pairing academic computer science foundations with hands-on development experience,
              every project is built on modern, sustainable web standards — code that is as
              considered as the interface it renders.
            </p>
          </div>
        </div>
        <div className="relative order-1 min-h-[280px] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/60 to-primary/5 md:order-2 md:min-h-0">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full max-w-sm overflow-hidden rounded-xl border bg-card shadow-lg shadow-slate-900/10">
              <div className="flex items-center gap-1.5 border-b bg-muted px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <div className="space-y-3 p-5">
                <div className="h-3 w-2/3 rounded bg-muted" />
                <div className="h-3 w-full rounded bg-muted" />
                <div className="h-3 w-4/5 rounded bg-muted" />
                <div className="mt-4 h-16 rounded-lg bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-bold">Stack</h2>
        <dl className="mt-4 divide-y border-t">
          {stack.map((row) => (
            <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
              <dt className="font-medium">{row.label}</dt>
              <dd className="text-sm text-muted-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>

        <Button asChild size="lg" className="mt-10">
          <Link to="/contact">Start a project</Link>
        </Button>
      </section>
    </>
  );
}
