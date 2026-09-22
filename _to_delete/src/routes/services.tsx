import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Frontend, Landing Pages & Web Apps" },
      {
        name: "description",
        content:
          "Frontend and UI development, landing pages and portfolios, dynamic web applications, plus version control and deployment.",
      },
      { property: "og:title", content: "Services — Frontend, Landing Pages & Web Apps" },
      {
        property: "og:description",
        content:
          "Four core services covering interface development, high-impact landing pages, web applications and reliable deployment.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Core services"
        title="What I do"
        intro="Every engagement is transparent, detail-driven and built on sustainable web standards."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.index}
              className="bg-background p-10 transition-colors hover:bg-secondary/60"
            >
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
                {service.index}
              </span>
              <h2 className="mt-6 text-2xl text-ink">{service.title}</h2>
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

        <div className="mt-16 flex flex-wrap items-center gap-8">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Enquire about a project
          </Link>
          <Link
            to="/projects"
            className="border-b border-accent pb-1 text-sm text-foreground transition-colors hover:text-accent"
          >
            See selected work
          </Link>
        </div>
      </section>
    </>
  );
}