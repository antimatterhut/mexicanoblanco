import Image from "next/image";
import HeatMeter from "@/components/HeatMeter";
import OrderButton from "@/components/OrderButton";
import { salsasPageCopy, type Salsa } from "@/content/site";

type SalsaSectionProps = {
  salsa: Salsa;
  index: number;
};

export default function SalsaSection({ salsa, index }: SalsaSectionProps) {
  const imageOnRight = index % 2 === 1;

  return (
    <section
      id={salsa.slug}
      className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-16"
    >
      <Image
        src={salsa.image.src}
        alt={salsa.image.alt}
        width={800}
        height={800}
        sizes="(min-width: 1152px) 528px, (min-width: 768px) calc(50vw - 48px), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
        className={`aspect-square w-full rounded-2xl object-cover ${
          imageOnRight ? "md:order-2" : ""
        }`.trim()}
      />
      <div className="flex flex-col items-start gap-4">
        <h2 className="font-display text-3xl leading-tight md:text-5xl">
          {salsa.name}
        </h2>
        <p className="text-xl font-bold text-primary">{salsa.tagline}</p>
        <HeatMeter heat={salsa.heat} />
        <p className="text-lg">{salsa.description}</p>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-muted">
            {salsasPageCopy.ingredientsHeading}
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {salsa.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <OrderButton shopPath={salsa.shopPath} className="mt-2" />
      </div>
    </section>
  );
}
