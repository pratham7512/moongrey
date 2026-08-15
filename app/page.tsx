import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";
import { Destinations } from "@/components/sections/Destinations";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";

export default async function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Packages limit={3} showViewAll />
      <Destinations />
      <Gallery />
      <Testimonials />
      <Community />
      <FAQ />
      <Blog />
      <Contact />
    </main>
  );
}
