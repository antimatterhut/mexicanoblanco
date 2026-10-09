import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import OrderButton from "@/components/OrderButton";
import SalsaCard from "@/components/SalsaCard";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { business, heroImage, homeCopy, salsas, seoCopy } from "@/content/site";

export const metadata: Metadata = {
  description: seoCopy.home.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Section innerClassName="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-primary">
            {business.name}
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            {homeCopy.heroHeadline}
          </h1>
          <p className="mt-4 text-lg text-muted">{homeCopy.heroSubhead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OrderButton />
            <Button href="#salsas" variant="secondary">
              {homeCopy.meetSalsasLabel}
            </Button>
          </div>
        </div>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={1200}
          height={900}
          priority
          sizes="(min-width: 1152px) 532px, (min-width: 768px) calc(50vw - 44px), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
          className="w-full rounded-2xl"
        />
      </Section>

      <Section id="salsas" className="bg-surface/50">
        <SectionHeading
          eyebrow={homeCopy.salsasEyebrow}
          heading={homeCopy.salsasHeading}
          intro={homeCopy.salsasIntro}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {salsas.map((salsa) => (
            <SalsaCard key={salsa.slug} salsa={salsa} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={homeCopy.whyEyebrow}
          heading={homeCopy.whyHeading}
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {homeCopy.whyPoints.map((point) => (
            <li key={point.title} className="rounded-2xl bg-surface p-6">
              <h3 className="font-display text-xl">{point.title}</h3>
              <p className="mt-2 text-muted">{point.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={homeCopy.storyEyebrow}
          heading={homeCopy.storyHeading}
          intro={homeCopy.storyTeaser}
        />
        <Button href="/our-story" className="mt-8">
          {homeCopy.storyButtonLabel}
        </Button>
      </Section>

      <Section className="bg-accent text-dark" innerClassName="text-center">
        <h2 className="font-display text-3xl md:text-5xl">
          {homeCopy.closingHeading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg">{homeCopy.closingBody}</p>
        <div className="mt-8 flex justify-center">
          <OrderButton />
        </div>
      </Section>
    </>
  );
}
