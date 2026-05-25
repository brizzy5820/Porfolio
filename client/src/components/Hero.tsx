import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Building Flexible Web Applications ",
    description:
      "Modern software systems built with scalable architecture to help your business offer fast and wide service.",
    image:
      "images/heroimg.avif",
  },
  {
    id: 2,
    title: "Designing Products That Convert",
    description:
      "Strategic UX, persuasive copy, and performance-driven development that transforms visitors into qualified clients.",
    image:
      "images/heroimg2.avif",
  },

  {
    id: 3,
    title: "Built For Growth",
    description:
      "From landing pages to dashboards — every interface is crafted to guide users toward meaningful action.",
    image:
      "images/heroimg3.avif",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [showScrollCue, setShowScrollCue] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContainer = heroRef.current?.closest("main");

    const handleInteraction = () => {
      setHasUserInteracted(true);
      setShowScrollCue(false);
    };

    scrollContainer?.addEventListener("scroll", handleInteraction, {
      passive: true,
    });
    window.addEventListener("wheel", handleInteraction, { passive: true });
    window.addEventListener("touchmove", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchmove", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (hasUserInteracted) return;

    const cueTimer = window.setTimeout(() => {
      setShowScrollCue(true);
    }, 8500);

    return () => window.clearTimeout(cueTimer);
  }, [hasUserInteracted]);

  const handleScrollNext = () => {
    setHasUserInteracted(true);
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[85vh] rounded-none overflow-hidden"
    >

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl px-5 md:px-16">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-6xl font-extrabold text-white leading-tight"
              >
                {slides[index].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
              >
                {slides[index].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex gap-4"
              >
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:scale-105 transition">
                  View Work
                </button>

              </motion.div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index
                ? "w-12 bg-white"
                : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>

      <AnimatePresence>
        {showScrollCue && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onClick={handleScrollNext}
            className="absolute bottom-20 right-5 md:right-10 flex items-center gap-3 rounded-full border border-white/15 bg-black/45 px-4 py-3 text-left text-white backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
            <span className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                Keep going
              </span>
              <span className="text-sm font-medium text-white">
                Scroll to explore more
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
