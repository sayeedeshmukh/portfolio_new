import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import IntroScreen from "@/components/IntroScreen";

export default function Home() {
  return (
    <main className="min-h-screen">
      <IntroScreen />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
