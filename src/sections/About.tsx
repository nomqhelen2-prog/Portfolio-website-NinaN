import {
  Atom,
  Braces,
  Code2,
  FileCode2,
  GitBranch,
  Palette,
  Server,
  Smartphone,
  Terminal,
  Zap,
  Accessibility,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// The stack data (src/data/site.ts) groups tools into label/value sentences
// for a dl — here they're flattened into individual pill tags, each with an
// icon, to match the skills-grid look.
const skills: { label: string; icon: LucideIcon }[] = [
  { label: "React", icon: Atom },
  { label: "TypeScript", icon: FileCode2 },
  { label: "JavaScript (ES6+)", icon: Braces },
  { label: "HTML5 & CSS3", icon: Code2 },
  { label: "Tailwind CSS", icon: Palette },
  { label: "Vite", icon: Zap },
  { label: "Node.js", icon: Server },
  { label: "Python", icon: Terminal },
  { label: "Git & GitHub", icon: GitBranch },
  { label: "Responsive Design", icon: Smartphone },
  { label: "Accessibility", icon: Accessibility },
  { label: "Clean Code", icon: CheckCircle2 },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary/40 py-20 md:scroll-mt-28 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I&apos;m <span className="font-semibold text-primary">Nomqhele N Moyo</span>, Web
          Developer &amp; Application Developer
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          I treat every build as a partnership, not a hand-off, understanding the brand and audience
          first, then designing and shipping in small, visible steps. Modern tooling (React,
          TypeScript, Vite) keeps sites fast and maintainable, with accessibility and responsive QA
          built in from day one.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 px-6 sm:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-sm text-foreground/90"
          >
            <skill.icon className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
