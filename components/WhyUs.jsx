import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { whyUs } from "@/lib/site";

export default function WhyUs() {
  return (
    <section className="section bg-sand-100">
      <div className="shell">
        <div className="mb-12 text-center">
          <Reveal as="p" className="eyebrow justify-center">
            Why travel with us
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mx-auto max-w-2xl text-[clamp(1.7rem,4vw,2.8rem)] font-semibold leading-tight">
            Book with confidence, travel with peace of mind.
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-3xl bg-sand-50 ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(22,17,13,0.1)]">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
