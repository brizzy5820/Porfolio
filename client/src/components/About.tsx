import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Cpu, Rocket, TrendingUp, Clock } from "lucide-react";

const metrics = [
  { value: "3+", label: "Years building digital products", icon: Rocket },
  { value: "25+", label: "Projects shipped across industries", icon: Cpu },
  {
    value: "32%",
    label: "Average increase in lead conversion",
    icon: TrendingUp,
  },
  { value: "24h", label: "Fast feedback turnaround", icon: Clock },
];

export default function About() {
  const [text] = useTypewriter({
    words: ["Hi I'm Egbeyemi Boluwatife"],
    loop: 0,
    typeSpeed: 110,
    deleteSpeed: 50,
  });

  return (
    <section className="w-full min-h-screen relative bg-[#000000] text-white px-6 md:px-20 py-20 flex flex-col justify-center overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-white/20"></div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            About 
            </p>
          </div>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-600/20 blur-[120px]"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/20 blur-[120px]"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto w-full z-10">
        {/* Text Content */}
        <div className="space-y-6 order-2 md:order-1 max-w-xl lg:max-w-2xl">
          {/* Typing Name */}
          <h1 className="text-2xl lg:text-3xl md:text-left text-center lg:text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {text}
            </span>
            <Cursor cursorColor="#22d3ee" />
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 font-medium md:text-left text-center">
            A Full Stack Developer
          </h2>

          <p className="text-white/60 leading-relaxed max-w-xl md:text-left text-center text-lg">
            I’m a passionate and professional Full Stack Developer dedicated to
            building modern, high-performing digital experiences. With a strong
            eye for detail and creativity at the core of my process, I combine
            clean architecture, scalable backend systems, and immersive
            front-end design to create products that not only function
            flawlessly but inspire confidence. My goal is simple — turn bold
            ideas into powerful digital realities.
          </p>
        </div>

        {/* Image - Comes first on mobile, second on desktop */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div
            className="w-64 h-64 md:w-96 md:h-96 rounded-full 
            border border-white/10 
            shadow-[0_0_50px_rgba(59,130,246,0.2)]
            flex items-center justify-center overflow-hidden bg-[#111] relative group"
          >
            <img
              src="images/myimage.jpg"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 max-w-7xl mx-auto w-full z-10">
        {/* LEFT HALF */}
        <motion.div
          className="lg:col-span-2 space-y-7"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          {metrics.slice(0, 2).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-5 md:p-6 
            bg-[#0a0a0a] border border-white/10 
            hover:border-white/20 transition-all duration-300
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/5">
                  <Icon className="w-5 h-5 text-white/80" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1 tracking-tight text-white/90">
                  {item.value}
                </h3>
                <p className="text-white/50 text-xs md:text-sm font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* RIGHT HALF */}
        <motion.div
          className="lg:col-span-2 space-y-7"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          {metrics.slice(2, 4).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-5 md:p-6 
            bg-[#0a0a0a] border border-white/10 
            hover:border-white/20 transition-all duration-300
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/5">
                  <Icon className="w-5 h-5 text-white/80" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1 tracking-tight text-white/90">
                  {item.value}
                </h3>
                <p className="text-white/50 text-xs md:text-sm font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}