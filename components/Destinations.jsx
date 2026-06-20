import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { destinations, wa } from "@/lib/site";

export default function Destinations() {
  return (
    <section id="destinations" className="section bg-sand-50">
      <div className="shell">
        <div className="mb-10 max-w-2xl">
          <Reveal as="p" className="eyebrow">
            Curated journeys
          </Reveal>
          <Reveal as="h2" delay={0.05} className="text-[clamp(1.7rem,4vw,2.8rem)] font-semibold leading-tight">
            Choose the place. We&apos;ll build the route.
          </Reveal>
        </div>
      </div>

      {/* Edge-to-edge horizontal slider */}
      <Reveal delay={0.1}>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--shell-x)] pb-2">
          {destinations.map((d) => (
            <a
              key={d.name}
              href={wa(`I am interested in a ${d.name} tour. Please share package options.`)}
              target="_blank"
              rel="noreferrer"
              className="group relative h-96 w-72 shrink-0 snap-start overflow-hidden rounded-3xl sm:w-80"
            >
              <Image
                src={d.image}
                alt={d.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-sand-50">
                <span className="font-display text-2xl font-semibold">{d.name}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-sand-50/40 transition-all duration-300 group-hover:border-green-brand group-hover:bg-green-brand">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
