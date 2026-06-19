import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { gallery, site } from "@/lib/site";

export default function Gallery() {
  return (
    <section className="section bg-sand-100">
      <div className="shell">
        <div className="mb-10 text-center">
          <Reveal as="p" className="eyebrow justify-center">
            Travel gallery
          </Reveal>
          <Reveal as="h2" delay={0.05} className="text-[clamp(1.7rem,4vw,2.8rem)] font-semibold leading-tight">
            Real moods for your next escape.
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.alt} delay={i * 0.08}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={g.image}
                  alt={g.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" delay={0.1} className="mt-8 text-center text-sm text-ink-muted">
          Tag {site.legalName} after your trip to get featured.
        </Reveal>
      </div>
    </section>
  );
}
