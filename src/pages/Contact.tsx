import { PageHeader } from "@/components/site/PageHeader";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const details = [
  { label: "Email", value: "nomqhelen2@gmail.com", href: "mailto:nomqhelen2@gmail.com" },
  { label: "Availability", value: "Currently taking new projects" },
  { label: "Response time", value: "Within one business day" },
];

export default function ContactPage() {
  usePageMeta(
    "Contact — Work with Nomqhele N Moyo",
    "Tell me about the site you have in mind. Currently taking new frontend and web application projects.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Let's work together"
        title="Tell me about the site you have in mind."
        intro="Share a little about your brand, timeline and the outcome you're after — I'll come back with a clear plan."
      />

      <section className="mx-auto max-w-xl px-6 py-16 md:py-24">
        <Card>
          <CardContent className="pt-6">
            <dl className="divide-y">
              {details.map((row) => (
                <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium">{row.label}</dt>
                  <dd className="text-sm text-muted-foreground">
                    {row.href ? (
                      <a href={row.href} className="text-primary hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <Button asChild size="lg" className="mt-6 w-full">
              <a href="mailto:nomqhelen2@gmail.com">Send an email</a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
