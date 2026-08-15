import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Work with Nomqhele" },
      {
        name: "description",
        content:
          "Tell me about the site you have in mind. Currently taking new frontend and web application projects.",
      },
      { property: "og:title", content: "Contact — Work with Nomqhele" },
      {
        property: "og:description",
        content: "Get in touch about landing pages, portfolios and dynamic web applications.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { label: "Email", value: "hello@nomqhele.dev", href: "mailto:hello@nomqhele.dev" },
  { label: "Availability", value: "Currently taking new projects" },
  { label: "Response time", value: "Within one business day" },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's work together"
        title="Tell me about the site you have in mind."
        intro="Share a little about your brand, timeline and the outcome you're after — I'll come back with a clear plan."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <a
              href="mailto:hello@nomqhele.dev"
              className="inline-block border-b-2 border-accent pb-2 font-display text-2xl font-semibold transition-colors hover:text-accent md:text-3xl"
            >
              hello@nomqhele.dev
            </a>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Prefer a brief? Include the pages you need, any existing branding and links to sites
              whose feel you admire.
            </p>
          </div>

          <dl className="divide-y divide-border border-t border-border">
            {details.map((row) => (
              <div key={row.label} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
                <dt className="label-caps pt-1">{row.label}</dt>
                <dd className="text-sm text-foreground">
                  {row.href ? (
                    <a href={row.href} className="transition-colors hover:text-accent">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}