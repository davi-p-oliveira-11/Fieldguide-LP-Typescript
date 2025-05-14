export const metadata = {
  metadataBase: new URL("https://fieldguide-ai.vercel.app/"),
  title: "Fieldguide – AI-Powered Audit Platform",
  description:
    "Fieldguide is an all-in-one platform transforming audit and advisory services with AI, automation, and collaboration.",
  keywords: [
    "audit platform",
    "AI audit",
    "Fieldguide",
    "audit automation",
    "compliance tools",
    "audit software",
    "CPA firm tools",
  ],
  openGraph: {
    title: "Fieldguide – AI-Powered Audit Platform",
    description:
      "Fieldguide revolutionizes how audit and advisory firms operate with cutting-edge automation and collaborative tools.",
    url: "https://fieldguide-ai.vercel.app/",
    siteName: "Fieldguide",
    images: [
      {
        url: "/images/fieldguide-og.png",
        width: 1200,
        height: 630,
        alt: "Fieldguide Platform Screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fieldguide – AI-Powered Audit Platform",
    description:
      "Fieldguide helps CPA firms save time and improve collaboration using AI and automation.",
    images: ["/images/fieldguide-og.png"],
  },
};

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
