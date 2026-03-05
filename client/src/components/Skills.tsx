import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    category: "Frontend",
    accent: "#61DAFB",
    description: "Core languages powering every layer of the stack.",
    items: [
         { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", level: 92 },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", level: 95 },
      { name: "TailwindCSS",     logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",    level: 92 },
      { name: "TypeScript",        logo: "https://cdn.simpleicons.org/typescript/3178C6",  level: 72 },
    ],
  },
  {
    category: "Backend",
    accent: "#C026D3",
    description: "Modern tooling for fast, scalable applications.",
    items: [
      { name: "Node.js",       logo: "https://cdn.simpleicons.org/nodedotjs/339933",       level: 96 },
      { name: "Firebase",     logo: "https://cdn.simpleicons.org/firebase/FFCA28",    level: 90 },
      { name: "Express.js",     logo: "https://cdn.simpleicons.org/express/C026D3",    level: 88 },
      
    ],
  },
  {
    category: "Services",
    accent: "#f0cc1a",
    description: "End-to-end engineering from architecture to delivery.",
    items: [      { name: "UI Engineering",      logo: "https://cdn.simpleicons.org/figma/f0cb11", level: 93 },
            { name: "System Architecture", logo: "https://cdn.simpleicons.org/consul/F7DF1E",  level: 90 },
             { name: "Performance Opt.",    logo: "https://cdn.simpleicons.org/lighthouse/cbac0f",      level: 91 },
      { name: "API Development",     logo: "https://cdn.simpleicons.org/fastapi/977f09",        level: 87 },
     
    ],
  },
];

function SkillRow({
  item,
  index,
  accent,
}: {
  item: { name: string; logo: string; level: number };
  index: number;
  accent: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 sm:gap-5 px-3 sm:px-5 py-4 rounded-xl cursor-default relative group"
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "transparent",
        transition: "background 0.2s",
      }}
    >
      {/* left accent bar */}
      <motion.div
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full origin-center hidden sm:block"
        style={{ background: accent }}
      />

      {/* logo */}
      <motion.div
        animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 6 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: hovered ? `0 0 20px 3px ${accent}30` : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        <img
          src={item.logo}
          alt={item.name}
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
          style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.6))" }}
        />
      </motion.div>

      {/* name + bar */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-white/90 tracking-wide font-outfit">{item.name}</span>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0.4 }}
            className="text-xs font-bold tabular-nums"
            style={{ color: accent }}
          >
            {item.level}%
          </motion.span>
        </div>
        <div
          className="h-1.5 sm:h-2 rounded-full overflow-hidden w-full relative"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${item.level}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.2, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 bottom-0 left-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${accent}88, ${accent})`,
              boxShadow: `0 0 10px ${accent}55`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  function goTo(i: number) {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  }

  const group = skills[active];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 30 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir * -30,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <section
      className="w-full py-0 sm:py-2   relative overflow-hidden "
      style={{ background: "#050505", color: "white" }}
    >
      {/* Subtle Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center center",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)"
        }}
      />

      {/* Ambient glow that follows active tab color */}
      <motion.div
        key={active}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] pointer-events-none rounded-full"
        style={{
          background: `radial-gradient(circle, ${group.accent}15 0%, transparent 60%)`,
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-white/20"></div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Expertise
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2
              className="text-3xl md:text-5xl font-inter font-bold tracking-tight leading-[1.1] font-outfit"
            >
              Technologies
              <br className="hidden sm:block" />
              <span className="text-white/40 md:ml-3">
                &amp; Services
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-[280px] leading-relaxed md:text-right font-medium">
              Modern engineering practices for real-world scalable products.
            </p>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-px mt-10 origin-left"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02), transparent)" }}
          />
        </motion.div>

        {/* Tab bar */}
        <div className="relative mb-8 sm:mb-12">
          {/* Scroll fade masks for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#050505] to-transparent z-10 sm:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#050505] to-transparent z-10 sm:hidden"></div>
          
          <div
            className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-2xl w-full overflow-x-auto hide-scrollbar snap-x"
            style={{ 
              background: "rgba(255,255,255,0.02)", 
              border: "1px solid rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)"
            }}
          >
            {skills.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative flex-1 min-w-[140px] sm:min-w-0 px-4 py-3 sm:py-3.5 rounded-xl text-[13px] sm:text-sm font-semibold tracking-wide transition-all duration-300 outline-none snap-start font-outfit"
                  style={{
                    color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ 
                        background: "rgba(255,255,255,0.06)", 
                        border: `1px solid ${s.accent}40`,
                        boxShadow: `inset 0 0 20px ${s.accent}10`
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-2.5 whitespace-nowrap">
                    {isActive && (
                      <motion.span
                        layoutId="tab-dot"
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                        style={{ background: s.accent, boxShadow: `0 0 8px ${s.accent}80` }}
                      />
                    )}
                    {s.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(160deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))",
            border: "1px solid rgba(255,255,255,0.06)",
            minHeight: 380,
            backdropFilter: "blur(20px)"
          }}
        >
          {/* top accent line */}
          <motion.div
            key={active + "-line"}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 right-0 h-[2px] origin-left z-20"
            style={{ background: `linear-gradient(90deg, ${group.accent}, ${group.accent}40, transparent)` }}
          />

          {/* corner glow inside panel */}
          <motion.div
            key={active + "-glow"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-50 z-0"
            style={{
              background: `radial-gradient(circle at top right, ${group.accent}15 0%, transparent 70%)`,
            }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              className="p-5 sm:p-8 md:p-10 relative z-10 h-full flex flex-col"
            >
              {/* panel header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 sm:mb-10 gap-6">
                <div className="max-w-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-2.5 h-2.5 rounded-sm rotate-45"
                      style={{ background: group.accent, boxShadow: `0 0 12px ${group.accent}80` }}
                    />
                    <span
                      className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em]"
                      style={{ color: group.accent }}
                    >
                      {group.category}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed sm:pl-5 font-medium">{group.description}</p>
                </div>

                {/* mini logo row */}
                <div className="flex gap-2.5 sm:gap-3 flex-shrink-0">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 200 }}
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center backdrop-blur-sm"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      title={item.name}
                    >
                      <img src={item.logo} alt={item.name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* divider */}
              <div className="h-px mb-6 sm:mb-8 w-full" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)" }} />

              {/* skill rows */}
              <div className="space-y-1 sm:space-y-2 flex-1 flex flex-col justify-center">
                {group.items.map((item, i) => (
                  <SkillRow key={item.name} item={item} index={i} accent={group.accent} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
