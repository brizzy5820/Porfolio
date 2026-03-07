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

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[currentIndex];

  return (
    <section className="w-full max-w-7xl mx-auto  text-white">

      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
              <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-white/20"></div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Selected works
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Projects built for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              performance
            </span>
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >

          {/* Video */}
          <div className="w-full aspect-video bg-black">
            {project.videoSrc ? (
              <video
                src={project.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/30">
                Loading video...
              </div>
            )}
          </div>
            {/* Dim Overlay */}
              <div className="absolute inset-0 bg-black/35"></div>
            
          {/* Content */}
          <div className="p-6 md:p-10">

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5 hidden">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-4xl font-bold mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-3xl mb-7">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </button>

              <button className="flex items-center hidden gap-2 px-5 py-3 border border-white/20 rounded-full text-sm font-semibold hover:bg-white/10 transition">
                <Github className="w-4 h-4" />
                Source Code
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-10">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-16 bg-cyan-400"
                : "w-4 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}