"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxMountains() {
  const { scrollY } = useScroll()

  const y0 = useTransform(scrollY, [0, 3000], [0, -250])
  const y1 = useTransform(scrollY, [0, 3000], [0, -200])
  const y2 = useTransform(scrollY, [0, 3000], [0, -150])
  const y3 = useTransform(scrollY, [0, 3000], [0, -100])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <motion.div className="absolute inset-x-0 -bottom-56 h-[95vh]" style={{ y: y0 }}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full" fill="#2C3440">
          <path d="M0,192L48,176C96,160,192,128,288,144C384,160,480,224,576,234.7C672,245,768,203,864,181.3C960,160,1056,160,1152,181.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </motion.div>
      <motion.div className="absolute inset-x-0 -bottom-48 h-[85vh]" style={{ y: y1 }}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full" fill="#374151">
          <path d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,149.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </motion.div>
      <motion.div className="absolute inset-x-0 -bottom-40 h-[65vh]" style={{ y: y2 }}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full" fill="#4B5563">
          <path d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </motion.div>
      <motion.div className="absolute inset-x-0 -bottom-32 h-[45vh]" style={{ y: y3 }}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full" fill="#6B7280">
          <path d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,181.3C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </motion.div>
    </div>
  )
}

