import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  label: string;
  value: number;
  max: number;
  description: string;
}

const stats: Stat[] = [
  {
    label: "Frontend Mastery",
    value: 95,
    max: 100,
    description: "React · Next.js · TypeScript",
  },
  {
    label: "Backend Engineering",
    value: 80,
    max: 100,
    description: "Node.js · Express · tRPC",
  },
  {
    label: "System Design",
    value: 78,
    max: 100,
    description: "Scalable Architecture · Patterns",
  },
  {
    label: "Algorithms",
    value: 85,
    max: 100,
    description: "DSA · Problem Solving · LeetCode",
  },
  {
    label: "AI Development",
    value: 65,
    max: 100,
    description: "NLP · LangChain · RAG",
  },
  {
    label: "Database Craft",
    value: 75,
    max: 100,
    description: "PostgreSQL · MongoDB · Prisma",
  },
];

const barCharFilled = "█";
const barCharEmpty = "░";
const barLength = 10;

function StatBar({ stat, inView }: { stat: Stat; inView: boolean }) {
  const [width, setWidth] = useState(0);
  const filled = Math.round((stat.value / 100) * barLength);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setWidth(stat.value), 100);
    }
  }, [inView, stat.value]);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="western-subtitle text-[#d4b896] text-xs tracking-[0.15em]">
          {stat.label.toUpperCase()}
        </span>
        <span className="western-subtitle text-[#c2672a] text-xs">
          {stat.value}/100
        </span>
      </div>

      {/* ASCII-style bar */}
      <div className="mb-2 font-mono text-sm tracking-wider">
        <span style={{ color: "#c2672a" }}>{barCharFilled.repeat(filled)}</span>
        <span style={{ color: "rgba(194,103,42,0.2)" }}>
          {barCharEmpty.repeat(barLength - filled)}
        </span>
      </div>

      {/* Visual bar */}
      <div className="stat-bar">
        <motion.div
          className="stat-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${stat.value}%` : 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      <p
        className="text-[#8b6914] text-xs mt-1 tracking-wide"
        style={{ fontFamily: "'Chinese Rocks Rg', serif", fontStyle: "italic" }}
      >
        {stat.description}
      </p>
    </div>
  );
}

export default function OutlawStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-12 md:py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(122,26,26,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.5em] mb-4">
            ✦ CHARACTER ATTRIBUTES ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-widest"
            style={{
              fontFamily: "'Chinese Rocks Rg', serif",
              color: "#d4b896",
              textShadow: "0 0 30px rgba(194,103,42,0.3)",
            }}
          >
            OUTLAW STATS
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#c2672a]" />
            <span className="text-[#c2672a]">✦</span>
            <div className="h-px w-24 bg-linear-to-r from-[#c2672a] to-transparent" />
          </div>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="old-paper rounded-sm overflow-hidden"
          style={{
            border: "1px solid rgba(194,103,42,0.4)",
            boxShadow: "0 0 40px rgba(194,103,42,0.15)",
          }}
        >
          {/* Profile header */}
          <div
            className="p-6 relative"
            style={{
              background:
                "linear-gradient(to right, rgba(122,26,26,0.4), rgba(74,44,26,0.3))",
              borderBottom: "1px solid rgba(194,103,42,0.3)",
            }}
          >
            <div className="flex items-center gap-6">
              <div>
                <h3
                  className="text-xl font-black tracking-widest text-[#d4b896]"
                  style={{ fontFamily: "'Chinese Rocks Rg', serif" }}
                >
                  Hariharan
                </h3>
                <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.2em] mt-1">
                  SOFTWARE ENGINEER ✦ CLASS: ARCHITECT
                </p>
                <div className="flex gap-4 mt-2">
                  <span className="text-[#8b6914] text-xs">
                    📍 ERODE, INDIA
                  </span>
                  <span className="text-[#8b6914] text-xs">⚔️ 3.5+ YEARS</span>
                </div>
              </div>

              <div className="ml-auto hidden sm:block">
                <div
                  className="px-4 py-2 text-center"
                  style={{
                    background: "rgba(122,26,26,0.4)",
                    border: "1px solid rgba(194,103,42,0.4)",
                  }}
                >
                  <div className="western-subtitle text-[#c9942a] text-xs tracking-widest">
                    BOUNTY
                  </div>
                  <div
                    className="text-xl font-black text-[#c2672a]"
                    style={{ fontFamily: "'Chinese Rocks Rg', serif" }}
                  >
                    $1,000,000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="p-8">
            <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.3em] mb-8 text-center">
              — ENGINEERING ATTRIBUTES —
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <StatBar stat={stat} inView={inView} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
