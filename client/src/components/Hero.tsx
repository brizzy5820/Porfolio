import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,700px)] h-[min(80vw,700px)] bg-primary/20 blur-[170px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />

      <div>
        <motion.h3
          className="text-primary font-mono tracking-[0.3em] text-[11px] sm:text-xs md:text-sm mb-5 uppercase flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-8 h-[1px] bg-primary block" />
          Premium Web Experiences · Full Stack
        </motion.h3>

        <h1 className="text-[2.4rem] sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[0.95] text-white max-w-5xl text-balance">
          {["I DESIGN DIGITAL", "EXPERIENCES THAT", "TURN TRAFFIC INTO", "QUALIFIED CLIENTS"].map((line, index) => (
            <motion.span
              key={line}
              className={`block ${index === 3 ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-300 to-cyan-200" : ""}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-7 text-base sm:text-lg text-white/70 max-w-2xl font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          I help founders, agencies, and growing brands launch high-converting products with smart UX writing,
          strategic storytelling, and smooth motion that guides users toward action.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <button className="px-7 py-3.5 bg-primary text-white rounded-full font-medium hover:-translate-y-1 hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(18,96,204,0.4)] tracking-wide">
            See my case studies
          </button>
          <button className="px-7 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 hover:-translate-y-1 transition-all backdrop-blur-md tracking-wide">
            Book a discovery call
          </button>
        </motion.div>
      </div>

      <motion.div
        className="mt-18 sm:mt-24 pt-10 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xs uppercase tracking-[0.28em] text-white/40 mb-6 font-mono">Focused toolkit</h2>
        <div className="flex flex-wrap gap-3">
          {["TypeScript", "React", "Framer Motion", "Node.js", "Tailwind", "UX Copywriting", "SEO-ready architecture"].map((tech) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
              key={tech}
              className="px-4 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default backdrop-blur-sm"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
