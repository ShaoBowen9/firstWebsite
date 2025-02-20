"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Bowen Shao
        </h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TypeAnimation
            sequence={[500, "Student", 1000, "Aspiring Developer", 1000]}
            wrapper="p"
            speed={50}
            className="text-xl text-gray-400"
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce text-gray-400">Scroll Down</div>
      </motion.div>
    </section>
  )
}

