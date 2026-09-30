import { projects } from "@/data/site";
import { ProjectCard } from "@/components/site/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-secondary/40 py-20 md:scroll-mt-28 md:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold text-primary">Selected work</p>
        <h2 className="mt-3 text-3xl font-bold">Portfolio</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A selection of live sites, designed and built end to end. Click through to see each one in
          production.
        </p>

        <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
