import Link from "next/link";
import { Plane, Phone, MessageCircle, MapPin } from "lucide-react";
import { site, nav, wa } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand-100">
      <div className="shell py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-semibold text-sand-50">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-brand text-sand-50">
                <Plane size={18} strokeWidth={2} />
              </span>
              {site.shortName}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-100/70">
              {site.description}
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-sand-100/70">
              <MapPin size={16} className="text-amber-soft" /> {site.city}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-sand-50">Pages</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sand-100/70 transition-colors hover:text-amber-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-sand-50">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2 text-sand-100/70 transition-colors hover:text-amber-soft">
                  <Phone size={16} /> {site.phone}
                </a>
              </li>
              <li>
                <a href={wa()} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sand-100/70 transition-colors hover:text-amber-soft">
                  <MessageCircle size={16} /> WhatsApp chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sand-50/10 pt-6 text-xs text-sand-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Crafted for memorable journeys.</p>
        </div>
      </div>
    </footer>
  );
}
