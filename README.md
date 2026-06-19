# Shri Geeta Tours & Travels

Premium, animated marketing website for **SHRI GEETA TOURS AND TRAVELS** — a Mumbai-based
travel agency — with a WhatsApp-first enquiry flow.

Built to load fast on every device with elegant scroll and parallax animations.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [lucide-react](https://lucide.dev/) for icons
- `next/image` for optimized, responsive imagery
- `next/font` for self-hosted Google Fonts (Playfair Display + Inter)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Editing content

All business content (phone, WhatsApp number, packages, destinations, testimonials,
FAQs, etc.) lives in a single file:

```
lib/site.js
```

Update values there and they propagate across the whole site. To change the WhatsApp
number, edit `whatsapp` and `phoneRaw` / `phone`.

## Deploying

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — the Next.js preset is
   auto-detected, no configuration needed.
3. Add your custom domain in **Vercel → Project → Settings → Domains** and point your
   GoDaddy DNS at Vercel (A record `76.76.21.21` for the apex, CNAME
   `cname.vercel-dns.com` for `www`).

## Accessibility & performance

- Respects `prefers-reduced-motion`
- Semantic HTML, labelled form fields, visible focus states
- Responsive at 375 / 768 / 1024 / 1440px
- AVIF/WebP image delivery with lazy loading
