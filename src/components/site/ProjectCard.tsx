import { ArrowUpRight, Building2, Globe, Martini, Megaphone, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  index: string;
  title: string;
  role: string;
  body: string;
  stack: string[];
  url: string;
};

// Brand blue and a soft blue-tinted white, cycled by index.
const TILE_COLORS = ["bg-primary", "bg-secondary"];
const TILE_TEXT_COLORS = ["text-primary-foreground", "text-secondary-foreground"];

// An icon that nods at each client's industry, so the preview reads as more
// than a placeholder. Falls back to a generic globe.
const TILE_ICONS: Record<string, LucideIcon> = {
  "OnCue Marketing": Megaphone,
  "The Drinks Masters SA": Martini,
  "Pipe Pioneers Infra": Wrench,
  "Mthunzi Project Consultants": Building2,
};

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

// A big browser-style preview (chrome bar + a stylised page layout in the
// client's brand color) followed by a compact name / url / link footer —
// no real screenshot is available, so this stands in for one honestly
// rather than faking a photographic capture.
export function ProjectCard({ project, i = 0 }: { project: Project; i?: number }) {
  const color = TILE_COLORS[i % TILE_COLORS.length];
  const text = TILE_TEXT_COLORS[i % TILE_TEXT_COLORS.length];
  const Icon = TILE_ICONS[project.title] ?? Globe;
  const host = hostname(project.url);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group block overflow-hidden border bg-card shadow-md shadow-slate-900/10 transition-shadow hover:shadow-lg"
      aria-label={`Visit the live ${project.title} site`}
    >
      <div className={`relative aspect-[4/3.1] w-full overflow-hidden ${color} ${text}`}>
        <div className="relative z-10 flex items-center gap-3 border-b border-current/15 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-current/40" />
            <span className="h-2 w-2 rounded-full bg-current/40" />
            <span className="h-2 w-2 rounded-full bg-current/40" />
          </div>
          <span className="truncate bg-current/10 px-2 py-0.5 text-[11px] opacity-80">{host}</span>
        </div>

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="absolute -right-10 -top-6 h-40 w-40 rounded-full bg-current/10 blur-3xl" />

        <div className="relative flex h-[calc(100%-2.6rem)] flex-col justify-center gap-4 px-6">
          <div className="flex items-center justify-between">
            <span className="flex h-8 w-8 items-center justify-center bg-current/15">
              <Icon className="h-4 w-4" />
            </span>
            <div className="flex gap-2">
              <span className="h-1.5 w-7 bg-current/25" />
              <span className="h-1.5 w-7 bg-current/25" />
              <span className="h-1.5 w-7 bg-current/25" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="h-3 w-2/3 bg-current/50" />
            <span className="h-3 w-1/2 bg-current/30" />
            <span className="mt-2 h-6 w-28 bg-current/90" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="min-w-0">
          <p className="truncate font-semibold">{project.title}</p>
          <p className="truncate text-sm text-muted-foreground">{host}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary underline-offset-4 group-hover:underline">
          View Website
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}
