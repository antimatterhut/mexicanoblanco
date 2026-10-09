import Image from "next/image";
import Link from "next/link";
import HeatMeter from "@/components/HeatMeter";
import type { Salsa } from "@/content/site";

export default function SalsaCard({ salsa }: { salsa: Salsa }) {
  return (
    <Link
      href={`/salsas#${salsa.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-transparent bg-surface transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-primary focus-visible:-translate-y-1 focus-visible:border-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0"
    >
      <Image
        src={salsa.image.src}
        alt={salsa.image.alt}
        width={800}
        height={800}
        sizes="(min-width: 1280px) 352px, (min-width: 1152px) 540px, (min-width: 768px) calc(50vw - 36px), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
        className="aspect-square w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-2xl leading-tight">{salsa.name}</h3>
        <p className="text-muted">{salsa.tagline}</p>
        <HeatMeter heat={salsa.heat} className="mt-auto pt-2" />
      </div>
    </Link>
  );
}
