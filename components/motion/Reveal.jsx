"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Fades + lifts children into view once.
 * Honours prefers-reduced-motion automatically.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 22,
  className = "",
  once = true,
  amount = 0.15,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      style={{ willChange: "transform, opacity" }}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      // Expo-out easing for a soft, premium settle.
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
