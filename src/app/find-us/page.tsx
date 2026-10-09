import Section from "@/components/Section";
import { stubPages, uiCopy } from "@/content/site";

export default function FindUsPage() {
  return (
    <>
      <Section>
        <h1 className="font-display text-4xl md:text-6xl">
          {stubPages.findUs.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{uiCopy.stubNote}</p>
      </Section>
      {/* Contact section: filled in a later phase. OrderButton links here. */}
      <Section id="contact" />
    </>
  );
}
