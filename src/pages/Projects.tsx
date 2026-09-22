import { Link } from "react-router-dom";

import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  usePageMeta(
    "Projects — Selected Work by Nomqhele N Moyo",
    "Live sites built for real clients — an experiential marketing agency, a mobile bar company, an infrastructure firm and a project consultancy.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Projects built with intention"
        intro="A selection of live sites, designed and built end to end — click through to see each one in production."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>

        <div className="mt-12 border-t pt-10">
          <Button asChild size="lg">
            <Link to="/contact">Discuss your project</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
