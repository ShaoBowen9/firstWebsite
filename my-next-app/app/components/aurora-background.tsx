"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function AuroraBackground() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 3000], [0, -300])

  return (
    <motion.div className="fixed inset-0 z-0" style={{ y: y1 }}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/5 via-[#020817] to-[#020817]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_50%)]" />
      </div>
    </motion.div>
  )
}

