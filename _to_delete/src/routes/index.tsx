import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero-abstract.jpg";
import { services, projects } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nomqhele — Frontend Developer & Interface Designer" },
      {
        name: "description",
        content:
          "A digital development practice crafting refined, responsive websites and web applications with React, TypeScript and modern web standards.",
      },
      { property: "og:title", content: "Nomqhele — Frontend Developer & Interface Designer" },
      {
        property: "og:description",
        content:
          "Landing pages, portfolios and dynamic web applications built with care, clean code and considered detail.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
        <section className="veil border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:py-32">
            <div className="animate-fade-in">
              <p className="label-caps">Digital development practice</p>
              <h1 className="mt-8 text-5xl leading-[1.03] text-ink md:text-6xl">
                Built with Craft.
                <span className="block">
                  Engineered with <span className="text-accent">Care</span>.
                </span>
              </h1>
              <p className="mt-8 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground">
                I build fast, accessible and visually compelling web presence for brands, agencies
                and small businesses — bridging creative branding with reliable, modern code.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <Link
                  to="/projects"
                  className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                >
                  View selected work
                </Link>
                <span className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Currently taking new projects
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Blush silk with fine rose-gold thread lines forming a delicate grid"
                width={1200}
                height={1408}
                className="h-[30rem] w-full object-cover shadow-[var(--shadow-lift)] md:h-[34rem]"
              />
              <div className="absolute -bottom-6 -left-6 hidden border border-border bg-card px-8 py-6 shadow-[var(--shadow-soft)] md:block">
                <p className="label-caps">Built with</p>
                <p className="mt-2 font-display text-xl font-semibold">React · TypeScript</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-caps">Core services</p>
              <h2 className="mt-5 text-4xl md:text-5xl">What I do</h2>
            </div>
            <Link
              to="/services"
              className="border-b border-accent pb-1 text-sm text-foreground transition-colors hover:text-accent"
            >
              All services
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.index}
                className="group bg-background p-10 transition-colors hover:bg-secondary/60"
              >
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
                  {service.index}
                </span>
                <h3 className="mt-6 text-2xl text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-border px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <p className="label-caps">Selected work</p>
            <h2 className="mt-5 max-w-xl text-4xl md:text-5xl">
              Projects built with intention
            </h2>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-4/3 w-full object-cover shadow-[var(--shadow-soft)]"
                  />
                  <div className="mt-6">
                    <h3 className="text-2xl text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                      {project.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <Link
                to="/projects"
                className="border-b border-accent pb-1 text-sm text-foreground transition-colors hover:text-accent"
              >
                View all projects
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label-caps">Philosophy</p>
              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                Detail is the <span className="text-accent">whole</span> of it.
              </h2>
            </div>
            <div className="space-y-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>
                My mission is to empower businesses and local brands with a web presence that is
                fast, accessible and genuinely lovely to use. I believe in continuous learning,
                rigorous attention to detail and transparent collaboration.
              </p>
              <Link
                to="/about"
                className="inline-block border-b border-accent pb-1 text-sm text-foreground transition-colors hover:text-accent"
              >
                More about the practice
              </Link>
            </div>
          </div>
        </section>

        <section className="veil border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
            <p className="label-caps">Let's work together</p>
            <h2 className="mx-auto mt-6 max-w-2xl text-4xl leading-tight md:text-6xl">
              Tell me about the site you have in mind.
            </h2>
            <Link
              to="/contact"
              className="mt-12 inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Get in touch
            </Link>
          </div>
        </section>
    </>
  );
}
