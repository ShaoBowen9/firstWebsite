"use client"

import { motion } from "framer-motion"

export function AnimatedName({ name }: { name: string }) {
  const letters = Array.from(name)

  return (
    <motion.div initial="hidden" animate="visible" className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: {
              y: 50,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: i * 0.1,
                duration: 0.3,
              },
            },
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

