"use client"

import { motion } from "framer-motion"
import { ParticlesContainer } from "@/components/particles"
import { FloatingStars } from "@/components/floating-stars"
import { ScrollProgress } from "@/components/scroll-progress"

export default function AboutPage() {
  return (
    <main className="min-h-screen grid-background">
      <ParticlesContainer />
      <FloatingStars />
      <ScrollProgress />
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-blue-400"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-4 text-gray-400"
        >
          Coming soon...
        </motion.p>
      </div>
    </main>
  )
}

