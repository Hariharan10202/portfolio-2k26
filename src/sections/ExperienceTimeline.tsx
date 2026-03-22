import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  period: string;
  stack: string[];
  achievements: string[];
  keyAchievement: string;
}
const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Oddworks (Indieworks) Solutions",
    period: "Jan 2024 – Jan 2026",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Recharts",
      "Prisma",
      "tRPC",
      "MySQL",
    ],
    achievements: [
      "Built and scaled multiple production platforms (Health Dashboard, Talent Hiring, eCommerce) serving 5K+ MAU",
      "Developed interactive dashboards for client health metrics with dynamic widgets, filters, and goal tracking",
      "Engineered scalable frontend architecture in a Turborepo monorepo with reusable UI components",
      "Built a full-page calendar UI similar to Google Calendar, with slot rendering, create/edit flows, and real-time API integration",
      "Developed full-stack eCommerce platform with pagination/infinite scroll, CRUD operations",
    ],
    keyAchievement:
      "Drove end-to-end development of multiple production systems, improving performance and delivery speed while supporting 5K+ active users.",
  },
  {
    role: "Software Engineer",
    company: "Freightify",
    period: "Jul 2022 – Dec 2023",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
    achievements: [
      "Built a custom Design System from scratch to standardize UI and reduce development time by 30–40%",
      "Developed and documented reusable component library with Storybook for internal adoption",
      "Led Next.js Server Components PoC by moving heavy data fetching to server, improving performance",
      "Optimized API data aggregation on server to reduce client-side complexity and rendering load",
      "Built and migrated reusable React UI components during major product revamp with improved layouts",
    ],
    keyAchievement:
      "Led design system and performance initiatives that significantly improved UI consistency and reduced development effort across products.",
  },
];

function ExperienceCard({
  exp,
  index,
  inView,
}: {
  exp: Experience;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
      className="flex gap-6 md:gap-10"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div className="timeline-marker" />
        {index < experiences.length - 1 && (
          <div
            className="timeline-line flex-1 mt-2"
            style={{ minHeight: "100px" }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="old-paper rounded-sm p-6 mb-8 flex-1"
        style={{
          border: "1px solid rgba(194,103,42,0.3)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Header */}
        <div className="mb-4">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-black tracking-wider text-[#d4b896]">
              {exp.role}
            </h3>
            <div
              className="px-3 py-1 text-xs western-subtitle tracking-wider shrink-0"
              style={{
                background: "rgba(122,26,26,0.3)",
                border: "1px solid rgba(194,103,42,0.3)",
                color: "#c9942a",
                fontSize: "0.65rem",
              }}
            >
              {exp.period}
            </div>
          </div>
          <p className="western-subtitle text-[#c2672a] text-xs tracking-widest leading-relaxed">
            {exp.company.toUpperCase()}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs western-subtitle tracking-wide"
              style={{
                background: "rgba(74,44,26,0.3)",
                border: "1px solid rgba(194,103,42,0.2)",
                color: "#8b6914",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-2 mb-5">
          {exp.achievements.map((a, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#c2672a] text-xs mt-0.5 shrink-0">✦</span>
              <p className="text-[#d4b896] text-sm leading-relaxed tracking-wide western-content">
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* Key achievement */}
        <div
          className="p-4"
          style={{
            background: "rgba(122,26,26,0.2)",
            border: "1px solid rgba(194,103,42,0.25)",
          }}
        >
          <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.2em] mb-2">
            ★ KEY ACHIEVEMENT ★
          </p>
          <p className="text-[#d4b896] text-sm italic leading-relaxed tracking-wide western-content">
            {exp.keyAchievement}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-12 md:py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(122,26,26,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.5em] mb-4">
            ✦ THE TRAIL ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-widest"
            style={{
              color: "#d4b896",
              textShadow: "0 0 30px rgba(194,103,42,0.3)",
            }}
          >
            EXPERIENCE
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#c2672a]" />
            <span className="text-[#c2672a]">✦</span>
            <div className="h-px w-24 bg-linear-to-r from-[#c2672a] to-transparent" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.company}
              exp={exp}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
