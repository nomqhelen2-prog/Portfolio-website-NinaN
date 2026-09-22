import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { TopBar } from "./TopBar";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
          <NavLink to="/" className="shrink-0 text-base font-bold sm:text-lg">
            Nomqhele N Moyo
          </NavLink>

          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={"end" in item ? item.end : false}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-foreground ${
                    isActive ? "text-primary" : "text-foreground/70"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-5">
            <NavLink
              to="/contact"
              className="hidden text-sm font-medium underline underline-offset-4 hover:text-primary sm:inline"
            >
              Get in Touch
            </NavLink>
            <Button asChild size="icon" className="rounded-full">
              <NavLink to="/contact" aria-label="Get in touch">
                <ArrowUpRight />
              </NavLink>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
