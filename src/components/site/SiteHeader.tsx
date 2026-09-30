import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";

// "Experience" is shelved along with its section (see App.tsx) until the
// church mobile app is deployed — add it back here once that's live.
const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact Me" },
] as const;

const sectionIds = nav.map((item) => item.href.slice(1));

export function SiteHeader() {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        <a href="#home" className="shrink-0 text-lg font-bold tracking-wide text-white">
          NM
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {nav.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-white ${
                activeId === item.href.slice(1) ? "text-white" : "text-white/60"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="shrink-0 rounded-full bg-white px-5 text-black hover:bg-white/90"
        >
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </header>
  );
}
