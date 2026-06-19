"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { wa, stats } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef(null);

  // Honour reduced-motion: pause the background video and show the poster frame.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden pt-28 pb-14 sm:pb-16">
      {/* Background: looping aerial travel video with an instant poster frame. */}
      <div className="absolute inset-0 -z-10 bg-ink">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/hero-720.mp4" type="video/mp4" />
        </video>
        {/* Slightly stronger gradient now that the floating cards are gone. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/80" />
      </div>

      <div className="shell relative z-20 text-sand-50">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="kicker !text-amber-soft"
        >
          Mumbai based travel desk
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mt-4 max-w-[18ch] text-balance text-[clamp(2.3rem,9vw,5.5rem)] font-semibold leading-[1.02]"
        >
          Experience the World,{" "}
          <span className="italic text-amber-soft">Planned Personally</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease }}
          className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-sand-100/90 sm:max-w-xl sm:text-lg"
        >
          Curated holidays for families, groups, pilgrimages and business travellers —
          honest quotes and quick replies on WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a href={wa()} target="_blank" rel="noreferrer" className="btn btn-light w-full sm:w-auto">
            Book a trip
          </a>
          <a
            href="/#packages"
            className="btn btn-ghost w-full border-sand-50/40 text-sand-50 hover:border-sand-50 hover:bg-sand-50/10 sm:w-auto"
          >
            View packages <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46, ease }}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-sand-50/20 pt-7 sm:mt-14"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl font-semibold sm:text-4xl">{s.value}</dt>
              <dd className="mt-0.5 text-xs text-sand-100/80 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
