import Section from "@/components/Section";
import { stubPages, uiCopy } from "@/content/site";

export default function Home() {
  return (
    <Section>
      <h1 className="font-display text-4xl md:text-6xl">
        {stubPages.home.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{uiCopy.stubNote}</p>
    </Section>
  );
}
