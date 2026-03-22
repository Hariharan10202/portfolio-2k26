import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const crimes = [
  "Building scalable web platforms serving 5K+ users",
  "Architecting performant systems with zero downtime",
  "Shipping production features end-to-end with speed",
  "Reducing backend latency through ruthless optimization",
  "Establishing developer velocity-boosting patterns",
];

export default function WantedPoster() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-12 md:py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139,105,20,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="western-subtitle text-[#c2672a] text-xs tracking-[0.5em] mb-4">
            ✦ OFFICIAL NOTICE ✦
          </p>
        </motion.div>

        {/* Wanted Poster */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 5 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{
            rotate: [-0.3, 0.3, -0.3, 0],
            transition: { duration: 2 },
          }}
          className="wanted-poster rounded-sm overflow-hidden mx-auto max-w-3xl"
          style={{
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(139,105,20,0.2)",
          }}
        >
          <div className="w-full">
            <img src="/public/images/poster.png" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
