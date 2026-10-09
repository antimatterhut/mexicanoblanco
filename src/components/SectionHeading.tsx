type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  level?: 1 | 2 | 3;
  intro?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  level = 2,
  intro,
  className = "",
}: SectionHeadingProps) {
  const Heading = `h${level}` as const;

  return (
    <div className={`max-w-2xl ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-3xl leading-tight md:text-5xl">
        {heading}
      </Heading>
      {intro ? <p className="mt-4 text-lg text-muted">{intro}</p> : null}
    </div>
  );
}
