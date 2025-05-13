import Credits from "./components/Credits";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Companies from "./sections/Companies";
import CTA from "./sections/CTA";
import Hero from "./sections/Hero";
import InfoSection from "./sections/InfoSection";
import TestimonialSection from "./sections/TestimonialSection";

export default function Home() {
  return (
    <main className="max-w-[1260px] mx-auto px-5 py-8 md:py-0">
      <Navbar />
      <Hero />
      <Companies />
      <InfoSection />
      <TestimonialSection />
      <CTA />
      <Footer />
      <Credits />
    </main>
  );
}
