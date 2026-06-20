import { marqueeItems } from "@/lib/site";

export default function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-sand-50 sm:py-5">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap will-change-transform motion-reduce:animate-none sm:gap-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg italic sm:gap-10 sm:text-2xl">
            {item}
            <span className="text-green-soft" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
