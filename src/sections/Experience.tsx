import { useEffect, useRef, useState } from "react";

import { experience } from "@/data/site";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ExperienceEntry = (typeof experience)[number];

// Reveals its target once it scrolls into view, then stops watching — used
// to trigger the timeline line and each card as the visitor scrolls down to
// them, instead of all at once on page load.
function useRevealOnce<T extends HTMLElement>(rootMargin: string) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- rootMargin is a constant per call site
  }, []);

  return [ref, visible] as const;
}

function ExperienceCard({ item }: { item: ExperienceEntry }) {
  return (
    <Card className="text-left">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle>{item.title}</CardTitle>
          <Badge variant="secondary">{item.status}</Badge>
        </div>
        <CardDescription>{item.body}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {item.tools.map((tool) => (
            <Badge key={tool} variant="outline">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ExperienceItem({ item, side }: { item: ExperienceEntry; side: "left" | "right" }) {
  const [ref, visible] = useRevealOnce<HTMLDivElement>("0px 0px -10% 0px");
  const isLeft = side === "left";

  const card = (
    <div
      className={cn(
        "transition-all duration-700 ease-out",
        visible
          ? "translate-x-0 opacity-100"
          : isLeft
            ? "-translate-x-6 opacity-0"
            : "translate-x-6 opacity-0",
      )}
    >
      <ExperienceCard item={item} />
    </div>
  );

  return (
    <div ref={ref} className="relative grid gap-6 pl-12 md:grid-cols-2 md:gap-10 md:pl-0">
      <span
        className={cn(
          "absolute left-4 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-foreground transition-transform duration-500 md:left-1/2",
          visible ? "scale-100" : "scale-0",
        )}
      />
      {isLeft ? (
        <>
          <div className="md:text-right">{card}</div>
          <div className="hidden md:block" />
        </>
      ) : (
        <>
          <div className="hidden md:block" />
          {card}
        </>
      )}
    </div>
  );
}

export function Experience() {
  const [lineRef, lineVisible] = useRevealOnce<HTMLDivElement>("0px 0px -15% 0px");

  return (
    <section id="experience" className="scroll-mt-20 bg-background py-20 md:scroll-mt-28 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold text-primary">What I build</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Experience</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Two full-stack tracks, side by side: shipped web projects, and a mobile app in the works.
        </p>

        <div ref={lineRef} className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <div
            className="absolute left-4 top-0 w-px origin-top bg-foreground transition-transform duration-[1400ms] ease-out md:left-1/2"
            style={{ height: "100%", transform: lineVisible ? "scaleY(1)" : "scaleY(0)" }}
          />

          <div className="flex flex-col gap-16 md:gap-20">
            {experience.map((item, i) => (
              <ExperienceItem key={item.title} item={item} side={i % 2 === 0 ? "left" : "right"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
