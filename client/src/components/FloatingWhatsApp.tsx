import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/2348106146952?text=Hello%20Dev%20Bolu"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.7, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50 group"
    >

      {/* Gradient glow ring */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-xl opacity-40 scale-110 group-hover:scale-125 transition duration-500"></div>

      {/* Pulse ping */}
      <span className="absolute inset-0 rounded-2xl border border-green-400/30 animate-ping"></span>

      {/* Glass button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:border-green-400/40"
      >
        {/* Official WhatsApp SVG */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-green-400 group-hover:scale-110 transition-transform"
        >
          <path d="M19.11 17.21c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.66.14-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.14-1.21-.44-2.3-1.39-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.6-.91-2.19-.24-.58-.49-.5-.66-.51h-.57c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43s1.04 2.81 1.18 3.01c.14.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.62.69.22 1.31.19 1.8.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/>
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.65.87 5.09 2.34 7.06L5 29l7.15-1.33C14.02 28.55 14.98 29 16 29c6.63 0 12-5.37 12-12S22.63 3 16 3z"/>
        </svg>
      </motion.div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs rounded-lg bg-black/80 text-white/80 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </div>
    </motion.a>
  );
}