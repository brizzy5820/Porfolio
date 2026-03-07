import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import IntroAnimation from "@/components/IntroAnimation";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

const sectionIds = ["home", "projects", "about", "skills", "contact"] as const;

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // 🔥 Auto-detect active section on scroll
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
        { threshold: 0.4 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans flex overflow-hidden selection:bg-primary selection:text-white">
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-1 relative h-screen overflow-y-auto overflow-x-hidden scroll-smooth bg-[#050505]">
        <div className="max-w-6xl mx-auto px-0 pt-0  sm:px-8 md:px-0 md:py-0 flex flex-col gap-24 md:gap-32">
          
          <section
            id="home"
            className="min-h-[80vh] flex items-center"
          >
            <Hero />
          </section>
          
          <section
            id="about"
            className="min-h-screen pt-8 md:pt-20   px-0 sm:px-0"
          >
            <About />
          </section>

              <section
            className="min-h-screen pt-8 md:pt-20 md:px-20 px-6"
          >
            <Skills />
          </section>
          <section
            id="projects"
           className="min-h-screen pt-8 md:pt-20 md:px-20 px-6"
          >
            <Projects />
          </section>
          
      
          <section
            id="contact"
            className="min-h-screen pt-8 md:pt-20   px-0 sm:px-0"
          >
            <Contact />
          </section>
           <section
      
            className="min-h-[80vh] pt-8 md:pt-20 md:pb-32   px-5 sm:px-8"
          >
            <Footer />
          </section>
          <FloatingWhatsApp />
        </div>
      </main>
    </div>
  );
}