import { Home, User, LayoutGrid, Mail } from "lucide-react";

const items = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About Me", icon: User },
  { href: "#projects", label: "Portfolio", icon: LayoutGrid },
  { href: "#contact", label: "Contact Me", icon: Mail },
] as const;

// A small fixed quick-nav pinned to the right edge — a decorative touch
// mirroring the reference layout. Hidden on small screens where it would
// just crowd the page.
export function FloatingDock() {
  return (
    <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 rounded-full border border-border bg-primary/90 p-2 shadow-lg shadow-black/30 lg:flex">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.label}
          className="flex h-9 w-9 items-center justify-center rounded-full text-primary-foreground transition-colors hover:bg-primary-foreground/20"
        >
          <item.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
