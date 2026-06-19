import Reveal from "@/components/motion/Reveal";

export default function About() {
  return (
    <section id="about" className="section bg-sand-50">
      <div className="shell">
        <Reveal as="p" className="eyebrow">
          About us
        </Reveal>
        <Reveal as="h2" delay={0.05} className="max-w-3xl text-[clamp(1.8rem,4.5vw,3.1rem)] font-semibold leading-tight">
          Meaningful travel experiences, planned with patient, personal care.
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-14">
          <Reveal as="p" delay={0.1} className="text-lg leading-relaxed text-ink-soft">
            Shri Geeta Tours & Travels helps you turn a rough travel idea into a clear itinerary —
            hotels, transfers, sightseeing, flight guidance, visa support and local coordination,
            all handled for you.
          </Reveal>
          <Reveal as="p" delay={0.18} className="text-lg leading-relaxed text-ink-soft">
            Share your dates, budget, people count and destination. We shape the options and keep
            the whole booking conversation simple and quick through WhatsApp.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
