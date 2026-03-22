import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    }).from(
      subtitleRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8",
    );
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background sunlight rays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(194, 103, 42, 0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(122, 26, 26, 0.1) 0%, transparent 40%)",
        }}
      />

      {/* Light rays */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: "50%",
            width: "2px",
            height: "70%",
            background: `linear-gradient(to bottom, rgba(194,103,42,${0.05 + i * 0.01}), transparent)`,
            transform: `translateX(-50%) rotate(${(i - 2) * 12}deg)`,
            transformOrigin: "top center",
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="w-full max-w-7xl mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT: TEXT */}
        <div className="w-full lg:w-1/2 lg:text-left text-center mx-auto">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="western-subtitle text-[#c2672a] text-xs tracking-[0.5em] mb-6"
          >
            ✦ OUTLAW PROFILE ✦
          </motion.div>

          {/* Main title */}
          <h1
            ref={titleRef}
            className="western-title leading-none mb-6 flex flex-wrap justify-center lg:justify-start gap-3"
            style={{
              fontSize: "var(--step-5)",
              color: "#d4b896",
            }}
          >
            <span className="whitespace-nowrap">HARI</span>
            <span className="whitespace-nowrap text-[#c2672a]">HARAN</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
            <div className="h-px flex-1 max-w-16 bg-linear-to-r from-transparent to-[#c2672a]" />
            <span className="text-[#c2672a] text-lg">✦</span>
            <div className="h-px flex-1 max-w-40 bg-linear-to-r from-[#c2672a] to-transparent" />
          </div>

          <p
            ref={subtitleRef}
            className="western-subtitle text-[#8b6914] text-sm tracking-[0.2em] mb-2"
          >
            SOFTWARE ENGINEER
          </p>

          <p className="text-[#c2672a] text-xs tracking-[0.15em] western-subtitle mb-8">
            ERODE, INDIA ✦ 3.5+ YEARS
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-[#d4b896] text-base leading-relaxed mb-10 max-w-lg italic western-content mx-auto lg:mx-0"
          >
            "Building scalable systems with React, Node.js & TypeScript. A lone
            architect forging digital trails through the frontier of modern
            web."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button
              type="button"
              onClick={() => scrollTo("#projects")}
              className="px-8 py-3 text-xs western-subtitle tracking-[0.2em] transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7a1a1a, #c2672a)",
                border: "1px solid #c9942a",
                color: "#d4b896",
                boxShadow: "0 0 20px rgba(194, 103, 42, 0.3)",
              }}
            >
              VIEW PROJECTS
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3 text-xs western-subtitle tracking-[0.2em] transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                border: "1px solid rgba(194, 103, 42, 0.4)",
                color: "#c2672a",
              }}
            >
              CONTACT ME
            </button>
            <a
              href="/Hariharan - Software Engineer.pdf.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-xs western-subtitle tracking-[0.2em] transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                border: "1px solid rgba(139, 105, 20, 0.4)",
                color: "#8b6914",
              }}
            >
              DOWNLOAD RESUME
            </a>
          </motion.div>
        </div>

        {/* RIGHT: TILTED IMAGE */}
        <div className="hidden lg:block w-1/2 relative perspective-[1000px]">
          <div className="relative flex justify-center -rotate-3 transition-all duration-500">
            <div
              className="w-[60%] aspect-2/3 bg-center bg-contain bg-no-repeat brightness-75"
              style={{
                backgroundImage: "url('/images/poster.png')",
                WebkitMaskImage: `
                  radial-gradient(circle at 40% 40%, black 20%, transparent 100%),

                  radial-gradient(circle at 10% 10%, black 1%, transparent 10%),
                  radial-gradient(circle at 10% 10%, black 5%, transparent 19%),
                  radial-gradient(circle at 10% 10%, black 7%, transparent 10%),
                  radial-gradient(circle at 10% 10%, black 6%, transparent 6%)
                `,
                WebkitMaskComposite: "add",
                maskComposite: "add",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="western-subtitle text-[#8b6914] text-xs tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-8 bg-linear-to-b from-[#c2672a] to-transparent" />
      </motion.div>
    </section>
  );
}
