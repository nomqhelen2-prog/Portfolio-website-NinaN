import { services } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background md:scroll-mt-28">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
        <p className="text-sm font-semibold text-primary">What I do</p>
        <h2 className="mt-3 text-3xl font-bold">Core services</h2>

        <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
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
      </div>
    </section>
  );
}
