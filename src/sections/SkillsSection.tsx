import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    icon: "⚡",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Context API",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "REST APIs", "tRPC", "Fast API"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "Prisma ORM"],
  },
  {
    category: "AI & Applied",
    icon: "🤖",
    skills: ["NLP", "Resume Matching", "RAG", "LangChain"],
  },
  {
    category: "Tools & Infra",
    icon: "🔧",
    skills: ["GitHub"],
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-12 md:py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(74,44,26,0.15) 0%, transparent 50%)",
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
            ✦ ARSENAL ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-widest"
            style={{
              fontFamily: "'Chinese Rocks Rg', serif",
              color: "#d4b896",
              textShadow: "0 0 30px rgba(194,103,42,0.3)",
            }}
          >
            SKILLS & WEAPONS
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#c2672a]" />
            <span className="text-[#c2672a]">✦</span>
            <div className="h-px w-24 bg-linear-to-r from-[#c2672a] to-transparent" />
          </div>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="skill-card p-6 relative group"
              style={{
                background: "rgba(20,12,6,0.6)",
              }}
              whileHover={{
                borderColor: "rgba(194,103,42,0.6)",
                boxShadow:
                  "0 0 20px rgba(194,103,42,0.15), inset 0 0 20px rgba(194,103,42,0.05)",
                y: -4,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.2em]">
                    {cat.category.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-[rgba(194,103,42,0.4)] to-transparent mb-5" />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs western-subtitle tracking-wider transition-all duration-300 cursor-default"
                    style={{
                      background: "rgba(74,44,26,0.3)",
                      border: "1px solid rgba(194,103,42,0.25)",
                      color: "#d4b896",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Hover glow corner */}
              <div
                className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 50%, rgba(194,103,42,0.2) 100%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
