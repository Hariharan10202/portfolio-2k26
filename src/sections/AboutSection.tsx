import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const traits = [
  { icon: "⚡", label: "Performance Engineering" },
  { icon: "🏗️", label: "Scalable Architecture" },
  { icon: "🔧", label: "Production Systems" },
  { icon: "📊", label: "Data Structures & Algorithms" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 md:py-24 relative" ref={ref}>
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(74,44,26,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.5em] mb-4">
            ✦ THE STORY ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-widest"
            style={{
              fontFamily: "'Chinese Rocks Rg', serif",
              color: "#d4b896",
              textShadow: "0 0 30px rgba(194,103,42,0.3)",
            }}
          >
            ABOUT THE OUTLAW
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#c2672a]" />
            <span className="text-[#c2672a]">✦</span>
            <div className="h-px w-24 bg-gradient-to-r from-[#c2672a] to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div
              className="old-paper p-8 rounded-sm relative"
              style={{ border: "1px solid rgba(194,103,42,0.3)" }}
            >
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 text-[#c2672a] opacity-40 text-sm">
                ⊕
              </div>
              <div className="absolute top-2 right-2 text-[#c2672a] opacity-40 text-sm">
                ⊕
              </div>
              <div className="absolute bottom-2 left-2 text-[#c2672a] opacity-40 text-sm">
                ⊕
              </div>
              <div className="absolute bottom-2 right-2 text-[#c2672a] opacity-40 text-sm">
                ⊕
              </div>

              <p className="text-[#c2672a] text-xs tracking-[0.3em] western-subtitle mb-4 text-center">
                ★ CHARACTER PROFILE ★
              </p>

              <p
                className="text-[#d4b896] text-base leading-relaxed mb-6"
                style={{ fontFamily: "'Chinese Rocks Rg', serif" }}
              >
                A seasoned Software Engineer with{" "}
                <span className="text-[#c9942a] font-semibold">3.5+ years</span>{" "}
                riding the digital frontier — building scalable web applications
                using{" "}
                <span className="text-[#c9942a]">React, Next.js, Node.js</span>{" "}
                and <span className="text-[#c9942a]">TypeScript</span>.
              </p>

              <p
                className="text-[#d4b896] text-base leading-relaxed mb-6"
                style={{ fontFamily: "'Chinese Rocks Rg', serif" }}
              >
                Known for delivering production features for high-traffic
                platforms with{" "}
                <span className="text-[#c9942a] font-semibold">
                  5K+ monthly active users
                </span>
                , and establishing architectural patterns that improve developer
                velocity and system reliability.
              </p>

              <p
                className="text-[#8b6914] text-sm leading-relaxed italic"
                style={{ fontFamily: "'Chinese Rocks Rg', serif" }}
              >
                "Every line of code tells a story. Every system built leaves a
                legacy on the frontier."
              </p>
            </div>
          </motion.div>

          {/* Right: Traits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="p-5 relative group cursor-default"
                style={{
                  background: "rgba(74,44,26,0.2)",
                  border: "1px solid rgba(194,103,42,0.2)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  borderColor: "rgba(194,103,42,0.6)",
                  backgroundColor: "rgba(74,44,26,0.35)",
                  y: -2,
                }}
              >
                <div className="text-2xl mb-3">{trait.icon}</div>
                <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.15em] leading-relaxed">
                  {trait.label.toUpperCase()}
                </p>
              </motion.div>
            ))}

            {/* Stats summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="sm:col-span-2 p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(122,26,26,0.2), rgba(74,44,26,0.2))",
                border: "1px solid rgba(194,103,42,0.3)",
              }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "3.5+", label: "Years" },
                  { value: "5K+", label: "MAU" },
                  { value: "3", label: "Platforms" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-2xl font-black text-[#c2672a] mb-1"
                      style={{ fontFamily: "'Chinese Rocks Rg', serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="western-subtitle text-[#8b6914] text-xs tracking-widest">
                      {s.label.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
