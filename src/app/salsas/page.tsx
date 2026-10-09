import type { Metadata } from "next";
import SalsaFilter from "@/components/SalsaFilter";
import SalsaSection from "@/components/SalsaSection";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { salsas, salsasPageCopy, seoCopy } from "@/content/site";

export const metadata: Metadata = {
  title: seoCopy.salsas.title,
  description: seoCopy.salsas.description,
  alternates: { canonical: "/salsas" },
  openGraph: {
    title: seoCopy.salsas.title,
    description: seoCopy.salsas.description,
    url: "/salsas",
  },
  twitter: {
    title: seoCopy.salsas.title,
    description: seoCopy.salsas.description,
  },
};

export default function SalsasPage() {
  return (
    <>
      <Section innerClassName="pb-6 md:pb-8">
        <SectionHeading
          level={1}
          eyebrow={salsasPageCopy.eyebrow}
          heading={salsasPageCopy.heading}
          intro={salsasPageCopy.intro}
        />
      </Section>
      <SalsaFilter
        items={salsas.map((salsa, index) => ({
          slug: salsa.slug,
          heat: salsa.heat,
          node: <SalsaSection salsa={salsa} index={index} />,
        }))}
      />
    </>
  );
}
