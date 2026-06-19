"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { wa } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={wa("Hi SHRI GEETA TOURS AND TRAVELS, I need help planning a trip.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
}
