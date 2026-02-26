import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-primary font-mono tracking-widest text-sm md:text-base mb-6 uppercase flex items-center gap-4">
          <span className="w-8 h-[1px] bg-primary block"></span>
          Hypertech / Full Stack Developer
        </h3>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[1.05] text-white">
          I CREATE IT <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">JUST HOW YOU</span><br/>
          IMAGINE IT
        </h1>
        <p className="mt-8 text-lg text-white/60 max-w-2xl font-light leading-relaxed">
          Specializing in building exceptional digital experiences. I bring complex ideas to life through modern web technologies and seamless user interactions.
        </p>
        
        <div className="mt-12 flex gap-4">
          <button className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-[0_0_30px_rgba(18,96,204,0.4)] tracking-wide">
            View Projects
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-md tracking-wide">
            Contact Me
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-32 pt-12 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8 font-mono">Technologies I Use</h2>
        <div className="flex flex-wrap gap-4">
          {["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS", "Node.js", "Framer Motion", "TypeScript"].map((tech) => (
            <div key={tech} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default backdrop-blur-sm">
              {tech}
            </div>
          ))}
          <div className="px-5 py-2.5 text-sm text-white/40 italic flex items-center">
            and more...
          </div>
        </div>
      </motion.div>
    </div>
  );
}
