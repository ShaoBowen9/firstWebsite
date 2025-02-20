"use client"

import { motion } from "framer-motion"
import { BackgroundEffects } from "@/components/background-effects"
import { HeroSection } from "@/components/hero-section"
import { ObjectiveSection } from "@/components/objective-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid-overlay" />
      <BackgroundEffects />
      <div className="relative z-10">
        <HeroSection />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-8 space-y-32 py-32 max-w-4xl"
        >
          <ObjectiveSection />
          <EducationSection />
          <ExperienceSection />
        </motion.div>
      </div>
    </main>
  )
}

