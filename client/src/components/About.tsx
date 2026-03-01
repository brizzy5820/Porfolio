import { motion } from "framer-motion";

const milestones = [
  { value: "7+", label: "Years building digital products" },
  { value: "80+", label: "Projects shipped across industries" },
  { value: "32%", label: "Average increase in lead conversion" },
  { value: "24h", label: "Fast feedback turnaround" },
];

export default function About() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-16 items-center">

      {/* Left Content */}
      <motion.div
        className="flex-1 space-y-7"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          About Hypertech
        </p>

        <h2 className="text-4xl md:text-5xl font-black font-display text-white leading-tight text-balance">
          I combine <span className="text-primary">strategy, motion, and message</span> to make brands unforgettable.
        </h2>

        <div className="space-y-5 text-white/70 leading-relaxed text-base md:text-lg font-light max-w-2xl">
          <p>
            Great websites are more than visuals. They should communicate trust in seconds,
            remove friction from every step, and guide visitors toward confident decisions.
          </p>
          <p>
            From landing pages to full-scale platforms, I deliver end-to-end solutions with
            strong performance, premium interaction design, and persuasive copy that helps
            your business win better clients.
          </p>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {milestones.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h4 className="text-3xl font-black font-display text-white mb-2">
                {item.value}
              </h4>
              <p className="text-[11px] text-white/45 font-mono uppercase tracking-[0.22em]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="flex-1 w-full relative"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10">
          <img
            src="/images/profile.jpg"
            alt="Hypertech developer portrait"
            className="w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-primary/30" />
        </div>

        {/* Floating Quote Card */}
        <div className="absolute bottom-6 left-3 right-3 sm:left-8 sm:right-auto sm:max-w-[75%] p-5 rounded-2xl bg-black/65 border border-white/15 backdrop-blur-xl">
          <p className="text-white text-sm leading-relaxed">
            “Every project starts with one goal: make your audience feel they have
            found the right team before they even hit contact.”
          </p>
        </div>

        {/* Decorative Glow Elements */}
        <div className="absolute top-10 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] -z-10" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-[60px] -z-10" />
      </motion.div>
    </div>
  );
}