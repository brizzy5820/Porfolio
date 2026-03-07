import { motion } from "framer-motion";
import { Send, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full  md:px-10 py-24 flex justify-center relative">

      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[10%] w-[420px] h-[420px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-[420px] h-[420px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-[2.2rem] p-6 sm:p-10 md:p-14 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.6)]"
      >

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-xs uppercase pt-4 tracking-[0.35em] text-cyan-400 mb-3">
            Start a project
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
            Let’s build something your clients{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              instantly trust
            </span>
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            Share your goals, timeline, and vision. I’ll respond with a clear
            strategy focused on outcomes — not just aesthetics.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 md:gap-16">

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Send, title: "Email", value: "egbeyemiboluwatife@gmail.com" },
              { icon: MapPin, title: "Location", value: "Remote · Worldwide" },
              { icon: Phone, title: "Phone", value: "+234 8106146952" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-white/55 text-sm">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <a href="https://wa.me/2348106146952?text=Hello%20Dev%20Bolu" target='blank' className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 hover:text-white hover:border-cyan-400/50 transition-all">
              Prefer WhatsApp? Let’s chat
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all w-full"
              />

              <input
                type="email"
                placeholder="Business email"
                className="bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Project type (website, dashboard, app...)"
              className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all"
            />

            <textarea
              rows={5}
              placeholder="Tell me what success looks like for this project."
              className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all resize-none"
            />

            <button className="w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:opacity-90 transition-all shadow-[0_0_40px_rgba(59,130,246,0.35)] tracking-wide">
              Send project brief
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}