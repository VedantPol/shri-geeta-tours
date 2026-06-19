import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
import Story from "@/components/Story";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phoneRaw,
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experiences />
        <Destinations />
        <Packages />
        <Story />
        <WhyUs />
        <Testimonials />
        <Blogs />
        <Faq />
        <Gallery />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
