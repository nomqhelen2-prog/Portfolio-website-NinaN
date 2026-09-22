export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-5xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-xl text-muted-foreground">{intro}</p> : null}
      </div>
    </section>
  );
}
