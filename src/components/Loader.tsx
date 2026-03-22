import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(textRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    })
      .to(
        barRef.current,
        {
          scaleX: 1,
          duration: 2.5,
          ease: "power1.inOut",
        },
        "-=0.5",
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        onComplete: onComplete,
      });
  }, [onComplete]);

  return (
    <motion.div
      ref={containerRef}
      className="loading-screen"
      exit={{ opacity: 0 }}
    >
      {/* Cinematic black bars */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-black z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-10" />

      <div
        ref={textRef}
        className="text-center opacity-0"
        style={{ zIndex: 20 }}
      >
        <div className="western-title text-[#c9942a] text-xs tracking-[0.5em] mb-8 opacity-70">
          ✦ A STORY BEGINS ✦
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative"
        >
          <h1
            className="text-5xl md:text-7xl font-black tracking-widest"
            style={{
              color: "#d4b896",
              textShadow: "0 0 40px rgba(194, 103, 42, 0.6)",
            }}
          >
            Hariharan
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="western-subtitle text-[#8b6914] text-xs tracking-[0.4em] mt-4"
        >
          SOFTWARE ENGINEER ✦ INDIA
        </motion.p>

        <div className="loading-bar-container mt-12 mx-auto">
          <div
            ref={barRef}
            className="loading-bar"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-[#c2672a] text-xs tracking-widest mt-4 western-subtitle"
        >
          ENTERING THE FRONTIER...
        </motion.p>
      </div>

      {/* Decorative corners */}
      <div
        className="absolute top-20 left-8 opacity-30"
        style={{ color: "#c2672a", fontSize: "2rem" }}
      >
        ⊕
      </div>
      <div
        className="absolute top-20 right-8 opacity-30"
        style={{ color: "#c2672a", fontSize: "2rem" }}
      >
        ⊕
      </div>
      <div
        className="absolute bottom-20 left-8 opacity-30"
        style={{ color: "#c2672a", fontSize: "2rem" }}
      >
        ⊕
      </div>
      <div
        className="absolute bottom-20 right-8 opacity-30"
        style={{ color: "#c2672a", fontSize: "2rem" }}
      >
        ⊕
      </div>
    </motion.div>
  );
}
