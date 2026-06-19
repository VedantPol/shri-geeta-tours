import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

const facts = [
  { strong: "Hotels", span: "Budget to premium" },
  { strong: "Transfers", span: "Local & outstation" },
  { strong: "Visas", span: "Guidance for select countries" },
  { strong: "Groups", span: "Families, friends, offices" },
];

export default function Story() {
  return (
    <section className="section bg-sand-50">
      <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative h-80 overflow-hidden rounded-3xl lg:h-[30rem]">
          <Image
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=85"
            alt="Traveller looking out over a scenic valley"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>

        <div>
          <Reveal as="p" className="eyebrow">
            Why travellers call us
          </Reveal>
          <Reveal as="h2" delay={0.05} className="text-[clamp(1.7rem,4vw,2.8rem)] font-semibold leading-tight">
            Clear options, quick replies, and trips planned around real families.
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-5">
            {facts.map((f, i) => (
              <Reveal key={f.strong} delay={0.1 + i * 0.06}>
                <div className="rounded-2xl bg-sand-100 p-5 ring-1 ring-ink/5">
                  <div className="font-display text-xl font-semibold text-ink">{f.strong}</div>
                  <div className="mt-1 text-sm text-ink-muted">{f.span}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
