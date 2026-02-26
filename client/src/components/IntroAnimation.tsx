import { useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: "blur(20px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl md:text-7xl font-bold font-display tracking-[0.2em] text-white"
        >
          HYPERTECH
        </motion.h1>
        <motion.p
          className="text-primary mt-6 tracking-[0.3em] text-sm md:text-base font-mono uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Welcome to my portfolio
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
