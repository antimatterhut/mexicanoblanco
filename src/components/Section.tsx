import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children?: ReactNode;
};

export default function Section({
  id,
  className = "",
  innerClassName = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div
        className={`mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-20 ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
