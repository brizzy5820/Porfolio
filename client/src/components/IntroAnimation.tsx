import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function IntroAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setSplit(true);
    }, 2200);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">

      {/* Subtle transparent reveal layer */}
      <motion.div
  initial={{
    opacity: 0,
    filter: "blur(20px)",
    scale: 1,
  }}
  animate={
    split
      ? {
          opacity: 0.35,
          filter: "blur(14px)",
          scale: 1,
        }
      : {
          opacity: 0.15,
          filter: "blur(22px)",
          scale: 1,
        }
  }
  exit={{
    opacity: 0,
    filter: "blur(0px)",
    scale: 1.05,
    transition: { duration: 0.8, ease: "easeInOut" },
  }}
  transition={{
    duration: 0.9,
    ease: [0.77, 0, 0.175, 1],
  }}
  className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue/20 to-transparent backdrop-blur-2xl"
/>
      {/* TOP PANEL */}
      <motion.div
        animate={split ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black flex items-end justify-center"
      >
        <div className="pb-6">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold font-display tracking-[0.2em] text-white"
          >
            BOLUWATIFE
          </motion.h1>
        </div>
      </motion.div>

      {/* BOTTOM PANEL */}
      <motion.div
        animate={split ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black flex items-start justify-center"
      >
        <div className="pt-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-primary tracking-[0.3em] text-sm md:text-base font-mono uppercase"
          >
            TECHNOLOGIES
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}