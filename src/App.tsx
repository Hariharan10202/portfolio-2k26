import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import OutlawStats from "@/sections/OutlawStats";
import WantedPoster from "@/sections/WantedPoster";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceTimeline from "@/sections/ExperienceTimeline";
import CampfireProjects from "@/sections/CampfireProjects";
import EducationSection from "@/sections/EducationSection";
import ContactSection from "@/sections/ContactSection";
import DustParticles from "@/components/DustParticles";
import GrainOverlay from "@/components/GrainOverlay";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen"
          style={{ background: "#0d0a07" }}
        >
          <GrainOverlay />
          <DustParticles />
          <MouseGlow />
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <OutlawStats />
            {/* <WantedPoster /> */}
            <SkillsSection />
            <ExperienceTimeline />
            <CampfireProjects />
            <EducationSection />
            <ContactSection />
          </main>
          <footer className="py-8 text-center border-t border-[rgba(194,103,42,0.2)]">
            <p className="western-subtitle text-xs tracking-widest text-[#8b6914]">
              ★ Hariharan ★ ERODE, INDIA ★ 2024 ★
            </p>
          </footer>
        </motion.div>
      )}
    </>
  );
}
