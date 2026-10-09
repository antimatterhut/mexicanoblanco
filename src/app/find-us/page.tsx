import type { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import SignupBlock from "@/components/SignupBlock";
import { business, findUsCopy, locations, seoCopy } from "@/content/site";

export const metadata: Metadata = {
  title: seoCopy.findUs.title,
  description: seoCopy.findUs.description,
  alternates: { canonical: "/find-us" },
  openGraph: {
    title: seoCopy.findUs.title,
    description: seoCopy.findUs.description,
    url: "/find-us",
  },
  twitter: {
    title: seoCopy.findUs.title,
    description: seoCopy.findUs.description,
  },
};

export default function FindUsPage() {
  const groups = findUsCopy.groups
    .map((group) => ({
      ...group,
      items: locations.filter((location) => location.kind === group.kind),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <Section>
        <SectionHeading
          level={1}
          eyebrow={findUsCopy.eyebrow}
          heading={findUsCopy.heading}
          intro={findUsCopy.intro}
        />

        {groups.length === 0 ? (
          <p className="mt-10 rounded-2xl bg-surface p-6 text-lg">
            {findUsCopy.emptyMessage}
          </p>
        ) : (
          <div className="mt-10 space-y-12">
            {groups.map((group) => (
              <div key={group.kind}>
                <h2 className="font-display text-2xl md:text-3xl">
                  {group.heading}
                </h2>
                <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((location) => (
                    <li
                      key={location.name}
                      className="rounded-2xl bg-surface p-6"
                    >
                      <h3 className="font-display text-xl">{location.name}</h3>
                      {location.area ? (
                        <p className="mt-2 text-muted">{location.area}</p>
                      ) : null}
                      {location.schedule ? (
                        <p className="mt-1 text-muted">{location.schedule}</p>
                      ) : null}
                      {location.url ? (
                        <a
                          href={location.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block font-bold text-primary underline underline-offset-4 hover:text-primary-dark"
                        >
                          {findUsCopy.visitLinkLabel}
                          <span className="sr-only"> ({location.name})</span>
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section id="contact" className="bg-surface/50">
        <SectionHeading
          eyebrow={findUsCopy.contactEyebrow}
          heading={findUsCopy.contactHeading}
          intro={findUsCopy.contactIntro}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${business.email}`}>
            {findUsCopy.emailButtonLabel}
          </Button>
          <Button href={business.instagramUrl} variant="secondary" external>
            {findUsCopy.instagramButtonLabel}
          </Button>
        </div>

        {/*
          FORM SERVICE (later): to add a contact form, create a form with a
          service such as Formspree, put its endpoint URL in site.ts, and
          render a small client component here that posts to it. No form is
          built yet, so there is nothing non-working on the page.
        */}

        <SignupBlock />
      </Section>
    </>
  );
}
