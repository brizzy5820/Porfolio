import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Conversion-Driven E-Commerce",
    description:
      "A premium storefront optimized for speed, trust, and checkout completion. We redesigned the product narrative and reduced purchase friction from first click to payment.",
    videoSrc: "/videos/ecommerce.mp4",
    tech: ["React", "Node.js", "Tailwind", "Stripe"],
  },
  {
    id: 2,
    title: "Executive Analytics Suite",
    description:
      "A data experience for decision-makers. Complex reporting was transformed into clear, actionable dashboards with fluid transitions and context-rich visual hierarchy.",
    videoSrc: "/videos/dashboard.mp4",
    tech: ["Vue", "D3.js", "Firebase", "Design System"],
  },
  {
    id: 3,
    title: "Community Mobile Platform",
    description:
      "A social product with polished micro-interactions and real-time messaging that kept users engaged longer while maintaining smooth performance across devices.",
    videoSrc: "/videos/mobile.mp4",
    tech: ["React Native", "GraphQL", "Framer Motion"],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Selected work</p>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white text-balance">
            Projects built for <span className="text-primary">results and retention</span>
          </h2>
        </motion.div>

        <div className="flex gap-3">
          <button onClick={prevSlide} className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextSlide} className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors backdrop-blur-md">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, rotateX: -5 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {projects[currentIndex].videoSrc ? (
              <video src={projects[currentIndex].videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 mix-blend-screen" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white/20">
                <div className="w-10 h-10 border-2 border-primary/50 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="font-mono text-sm uppercase tracking-widest">Video Loading...</p>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-12">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="max-w-3xl">
                <div className="flex flex-wrap gap-2 mb-5">
                  {projects[currentIndex].tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest font-mono px-3 py-1.5 bg-primary/20 text-blue-300 border border-primary/30 rounded-full backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-white mb-3">{projects[currentIndex].title}</h3>
                <p className="text-white/65 text-sm sm:text-base md:text-lg leading-relaxed mb-7 max-w-2xl font-light">{projects[currentIndex].description}</p>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-5 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                  <button className="flex items-center gap-2 px-5 py-3 bg-black/50 border border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/10 backdrop-blur-md transition-colors">
                    <Github className="w-4 h-4" /> Source Code
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "w-16 bg-primary" : "w-4 bg-white/20 hover:bg-white/40"}`}
            aria-label={`View ${project.title}`}
          />
        ))}
      </div>
    </div>
  );
}
