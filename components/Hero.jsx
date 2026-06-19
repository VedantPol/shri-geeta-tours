"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { wa, stats } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1];

const floatCards = [
  {
    src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=500&q=75",
    alt: "Kashmir houseboat",
    // hidden on the smallest screens to keep the mobile hero clean
    className: "left-[3%] top-[22%] w-24 lg:w-40 hidden sm:block",
    depth: 1.1,
  },
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=75",
    alt: "Taj Mahal at sunrise",
    className: "right-[4%] top-[14%] w-24 sm:w-28 lg:w-36",
    depth: -0.9,
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=75",
    alt: "Dubai skyline",
    className: "right-[8%] bottom-[16%] w-24 sm:w-32 lg:w-40",
    depth: 1.4,
  },
  {
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=75",
    alt: "Rajasthan palace",
    className: "left-[6%] bottom-[12%] w-28 lg:w-36 hidden sm:block",
    depth: -1.2,
  },
];

function FloatCard({ card, mx, my }) {
  const x = useTransform(mx, (v) => v * card.depth);
  const y = useTransform(my, (v) => v * card.depth);
  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.45, ease }}
      className={`absolute z-10 overflow-hidden rounded-2xl border border-white/25 shadow-2xl ${card.className}`}
    >
      <Image
        src={card.src}
        alt={card.alt}
        width={280}
        height={350}
        className="h-full w-full object-cover"
        sizes="(max-width: 1024px) 25vw, 160px"
      />
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [canParallax, setCanParallax] = useState(false);
  const videoRef = useRef(null);

  // Honour reduced-motion: pause the background video and show the poster frame.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  const mvx = useMotionValue(0);
  const mvy = useMotionValue(0);
  const mx = useSpring(mvx, { stiffness: 50, damping: 20 });
  const my = useSpring(mvy, { stiffness: 50, damping: 20 });

  // Parallax only on devices with a precise hovering pointer (i.e. not touch).
  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  const onMove = (e) => {
    if (!canParallax) return;
    mvx.set((e.clientX / window.innerWidth - 0.5) * 30);
    mvy.set((e.clientY / window.innerHeight - 0.5) * 30);
  };

  return (
    <section
      onPointerMove={onMove}
      className="relative flex min-h-[90svh] items-center overflow-hidden pt-28 pb-14 sm:pb-16"
    >
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
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/75" />
      </div>

      {!reduce &&
        floatCards.map((card) => <FloatCard key={card.alt} card={card} mx={mx} my={my} />)}

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
