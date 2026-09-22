import { Link } from "react-router-dom";

import { PageHeader } from "@/components/site/PageHeader";
import { services } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  usePageMeta(
    "Services — Frontend, Landing Pages & Web Apps",
    "Frontend and UI development, landing pages and portfolios, dynamic web applications, plus version control and deployment.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Core services"
        title="What I do"
        intro="Every engagement is transparent, detail-driven and built on sustainable web standards."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.body}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link to="/contact">Enquire about a project</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">See selected work</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
