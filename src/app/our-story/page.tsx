import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { storyCopy, storyImage, seoCopy } from "@/content/site";

export const metadata: Metadata = {
  title: seoCopy.ourStory.title,
  description: seoCopy.ourStory.description,
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: seoCopy.ourStory.title,
    description: seoCopy.ourStory.description,
    url: "/our-story",
  },
  twitter: {
    title: seoCopy.ourStory.title,
    description: seoCopy.ourStory.description,
  },
};

export default function OurStoryPage() {
  return (
    <>
      <Section>
        <SectionHeading
          level={1}
          eyebrow={storyCopy.eyebrow}
          heading={storyCopy.heading}
        />
        <Image
          src={storyImage.src}
          alt={storyImage.alt}
          width={1200}
          height={800}
          sizes="(min-width: 1152px) 1104px, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
          className="mt-10 w-full rounded-2xl"
        />
        <blockquote className="mx-auto mt-12 max-w-3xl border-l-8 border-accent bg-surface p-6 font-display text-2xl leading-snug md:p-10 md:text-4xl">
          {storyCopy.pullQuote}
        </blockquote>
      </Section>

      <Section className="bg-surface/50" innerClassName="max-w-3xl">
        <div className="space-y-12">
          {storyCopy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl md:text-4xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-lg text-muted">{section.body}</p>
            </div>
          ))}
        </div>
        <Button href="/salsas" className="mt-12">
          {storyCopy.closingButtonLabel}
        </Button>
      </Section>
    </>
  );
}
