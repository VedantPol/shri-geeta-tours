import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { blogs, wa } from "@/lib/site";

export default function Blogs() {
  return (
    <section className="section bg-sand-100">
      <div className="shell">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal as="p" className="eyebrow">
              Travel notes
            </Reveal>
            <Reveal as="h2" delay={0.05} className="mt-4 text-[clamp(1.7rem,4vw,2.8rem)] font-semibold leading-tight">
              Ideas for your next journey.
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href={wa("Please suggest a good tour package for my next holiday.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Ask for ideas
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <article className="group cursor-pointer">
                <div className="relative h-60 overflow-hidden rounded-3xl">
                  <Image
                    src={b.image}
                    alt={b.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-sand-50/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                    {b.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-amber-deep">
                  {b.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
