import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Nomqhele</span>
        <div className="flex gap-8">
          <Link to="/services" className="transition-colors hover:text-accent">
            Services
          </Link>
          <Link to="/projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <Link to="/contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}