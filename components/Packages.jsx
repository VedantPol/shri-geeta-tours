import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { packages, wa } from "@/lib/site";

export default function Packages() {
  return (
    <section id="packages" className="section bg-ink text-sand-50">
      <div className="shell">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal as="p" className="kicker !text-green-soft">
              Handpicked packages
            </Reveal>
            <Reveal as="h2" delay={0.05} className="mt-4 text-[clamp(1.7rem,4vw,2.8rem)] font-semibold leading-tight">
              Ready-to-customise trips for every budget.
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/contact" className="btn btn-light">
              Get a quote
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-sand-50/[0.04] ring-1 ring-sand-50/10 transition-colors duration-300 hover:ring-green-soft/60">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium backdrop-blur">
                    {p.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-100/75">{p.copy}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-sand-50/10 pt-5">
                    <span className="font-display text-lg text-amber-soft">{p.price}</span>
                    <a
                      href={wa(`Please send details for the ${p.title} package.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-sand-50 transition-colors hover:text-green-soft"
                    >
                      Ask on WhatsApp <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
