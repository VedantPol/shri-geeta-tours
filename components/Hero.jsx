"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { wa, stats } from "@/lib/site";

const floatCards = [
  {
    src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80",
    alt: "Kashmir houseboat",
    className: "left-[4%] top-[20%] w-28 sm:w-36 lg:w-44",
    depth: 1.1,
  },
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
    alt: "Taj Mahal at sunrise",
    className: "right-[5%] top-[16%] w-24 sm:w-32 lg:w-40",
    depth: -0.9,
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    alt: "Dubai skyline",
    className: "right-[10%] bottom-[14%] w-28 sm:w-36 lg:w-44",
    depth: 1.4,
  },
  {
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80",
    alt: "Rajasthan palace",
    className: "left-[7%] bottom-[12%] w-24 sm:w-32 lg:w-40 hidden sm:block",
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
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-10 overflow-hidden rounded-2xl border border-white/30 shadow-2xl ${card.className}`}
    >
      <Image
        src={card.src}
        alt={card.alt}
        width={300}
        height={380}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 30vw, 180px"
      />
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const mvx = useMotionValue(0);
  const mvy = useMotionValue(0);
  const mx = useSpring(mvx, { stiffness: 60, damping: 18 });
  const my = useSpring(mvy, { stiffness: 60, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const px = (e.clientX / window.innerWidth - 0.5) * 36;
    const py = (e.clientY / window.innerHeight - 0.5) * 36;
    mvx.set(px);
    mvy.set(py);
  };

  return (
    <section
      onPointerMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80"
          alt="Turquoise ocean and white sand beach seen from above"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70" />
      </div>

      {!reduce && floatCards.map((card) => <FloatCard key={card.alt} card={card} mx={mx} my={my} />)}

      <div className="shell relative z-20 text-sand-50">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="kicker !text-amber-soft"
        >
          Mumbai based travel desk
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl text-balance text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.98]"
        >
          Experience the World,
          <br />
          <span className="italic text-amber-soft">Planned Personally</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-sand-100/90 sm:text-lg"
        >
          Curated holidays for families, groups, pilgrimages and business travellers —
          with honest quotes and quick replies on WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href={wa()} target="_blank" rel="noreferrer" className="btn btn-light">
            Book a trip
          </a>
          <a
            href="/#packages"
            className="btn btn-ghost border-sand-50/40 text-sand-50 hover:border-sand-50 hover:bg-sand-50/10"
          >
            View packages <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-sand-50/20 pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-semibold sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-sand-100/80">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
