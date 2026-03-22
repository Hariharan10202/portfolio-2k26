import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-12 md:py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.5em] mb-4">
            ✦ THE SCHOOLIN' ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-widest"
            style={{
              color: "#d4b896",
              textShadow: "0 0 30px rgba(194,103,42,0.3)",
            }}
          >
            EDUCATION
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#c2672a]" />
            <span className="text-[#c2672a]">✦</span>
            <div className="h-px w-24 bg-linear-to-r from-[#c2672a] to-transparent" />
          </div>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="old-paper rounded-sm p-8 md:p-12 relative"
          style={{
            border: "1px solid rgba(194,103,42,0.4)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Corner decorations */}
          {[
            "top-3 left-3",
            "top-3 right-3",
            "bottom-3 left-3",
            "bottom-3 right-3",
          ].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} text-[#c2672a] opacity-30 text-lg`}
            >
              ⊕
            </div>
          ))}

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Icon */}
            <div
              className="w-20 h-20 flex items-center justify-center text-4xl shrink-0 rounded-sm"
              style={{
                background:
                  "linear-gradient(135deg, rgba(122,26,26,0.4), rgba(74,44,26,0.3))",
                border: "2px solid rgba(194,103,42,0.4)",
              }}
            >
              🎓
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-black tracking-wider text-[#d4b896] mb-2">
                BACHELOR OF COMPUTER SCIENCE & ENGINEERING
              </h3>

              <p className="western-subtitle text-[#c2672a] text-sm tracking-[0.15em] mb-1">
                KONGU ENGINEERING COLLEGE
              </p>

              <p className="text-[#8b6914] text-xs tracking-wider mb-6">
                ERODE, TAMIL NADU, INDIA
              </p>

              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div
                  className="px-5 py-3 text-center"
                  style={{
                    background: "rgba(122,26,26,0.3)",
                    border: "1px solid rgba(194,103,42,0.4)",
                  }}
                >
                  <div className="text-2xl font-black text-[#c2672a] mb-1">
                    8.1
                  </div>
                  <div className="western-subtitle text-[#8b6914] text-xs tracking-widest">
                    GPA
                  </div>
                </div>

                <div className="flex items-center">
                  <div>
                    <p className="text-[#d4b896] text-base italic western-content">
                      "Forged in the fires of algorithm theory and systems
                      design. Every problem a frontier, every solution a trail
                      blazed."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
