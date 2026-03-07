import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Github, X, Linkedin, ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-[#050505] border-t border-white/50 pt-20 pb-10 px-6 md:px-10 overflow-hidden">
      {/* Subtle background glow for footer */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Section - Large CTA */}
        <div className="flex flex-col md:flex-row items-start items-center justify-between  gap-8 pb-16 border-b border-white/10">
          <div className="max-w-2xl ">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-white/60 text-lg">
              Let's create an experience that stands out and delivers results.
            </p>
          </div>
          
          <a href="https://wa.me/2348106146952?text=Hello%20Dev%20Bolu" className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-medium hover:bg-cyan-50 transition-colors cursor-pointer">
            Start a conversation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          
          {/* Brand & Description */}
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="inline-block">
              <h3 className="text-2xl font-bold tracking-wider text-white flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-primary" />
                DEV BOLU
              </h3>
            </a>
            <p className="text-white/50 leading-relaxed max-w-sm">
              Crafting premium digital experiences that prioritize modern design, performance, and memorable user interactions.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://x.com/DaveLegend01?t=Z4eNmUd3Rh6iygDJ9cVjwA&s=09" target='blank'  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all">
                <img src="https://cdn.simpleicons.org/x/FFFFFFB3"           className="w-5 h-5 sm:w-6 sm:h-6 object-contain "  alt="" />
              </a>
              <a href="https://github.com/brizzy5820" target='blank'className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-widest text-white/80">Navigation</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-colors" /> Work</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-colors" /> Services</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-colors" /> About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-colors" /> Process</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {currentYear} Hypertech. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed with</span>
            <span className="text-red-500">💜</span>
            <span>in standard timezone</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
