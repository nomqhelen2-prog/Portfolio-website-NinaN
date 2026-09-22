import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Selected Work by Nomqhele" },
      {
        name: "description",
        content:
          "Selected work: brand-led marketing sites, a mobile-first commerce experience and a reporting dashboard built with React and TypeScript.",
      },
      { property: "og:title", content: "Projects — Selected Work by Nomqhele" },
      {
        property: "og:description",
        content: "Marketing sites, commerce interfaces and dashboards built with intention.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Projects built with intention"
        intro="A selection of interfaces designed and built end to end — from concept through to production deployment."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <article key={project.title} className="grid items-center gap-12 md:grid-cols-2">
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                loading="lazy"
                width={1200}
                height={800}
                className={`aspect-4/3 w-full object-cover shadow-[var(--shadow-soft)] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div>
                <p className="label-caps">{project.index}</p>
                <h2 className="mt-5 text-3xl text-ink md:text-4xl">{project.title}</h2>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.role}
                </p>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {project.body}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-border bg-background px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-12">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Discuss your project
          </Link>
        </div>
      </section>
    </>
  );
}