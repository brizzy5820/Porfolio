import { motion } from "framer-motion";
import { Send, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2.2rem] p-6 sm:p-8 md:p-14 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-14 relative z-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Start a project</p>
        <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-4 text-balance">
          Let&apos;s build something your clients <span className="text-primary">instantly trust</span>
        </h2>
        <p className="text-white/55 text-base md:text-lg font-light max-w-2xl">
          Share your goals, timeline, and vision. I&apos;ll respond with a clear plan focused on outcomes—not just aesthetics.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 md:gap-14 relative z-10">
        <motion.div
          className="lg:col-span-2 space-y-7"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Send, title: "Email", value: "hello@hypertech.dev" },
            { icon: MapPin, title: "Location", value: "San Francisco, CA · Remote worldwide" },
            { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-white font-medium mb-1 font-display tracking-wide">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.value}</p>
                </div>
              </div>
            );
          })}

          <button className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-primary/50 transition-colors">
            Prefer WhatsApp? Let&apos;s chat
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

        <motion.form
          className="lg:col-span-3 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="bg-black/50 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-primary focus:bg-white/5 transition-all w-full" />
            <input type="email" placeholder="Business email" className="bg-black/50 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-primary focus:bg-white/5 transition-all w-full" />
          </div>
          <input type="text" placeholder="Project type (website, dashboard, app...)" className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
          <textarea rows={5} placeholder="Tell me what success looks like for this project." className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-primary focus:bg-white/5 transition-all resize-none" />
          <button className="w-full py-4 bg-primary text-white font-medium rounded-2xl hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(18,96,204,0.3)] hover:shadow-[0_0_40px_rgba(18,96,204,0.5)] tracking-wide">
            Send project brief
          </button>
        </motion.form>
      </div>
    </div>
  );
}
