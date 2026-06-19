import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { experiences } from "@/lib/site";

export default function Experiences() {
  return (
    <section id="experiences" className="section bg-sand-100">
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <Reveal as="p" className="eyebrow">
            Popular experiences
          </Reveal>
          <Reveal as="h2" delay={0.05} className="text-[clamp(1.7rem,4vw,2.8rem)] font-semibold leading-tight">
            Travel moods that feel ready before you pack.
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.title}
              delay={i * 0.08}
              className={exp.large ? "lg:col-span-2 lg:row-span-1" : ""}
            >
              <article className="group relative h-72 overflow-hidden rounded-3xl sm:h-80 lg:h-[26rem]">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-sand-50">
                  <span className="font-display text-sm text-amber-soft">{exp.n}</span>
                  <h3 className="mt-1 text-xl font-semibold sm:text-2xl">{exp.title}</h3>
                  {/* Always visible on mobile; reveal on hover from md up. */}
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-sand-100/85 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {exp.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
