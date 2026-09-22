import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { stack } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nomqhele, Frontend Developer" },
      {
        name: "description",
        content:
          "A development practice built on continuous learning, attention to detail and transparent collaboration — combining computer science foundations with hands-on React work.",
      },
      { property: "og:title", content: "About — Nomqhele, Frontend Developer" },
      {
        property: "og:description",
        content:
          "Philosophy, technical foundations and the tools behind every project I build.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Detail is the <span className="text-accent">whole</span> of it.
          </>
        }
        intro="A digital development practice bridging creative visual branding with reliable, modern web functionality."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label-caps">Mission & philosophy</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
              Fast, accessible, considered.
            </h2>
          </div>
          <div className="space-y-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
            <p>
              My mission is to empower businesses and local brands with a web presence that is
              fast, accessible and genuinely lovely to use. I believe in continuous learning,
              rigorous attention to detail and transparent collaboration.
            </p>
            <p>
              By combining academic computer science foundations with hands-on development
              experience, every project is built on modern, sustainable web standards — code that
              is as considered as the interface it renders.
            </p>
          </div>
        </div>

        <dl className="mt-20 divide-y divide-border border-t border-border">
          {stack.map((row) => (
            <div key={row.label} className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr]">
              <dt className="label-caps pt-1">{row.label}</dt>
              <dd className="text-sm text-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}