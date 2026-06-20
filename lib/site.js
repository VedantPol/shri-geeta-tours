// Single source of truth for all business content.
// Update phone / WhatsApp / packages here and it propagates across the site.

export const site = {
  name: "Shri Geeta Tours & Travels",
  shortName: "Shri Geeta",
  legalName: "SHRI GEETA TOURS AND TRAVELS",
  tagline: "Experience the World, Planned Personally",
  city: "Mumbai, India",
  description:
    "SHRI GEETA TOURS AND TRAVELS creates memorable domestic and international trips for families, groups, pilgrimages and corporates — with a WhatsApp-first booking flow.",
  url: "https://www.srigeetatourssandtravels.com",
  phone: "+91 98201 12290",
  phoneRaw: "+919820112290",
  whatsapp: "919820112290",
  email: "hello@shrigeetatours.com",
};

// Builds a WhatsApp deep link with a pre-filled message.
export function wa(message = "Hi SHRI GEETA TOURS AND TRAVELS, I want to plan a trip.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Packages", href: "/#packages" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "4.9", label: "Happy traveller rating" },
  { value: "50k+", label: "Trips planned" },
  { value: "24/7", label: "WhatsApp support" },
];

export const marqueeItems = [
  "Domestic Tours",
  "International Holidays",
  "Hotels & Resorts",
  "Airport Transfers",
  "Visa Guidance",
  "Pilgrimage Packages",
  "Corporate Travel",
  "Family Trips",
];

export const experiences = [
  {
    n: "01",
    title: "Kashmir & Hill Holidays",
    copy: "Scenic routes, handpicked hotels, sightseeing, transfers and family-friendly pacing.",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
    alt: "Snow-capped mountains of Kashmir",
    large: true,
  },
  {
    n: "02",
    title: "Beach Breaks",
    copy: "Goa, Maldives, Bali and Thailand — relaxed couple and family itineraries.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85",
    alt: "Palm-lined tropical beach",
  },
  {
    n: "03",
    title: "International Tours",
    copy: "Dubai, Singapore, Thailand and Europe — visas, stays and transfers handled.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=85",
    alt: "Singapore skyline at night",
  },
];

export const destinations = [
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=85",
    alt: "Snow-capped mountains and green meadow in Kashmir",
  },
  {
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=85",
    alt: "Turquoise sea and island",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",
    alt: "Dubai skyline",
  },
  {
    name: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85",
    alt: "Rajasthan palace",
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85",
    alt: "Overwater villas in the Maldives",
  },
  {
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85",
    alt: "Gardens by the Bay, Singapore",
  },
];

export const packages = [
  {
    duration: "5 Days / 4 Nights",
    title: "Kashmir Family Holiday",
    copy: "Srinagar, Gulmarg, Pahalgam — hotel stay, sightseeing and private transfers.",
    price: "from ₹24,999",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=85",
    alt: "Houseboat on Dal Lake, Kashmir",
  },
  {
    duration: "4 Days / 3 Nights",
    title: "Goa Leisure Break",
    copy: "Beach stay, airport pickup, sightseeing, water activities and family plans.",
    price: "from ₹14,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    alt: "Beach in Goa",
  },
  {
    duration: "6 Days / 5 Nights",
    title: "Dubai Holiday",
    copy: "Visa help, hotels, city tour, desert safari, transfers and shopping time.",
    price: "from ₹49,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",
    alt: "Dubai skyline at dusk",
  },
];

export const whyUs = [
  {
    title: "Personal Planning",
    copy: "Trips shaped around your budget, pace, travellers and comfort level.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=700&q=85",
    alt: "Tent under a starry night sky",
  },
  {
    title: "Local Support",
    copy: "Helpful coordination for hotels, transfers, sightseeing and ground support.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=700&q=85",
    alt: "Friends sharing food on a trip",
  },
  {
    title: "Group Friendly",
    copy: "Flexible options for families, office groups, senior citizens and pilgrims.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=85",
    alt: "Group of travellers outdoors",
  },
  {
    title: "Fast WhatsApp Help",
    copy: "Clear quotes, quick replies and an easy booking conversation on WhatsApp.",
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=700&q=85",
    alt: "Airport terminal travel view",
  },
];

export const testimonials = [
  {
    quote:
      "The package was clear, the hotel options were honest, and every transfer was coordinated properly. WhatsApp replies made the whole trip effortless.",
    name: "Priya & family",
    place: "Kashmir trip · Mumbai",
  },
  {
    quote:
      "We were a group of 14 and they handled everything — stays, buses, sightseeing. Genuinely the easiest holiday we have booked.",
    name: "Rajesh M.",
    place: "Group tour · Thane",
  },
  {
    quote:
      "Quick quotes, no pushy upselling, and real help with our Dubai visa. Will book again for our next family trip.",
    name: "Sana K.",
    place: "Dubai holiday · Navi Mumbai",
  },
];

export const blogs = [
  {
    tag: "Family Trips",
    title: "How to choose a relaxed holiday package for all age groups",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    alt: "Resort pool surrounded by hills",
  },
  {
    tag: "International",
    title: "Documents and planning details to keep ready before booking",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=85",
    alt: "Canal city travel view",
  },
  {
    tag: "Pilgrimage",
    title: "Planning a comfortable pilgrimage tour for senior travellers",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    alt: "Temple architecture",
  },
];

export const faqs = [
  {
    q: "How do I book a trip?",
    a: "Tap any WhatsApp button and share your destination, dates, number of travellers and budget. We reply with practical package options.",
  },
  {
    q: "Do you arrange domestic and international tours?",
    a: "Yes. We plan India holidays, pilgrimages, group tours, corporate travel and international packages across popular destinations.",
  },
  {
    q: "Can I ask only for hotels or transport?",
    a: "Absolutely. You can request only hotels, vehicles, transfers, sightseeing, or full end-to-end package planning.",
  },
  {
    q: "How are payments handled?",
    a: "We share a clear quote first. Payments are confirmed only after you approve the itinerary, so there are no surprises.",
  },
  {
    q: "Do you help with visas?",
    a: "We provide visa guidance and documentation support for selected countries such as Dubai, Singapore and Thailand.",
  },
];

export const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=85",
    alt: "Mountain road at sunset",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=700&q=85",
    alt: "Temple and tropical landscape",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=85",
    alt: "Taj Mahal travel view",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=700&q=85",
    alt: "Traveller looking over a valley",
  },
];
