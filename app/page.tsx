import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Destinations } from "@/components/sections/Destinations";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Services />
      <Destinations />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}
