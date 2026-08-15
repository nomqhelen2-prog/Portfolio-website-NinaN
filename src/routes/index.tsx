import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-abstract.jpg";
import workOne from "@/assets/work-one.jpg";
import workTwo from "@/assets/work-two.jpg";
import workThree from "@/assets/work-three.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nomqhele — Frontend Developer & Interface Designer" },
      {
        name: "description",
        content:
          "A digital development practice crafting refined, responsive websites and web applications with React, TypeScript and modern web standards.",
      },
      { property: "og:title", content: "Nomqhele — Frontend Developer & Interface Designer" },
      {
        property: "og:description",
        content:
          "Landing pages, portfolios and dynamic web applications built with care, clean code and considered detail.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    index: "01",
    title: "Frontend & UI Development",
    body: "Responsive, mobile-first interfaces built with React, TypeScript and modern CSS — considered at every screen size.",
    tools: ["React", "TypeScript", "Tailwind"],
  },
  {
    index: "02",
    title: "Landing Pages & Portfolios",
    body: "High-impact, conversion-focused sites tuned for fast loading speeds and effortless engagement.",
    tools: ["Vite", "SEO", "Performance"],
  },
  {
    index: "03",
    title: "Dynamic Web Applications",
    body: "Interactive projects, client prototypes and custom digital tools — from agency deliverables to specialised platforms.",
    tools: ["Node.js", "APIs", "State"],
  },
  {
    index: "04",
    title: "Version Control & Deployment",
    body: "Repositories managed with Git and reliable, seamless releases through modern hosting platforms.",
    tools: ["Git", "GitHub", "Vercel"],
  },
];

const projects = [
  {
    index: "Project 01",
    title: "Aurelia Studio",
    role: "Design & Build",
    body: "A brand-led marketing site for a boutique design studio, with an editorial layout and sub-second first paint.",
    stack: ["React", "Vite", "Tailwind"],
    image: workOne,
  },
  {
    index: "Project 02",
    title: "Atelier Commerce",
    role: "Frontend Lead",
    body: "A mobile-first shopping experience with a curated browsing flow and an accessible, touch-friendly interface.",
    stack: ["TypeScript", "React", "REST"],
    image: workTwo,
  },
  {
    index: "Project 03",
    title: "Insight Dashboard",
    role: "Full Build",
    body: "A reporting dashboard translating dense analytics into calm, legible visuals for non-technical teams.",
    stack: ["React", "Charts", "Node.js"],
    image: workThree,
  },
];

const stack = [
  { label: "Languages", value: "JavaScript (ES6+), TypeScript, HTML5, CSS3, Python" },
  { label: "Frameworks", value: "React, Vite, Node.js" },
  { label: "Workflow", value: "Git, GitHub, Vercel, cross-browser testing" },
  { label: "Principles", value: "Responsive design, accessibility, clean code" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-xl font-bold tracking-tight">
            Nomqhele<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-foreground px-6 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Enquire
          </a>
        </div>
      </header>

      <main id="top">
        <section className="veil border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:py-32">
            <div className="animate-fade-in">
              <p className="label-caps">Digital development practice</p>
              <h1 className="mt-8 text-5xl leading-[1.03] text-ink md:text-6xl">
                Built with Craft.
                <span className="block">
                  Engineered with <span className="text-accent">Care</span>.
                </span>
              </h1>
              <p className="mt-8 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground">
                I build fast, accessible and visually compelling web presence for brands, agencies
                and small businesses — bridging creative branding with reliable, modern code.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <a
                  href="#work"
                  className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                >
                  View selected work
                </a>
                <span className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Currently taking new projects
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Blush silk with fine rose-gold thread lines forming a delicate grid"
                width={1200}
                height={1408}
                className="h-[30rem] w-full object-cover shadow-[var(--shadow-lift)] md:h-[34rem]"
              />
              <div className="absolute -bottom-6 -left-6 hidden border border-border bg-card px-8 py-6 shadow-[var(--shadow-soft)] md:block">
                <p className="label-caps">Built with</p>
                <p className="mt-2 font-display text-xl font-semibold">React · TypeScript</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-caps">Core services</p>
              <h2 className="mt-5 text-4xl md:text-5xl">What I do</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Every engagement is transparent, detail-driven and built on sustainable web standards.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.index}
                className="group bg-background p-10 transition-colors hover:bg-secondary/60"
              >
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
                  {service.index}
                </span>
                <h3 className="mt-6 text-2xl text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-border px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="border-y border-border bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <p className="label-caps">Selected work</p>
            <h2 className="mt-5 max-w-xl text-4xl md:text-5xl">
              Projects built with intention
            </h2>

            <div className="mt-20 flex flex-col gap-24">
              {projects.map((project, i) => (
                <article
                  key={project.title}
                  className="grid items-center gap-12 md:grid-cols-2"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className={`aspect-4/3 w-full object-cover shadow-[var(--shadow-soft)] ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  />
                  <div>
                    <p className="label-caps">{project.index}</p>
                    <h3 className="mt-5 text-3xl text-ink md:text-4xl">{project.title}</h3>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                      {project.role}
                    </p>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {project.body}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="border border-border bg-background px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label-caps">Philosophy</p>
              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                Detail is the <span className="text-accent">whole</span> of it.
              </h2>
            </div>
            <div className="space-y-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>
                My mission is to empower businesses and local brands with a web presence that is
                fast, accessible and genuinely lovely to use. I believe in continuous learning,
                rigorous attention to detail and transparent collaboration.
              </p>
              <p>
                By combining academic computer science foundations with hands-on development
                experience, every project is built on modern, sustainable web standards — code that
                is as considered as the interface it renders.
              </p>

              <dl className="mt-12 divide-y divide-border border-t border-border">
                {stack.map((row) => (
                  <div key={row.label} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="label-caps pt-1">{row.label}</dt>
                    <dd className="text-sm text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="veil border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
            <p className="label-caps">Let's work together</p>
            <h2 className="mx-auto mt-6 max-w-2xl text-4xl leading-tight md:text-6xl">
              Tell me about the site you have in mind.
            </h2>
            <a
              href="mailto:hello@nomqhele.dev"
              className="mt-12 inline-block border-b-2 border-accent pb-2 font-display text-2xl font-semibold transition-colors hover:text-accent md:text-3xl"
            >
              hello@nomqhele.dev
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Nomqhele</span>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-accent">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
