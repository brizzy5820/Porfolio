import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-16 items-center">
      <motion.div 
        className="flex-1 space-y-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black font-display text-white">ABOUT <span className="text-primary">HYPERTECH</span></h2>
        <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
          <p>
            I am a passionate Full Stack Developer with an eye for detail and a drive to create polished, high-performing web applications. I bridge the gap between design and engineering, ensuring that every project not only looks stunning but is built on a solid, scalable foundation.
          </p>
          <p>
            With expertise across modern frontend frameworks and robust backend architectures, I take pride in delivering comprehensive solutions from concept to deployment. I thrive in environments where creativity meets complex problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 pt-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h4 className="text-4xl font-black font-display text-white mb-2">5+</h4>
            <p className="text-[11px] text-white/40 font-mono uppercase tracking-widest">Years Experience</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h4 className="text-4xl font-black font-display text-white mb-2">50+</h4>
            <p className="text-[11px] text-white/40 font-mono uppercase tracking-widest">Projects Completed</p>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="flex-1 w-full relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10">
          <img 
            src="/images/profile.jpg" 
            alt="Developer Profile" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-[60px] -z-10"></div>
      </motion.div>
    </div>
  );
}
