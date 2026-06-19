import { marqueeItems } from "@/lib/site";

export default function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="border-y border-ink/10 bg-ink py-5 text-sand-50">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-xl italic sm:text-2xl">
            {item}
            <span className="text-amber-soft" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
