import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  stack: string[];
  description: string;
  features: string[];
  github?: string;
  live?: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: "AlignAI",
    stack: ["Python", "FastAPI", "NLP", "LangChain", "React", "Next.js", "LLM"],
    description:
      "AI-powered resume–job description matching system generating explainable match scores and identifying skill gaps.",
    features: [
      "Resume parsing with NLP extraction",
      "Semantic skill gap analysis",
      "Explainable match scoring",
      "Recruiter insights dashboard",
    ],
    github: "https://github.com",
    icon: "🤖",
  },
];

function AnimatedCampfire() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative">
      {/* Ground glow — wider */}
      <div
        className="absolute bottom-10"
        style={{
          width: "220px",
          height: "24px",
          background:
            "radial-gradient(ellipse, rgba(194,103,42,0.55), rgba(194,103,42,0.1) 60%, transparent)",
          borderRadius: "50%",
        }}
      />

      {/* Stones ring */}
      {[-70, -48, 48, 70, -30, 30].map((x, i) => (
        <div
          key={`stone-${i}`}
          className="absolute"
          style={{
            bottom: "52px",
            left: `calc(50% + ${x}px)`,
            width: `${10 + (i % 3) * 4}px`,
            height: `${6 + (i % 2) * 3}px`,
            background: `hsl(${20 + i * 5},30%,${14 + i * 2}%)`,
            borderRadius: "40%",
            transform: `rotate(${x * 0.5}deg)`,
            border: "1px solid rgba(90,40,10,0.5)",
          }}
        />
      ))}

      {/* Logs — wider, more spread */}
      <div className="absolute flex items-end" style={{ bottom: "56px" }}>
        <div
          style={{
            width: "90px",
            height: "12px",
            background: "linear-gradient(to right, #2a0e04, #4a1a08, #3a1208)",
            transform: "rotate(-20deg) translateX(14px) translateY(-4px)",
            borderRadius: "6px",
            border: "1px solid #6a2a0a",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)",
          }}
        />
        <div
          style={{
            width: "90px",
            height: "12px",
            background: "linear-gradient(to right, #4a1a08, #3a1208, #2a0e04)",
            transform: "rotate(20deg) translateX(-14px) translateY(-4px)",
            borderRadius: "6px",
            border: "1px solid #6a2a0a",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      {/* Horizontal log */}
      <div
        className="absolute"
        style={{
          bottom: "58px",
          width: "80px",
          height: "10px",
          background: "linear-gradient(to bottom, #5a2a0a, #3a1a06)",
          borderRadius: "5px",
          border: "1px solid #6a3010",
          left: "calc(50% - 40px)",
        }}
      />

      {/* Embers — wider spread */}
      <motion.div
        className="absolute"
        style={{
          bottom: "62px",
          width: "70px",
          height: "14px",
          left: "calc(50% - 35px)",
        }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,148,42,0.9), rgba(194,103,42,0.6), transparent)",
          }}
          animate={{
            opacity: [0.7, 1, 0.6, 1, 0.7],
            scaleX: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.div>

      {/* Flying embers */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute rounded-full"
          style={{
            width: "3px",
            height: "3px",
            background: i % 2 === 0 ? "#c9942a" : "#c2672a",
            bottom: "62px",
            left: `calc(50% + ${(i - 2) * 14}px)`,
            boxShadow: `0 0 4px ${i % 2 === 0 ? "#c9942a" : "#c2672a"}`,
          }}
          animate={{
            y: [-10, -80 - i * 15],
            x: [(i - 2) * 3, (i - 2) * 18 + (i % 2 === 0 ? 10 : -10)],
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 1.5 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Smoke particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`smoke-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            background: "rgba(140,110,70,0.12)",
            bottom: `${170 + i * 35}px`,
            left: `calc(50% + ${(i - 1.5) * 12}px)`,
            filter: "blur(2px)",
          }}
          animate={{
            y: [-10, -80],
            opacity: [0.25, 0],
            scale: [1, 2.5],
            x: [(i - 1.5) * 4, (i - 1.5) * 28],
          }}
          transition={{
            duration: 3.5 + i * 0.6,
            repeat: Infinity,
            delay: i * 0.9,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Wide glow base */}
      <motion.div
        className="absolute"
        style={{
          bottom: "50px",
          width: "130px",
          height: "50px",
          background:
            "radial-gradient(ellipse, rgba(194,103,42,0.35), transparent 70%)",
          left: "calc(50% - 65px)",
          filter: "blur(6px)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.6, 0.85, 0.5] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />

      {/* Outer flame — wider */}
      <motion.div
        className="absolute"
        style={{
          bottom: "62px",
          width: "70px",
          height: "110px",
          background:
            "linear-gradient(to top, rgba(194,103,42,0.9), rgba(194,80,20,0.4), transparent)",
          borderRadius: "50% 50% 20% 20%",
          filter: "blur(6px)",
          left: "calc(50% - 35px)",
        }}
        animate={{
          scaleX: [1, 1.18, 0.88, 1.12, 1],
          scaleY: [1, 0.93, 1.1, 0.97, 1],
          x: [-3, 4, -2, 3, -3],
        }}
        transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mid flame */}
      <motion.div
        className="absolute"
        style={{
          bottom: "62px",
          width: "50px",
          height: "90px",
          background:
            "linear-gradient(to top, #c9942a, #c2672a, rgba(194,60,10,0.5), transparent)",
          borderRadius: "50% 50% 20% 20%",
          filter: "blur(3px)",
          left: "calc(50% - 25px)",
        }}
        animate={{
          scaleX: [1, 1.12, 0.9, 1.1, 1],
          scaleY: [1, 1.07, 0.93, 1.04, 1],
          x: [0, -2, 3, -1, 0],
        }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Inner bright flame */}
      <motion.div
        className="absolute"
        style={{
          bottom: "62px",
          width: "24px",
          height: "60px",
          background:
            "linear-gradient(to top, #fff0a0, #f0c040, #c9942a, transparent)",
          borderRadius: "50% 50% 20% 20%",
          filter: "blur(1px)",
          left: "calc(50% - 12px)",
        }}
        animate={{
          scaleX: [1, 1.08, 0.95, 1.06, 1],
          x: [0, 2, -2, 1, 0],
        }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating sparks */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute rounded-full"
          style={{
            width: "3px",
            height: "3px",
            background: "#f0c040",
            bottom: "80px",
            left: `calc(50% + ${(i - 2) * 6}px)`,
          }}
          animate={{
            y: [0, -80 - i * 20],
            x: [(i - 2) * 6, (i - 2) * 30],
            opacity: [1, 0],
            scale: [1, 0.3],
          }}
          transition={{
            duration: 1.5 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Glow on ground */}
      <motion.div
        className="absolute bottom-8 w-24 h-8 rounded-full"
        style={{ background: "rgba(194,103,42,0.2)", filter: "blur(8px)" }}
        animate={{ opacity: [0.4, 0.8, 0.5, 0.9, 0.4] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />

      {/* Label */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <p className="western-subtitle text-[#8b6914] text-xs tracking-[0.3em]">
          ★ THE CAMPFIRE ★
        </p>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
    >
      <motion.div
        className="mission-card old-paper rounded-sm overflow-hidden"
        style={{
          border: "1px solid rgba(194,103,42,0.3)",
          boxShadow: expanded ? "0 0 30px rgba(194,103,42,0.2)" : "none",
        }}
        layout
      >
        {/* Card header */}
        <button
          className="w-full p-6 text-left"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">{project.icon}</span>
            <div>
              <h3
                className="text-lg font-black tracking-wider text-[#d4b896]"
                style={{ fontFamily: "'Chinese Rocks Rg', serif" }}
              >
                {project.title.toUpperCase()}
              </h3>
              <p className="western-subtitle text-[#8b6914] text-xs tracking-wider mt-0.5">
                {expanded
                  ? "★ MISSION BRIEFING OPEN ★"
                  : "★ TAP TO OPEN MISSION ★"}
              </p>
            </div>
            <div className="ml-auto">
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                className="text-[#c2672a] text-xl block"
              >
                ▾
              </motion.span>
            </div>
          </div>

          {/* Stack badges */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs western-subtitle tracking-wide"
                style={{
                  background: "rgba(74,44,26,0.4)",
                  border: "1px solid rgba(194,103,42,0.2)",
                  color: "#8b6914",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div
                className="px-6 pb-6 pt-2"
                style={{ borderTop: "1px solid rgba(194,103,42,0.2)" }}
              >
                {/* Description */}
                <p
                  className="text-[#d4b896] text-sm leading-relaxed mb-5"
                  style={{
                    fontFamily: "'Chinese Rocks Rg', serif",
                    fontStyle: "italic",
                  }}
                >
                  "{project.description}"
                </p>

                {/* Features */}
                <div className="mb-5">
                  <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.2em] mb-3">
                    — MISSION OBJECTIVES —
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[#c2672a] text-xs mt-0.5">✦</span>
                        <p className="text-[#d4b896] text-xs leading-relaxed">
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-xs western-subtitle tracking-wider transition-all hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #7a1a1a, #c2672a)",
                        border: "1px solid #c9942a",
                        color: "#d4b896",
                      }}
                    >
                      VIEW PROJECT
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-xs western-subtitle tracking-wider transition-all hover:scale-105"
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(194,103,42,0.4)",
                        color: "#c2672a",
                      }}
                    >
                      GITHUB
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function CampfireProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="projects" className="py-12 md:py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(194,103,42,0.06) 0%, transparent 50%)",
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
            ✦ CAMPFIRE TALES ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-widest"
            style={{
              fontFamily: "'Chinese Rocks Rg', serif",
              color: "#d4b896",
              textShadow: "0 0 30px rgba(194,103,42,0.3)",
            }}
          >
            PROJECTS
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#c2672a]" />
            <span className="text-[#c2672a]">✦</span>
            <div className="h-px w-24 bg-linear-to-r from-[#c2672a] to-transparent" />
          </div>
          <p
            className="text-[#8b6914] text-sm mt-4 max-w-md mx-auto"
            style={{
              fontFamily: "'Chinese Rocks Rg', serif",
              fontStyle: "italic",
            }}
          >
            "Gather 'round the fire, stranger. Let me tell you about the trails
            I've ridden..."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Animated campfire */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className={`lg:col-span-1 rounded-sm relative${inView ? " campfire-glow" : ""}`}
            style={{
              background: "rgba(13,10,7,0.6)",
              border: "1px solid rgba(194,103,42,0.2)",
              minHeight: "300px",
            }}
          >
            <AnimatedCampfire />
          </motion.div>

          {/* Right: Project cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
