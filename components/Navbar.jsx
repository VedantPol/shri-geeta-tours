"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site, wa } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`shell flex items-center justify-between rounded-full border px-4 py-2.5 transition-colors duration-300 sm:px-6 ${
          scrolled
            ? "border-ink/10 bg-sand-50/85 shadow-[0_8px_30px_rgba(22,17,13,0.08)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className={`group flex items-center gap-2.5 font-display text-lg font-semibold transition-colors duration-300 ${
            scrolled ? "text-ink" : "text-sand-50"
          }`}
          aria-label={`${site.legalName} home`}
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-white/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image src="/logo-mark.png" alt={`${site.legalName} logo`} fill className="object-cover" sizes="40px" priority />
          </span>
          <span>{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-green-brand after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-ink/75 hover:text-ink"
                  : "text-sand-50/85 hover:text-sand-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={wa()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hidden h-10 px-5 py-0 text-sm sm:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className={`grid h-10 w-10 cursor-pointer place-items-center rounded-full border transition-colors md:hidden ${
              scrolled
                ? "border-ink/10 text-ink hover:bg-ink/5"
                : "border-sand-50/30 text-sand-50 hover:bg-sand-50/10"
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="shell mt-2 flex flex-col gap-1 rounded-3xl border border-ink/10 bg-sand-50/95 p-4 shadow-xl backdrop-blur-md md:hidden"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={wa()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              Chat on WhatsApp
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
