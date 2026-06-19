"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const active = testimonials[i];

  return (
    <section className="section bg-sand-50">
      <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-80 overflow-hidden rounded-3xl lg:h-[28rem]"
        >
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
            alt="Travellers at a mountain viewpoint"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <div>
          <p className="eyebrow">Testimonials</p>
          <h2 className="text-[clamp(1.7rem,4vw,2.6rem)] font-semibold leading-tight">
            Words from travellers who trusted the plan.
          </h2>

          <div className="mt-8 min-h-[14rem] rounded-3xl bg-sand-100 p-7 ring-1 ring-ink/5">
            <div className="flex gap-1 text-amber-brand" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="mt-4 font-display text-lg italic leading-relaxed text-ink-soft sm:text-xl">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-ink">{active.name}</span>
                  <span className="text-ink-muted"> · {active.place}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex gap-2">
            {testimonials.map((_, d) => (
              <button
                key={d}
                onClick={() => setI(d)}
                aria-label={`Show testimonial ${d + 1}`}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                  d === i ? "w-8 bg-amber-brand" : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
