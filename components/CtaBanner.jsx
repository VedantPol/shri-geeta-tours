import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { wa } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="section bg-sand-50">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] px-6 py-20 text-center text-sand-50 sm:px-12 sm:py-28">
            <Image
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"
              alt="Road winding through a mountain landscape"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/60" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="kicker justify-center !text-amber-soft">Ready when you are</p>
              <h2 className="mt-4 text-[clamp(1.9rem,5vw,3.4rem)] font-semibold leading-tight">
                Tell us the destination. We&apos;ll shape the journey.
              </h2>
              <a
                href={wa("Hi, I want to plan a tour. Please share package options.")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light mt-8"
              >
                Start on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
