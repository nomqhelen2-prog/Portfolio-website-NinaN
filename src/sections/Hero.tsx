import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10 md:scroll-mt-28"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[3px]"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-sm font-medium text-white/60">Hi, my name is</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-white md:text-5xl">
            Nomqhele N Moyo
          </h1>
          <span className="mt-4 inline-block bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
            Web Developer · Application Developer
          </span>
          <p className="mt-6 max-w-md text-white/70">
            I build fast, accessible websites for brands and small businesses, pairing creative
            branding with reliable, modern code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-black hover:bg-white/90"
            >
              <a href="#projects">View my work</a>
            </Button>
            <a
              href="#about"
              className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
            >
              Learn more about me
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-white bg-secondary shadow-lg shadow-black/40">
            <div className="absolute -inset-3 -z-10 rounded-full bg-white/20 blur-2xl" />
            <img src={profilePhoto} alt="Nomqhele N Moyo" className="h-full w-full object-cover" />
          </div>
          <span className="flex items-center gap-1.5 text-sm text-white/70">
            <MapPin className="h-3.5 w-3.5 text-white" />
            Remote · Worldwide
          </span>
        </div>
      </div>
    </section>
  );
}
