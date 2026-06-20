"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin reading-progress bar fixed to the top of the viewport.
 * Pure transform (scaleX) animation — cheap and smooth on low-end Android.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-ink via-green-brand to-amber-brand"
      aria-hidden="true"
    />
  );
}
