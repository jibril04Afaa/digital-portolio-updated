import { ScrollReveal } from "./ScrollReveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  animate?: boolean;
};

export function SectionHeading({ eyebrow, title, description, animate = false }: SectionHeadingProps) {
  const content = (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-solder">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-wafer sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );

  if (animate) {
    return <ScrollReveal>{content}</ScrollReveal>;
  }

  return content;
}
