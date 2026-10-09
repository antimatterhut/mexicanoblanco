import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { notFoundCopy } from "@/content/site";

export default function NotFound() {
  return (
    <Section innerClassName="py-20 md:py-32">
      <SectionHeading
        level={1}
        eyebrow={notFoundCopy.eyebrow}
        heading={notFoundCopy.heading}
        intro={notFoundCopy.body}
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">{notFoundCopy.homeLabel}</Button>
        <Button href="/salsas" variant="secondary">
          {notFoundCopy.salsasLabel}
        </Button>
      </div>
    </Section>
  );
}
