import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import IntroAnimation from "@/components/IntroAnimation";

const sectionIds = ["home", "projects", "about", "contact"] as const;

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 },
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans flex overflow-hidden selection:bg-primary selection:text-white">
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 relative h-screen overflow-y-auto overflow-x-hidden scroll-smooth bg-[#050505]">
        <div className="max-w-6xl mx-auto px-5 pt-28 pb-14 sm:px-8 md:px-12 md:py-20 flex flex-col gap-24 md:gap-32">
          <section id="home" className="min-h-[80vh] flex items-center"><Hero /></section>
          <section id="projects" className="min-h-screen pt-8 md:pt-20"><Projects /></section>
          <section id="about" className="min-h-screen pt-8 md:pt-20"><About /></section>
          <section id="contact" className="min-h-[80vh] pt-8 md:pt-20 pb-20 md:pb-32"><Contact /></section>
        </div>
      </main>
    </div>
  );
}
