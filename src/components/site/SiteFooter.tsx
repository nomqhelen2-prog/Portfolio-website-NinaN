import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Nomqhele N Moyo</span>
        <div className="flex gap-6">
          <Link to="/services" className="hover:text-foreground">
            Services
          </Link>
          <Link to="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
