import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { Phone, MessageCircle } from "lucide-react";
import { site, wa } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact SHRI GEETA TOURS AND TRAVELS on WhatsApp for domestic and international tour packages from Mumbai.",
};

const steps = [
  { n: "01", title: "Share your idea", copy: "Destination, dates, people count, hotel preference and budget range." },
  { n: "02", title: "Get package options", copy: "Receive practical choices with stays, transfers, sightseeing and notes." },
  { n: "03", title: "Confirm on WhatsApp", copy: "Keep all details in one simple conversation for quick coordination." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero */}
        <section className="section pb-12">
          <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal as="p" className="eyebrow">
                Contact us
              </Reveal>
              <Reveal as="h1" delay={0.05} className="text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-tight">
                Tell us where you want to go. We&apos;ll help with the route.
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-5 max-w-lg text-lg text-ink-soft">
                Send your travel dates, number of travellers, preferred destination and budget.
                WhatsApp is the fastest way to receive package options.
              </Reveal>
              <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
                <a href={wa()} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <MessageCircle size={16} /> Message on WhatsApp
                </a>
                <a href={`tel:${site.phoneRaw}`} className="btn btn-ghost">
                  <Phone size={16} /> Call {site.phone}
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="relative h-72 overflow-hidden rounded-3xl lg:h-[26rem]">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85"
                alt="Travellers planning a trip with a map"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </section>

        {/* Form + direct contact */}
        <section className="section pt-0">
          <div className="shell grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="flex h-full flex-col gap-5 rounded-3xl bg-ink p-7 text-sand-100">
                <h2 className="font-display text-2xl text-sand-50">Direct contact</h2>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-center justify-between rounded-2xl bg-sand-50/[0.06] px-5 py-4 transition-colors hover:bg-sand-50/10"
                >
                  <span className="text-sm text-sand-100/70">Phone</span>
                  <strong className="text-sand-50">{site.phone}</strong>
                </a>
                <a
                  href={wa()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-sand-50/[0.06] px-5 py-4 transition-colors hover:bg-sand-50/10"
                >
                  <span className="text-sm text-sand-100/70">WhatsApp</span>
                  <strong className="text-green-soft">Chat now</strong>
                </a>
                <div className="mt-auto rounded-2xl border border-sand-50/10 p-5">
                  <h3 className="font-display text-lg text-sand-50">For faster quotes</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-100/70">
                    Keep destination, dates, number of people and budget range ready before messaging.
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="section bg-sand-100">
          <div className="shell grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <article className="rounded-3xl bg-sand-50 p-7 ring-1 ring-ink/5">
                  <span className="font-display text-3xl text-green-brand">{s.n}</span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
