import { motion } from "framer-motion";
import { Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-4">LET'S WORK <span className="text-primary">TOGETHER</span></h2>
        <p className="text-white/50 text-lg font-light">Have a project in mind? Reach out and let's make it happen.</p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-16 relative z-10">
        <motion.div 
          className="lg:col-span-2 space-y-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <Send className="w-6 h-6" />
            </div>
            <div className="pt-1">
              <h4 className="text-white font-medium mb-1 font-display tracking-wide">Email</h4>
              <p className="text-white/50 text-sm">hello@hypertech.dev</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="pt-1">
              <h4 className="text-white font-medium mb-1 font-display tracking-wide">Location</h4>
              <p className="text-white/50 text-sm">San Francisco, CA<br/>Available Remote</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="pt-1">
              <h4 className="text-white font-medium mb-1 font-display tracking-wide">Phone</h4>
              <p className="text-white/50 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="lg:col-span-3 space-y-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-2 gap-5">
            <input type="text" placeholder="Name" className="bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:bg-white/5 transition-all w-full" />
            <input type="email" placeholder="Email" className="bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:bg-white/5 transition-all w-full" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:bg-white/5 transition-all" />
          <textarea rows={5} placeholder="Message" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:bg-white/5 transition-all resize-none"></textarea>
          <button className="w-full py-5 bg-primary text-white font-medium rounded-2xl hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(18,96,204,0.3)] hover:shadow-[0_0_40px_rgba(18,96,204,0.5)] tracking-wide">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
