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
    <section className="veil border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="label-caps">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-ink md:text-6xl">{title}</h1>
        {intro ? (
          <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}