import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingDock } from "@/components/site/FloatingDock";
import { IntroSplash } from "@/components/site/IntroSplash";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
// Experience is shelved until the church mobile app is deployed — the
// section still lives at @/sections/Experience, just not rendered here.
// import { Experience } from "@/sections/Experience";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

// A single-page portfolio: one scrolling page made up of sections, with the
// header nav jumping to each one by anchor instead of separate routes.
export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <IntroSplash />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        {/* <Experience /> */}
        <Services />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingDock />
    </div>
  );
}
