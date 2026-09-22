import { Link } from "react-router-dom";

import { services, projects } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  usePageMeta(
    "Nomqhele N Moyo — Frontend Developer & Interface Designer",
    "A digital development practice crafting refined, responsive websites and web applications with React, TypeScript and modern web standards.",
  );

  return (
    <>
      <section className="border-b bg-secondary/40">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold text-primary">Digital development practice</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Built with craft. Engineered with care.
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground">
              I build fast, accessible and visually compelling websites for brands, agencies and
              small businesses — bridging creative branding with reliable, modern code.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link to="/projects">View selected work</Link>
              </Button>
              <span className="text-sm text-muted-foreground">Currently taking new projects</span>
            </div>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-2xl border bg-card shadow-lg shadow-slate-900/10 md:h-96">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="rounded-xl border bg-card px-8 py-6 text-center shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Built with
                </p>
                <p className="mt-2 text-2xl font-bold">React · TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide md:text-3xl">
            What sets my work apart
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/90">
            <p>
              Every project pairs a designer&apos;s eye with an engineer&apos;s discipline — clean
              component architecture, considered typography and layout, and interfaces that hold up
              on every screen size, not just the one in the mockup.
            </p>
            <p>
              Beyond the code, the goal is a genuinely easy working relationship: clear
              communication, realistic timelines and a site that is simple for you to maintain long
              after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-secondary/40 px-6 py-16 md:px-16 md:py-24">
          <p className="font-serif text-2xl italic text-primary md:text-3xl">Our Approach</p>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I treat every build as a partnership, not a hand-off. That starts with understanding
              the brand and the audience, then designing and shipping in small, visible steps so
              there are no surprises at launch.
            </p>
            <p>
              Modern tooling — React, TypeScript and Vite — keeps sites fast and maintainable, while
              accessibility and responsive QA are part of the process from day one, not an
              afterthought.
            </p>
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/60 to-primary/5 md:min-h-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full max-w-sm overflow-hidden rounded-xl border bg-card shadow-lg shadow-slate-900/10">
              <div className="flex items-center gap-1.5 border-b bg-muted px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <div className="space-y-3 p-5">
                <div className="h-3 w-3/4 rounded bg-muted" />
                <div className="h-3 w-full rounded bg-muted" />
                <div className="h-3 w-5/6 rounded bg-muted" />
                <div className="mt-4 h-16 rounded-lg bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold">What I do</h2>
          <Link to="/services" className="text-sm font-medium text-primary hover:underline">
            All services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.body}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">Live sites built for real clients</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.title} project={project} i={i} />
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/projects">View all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Tell me about the site you have in mind.
          </h2>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
