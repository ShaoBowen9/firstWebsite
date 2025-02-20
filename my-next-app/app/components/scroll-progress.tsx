"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <div className="fixed left-4 top-[20%] h-[65vh] w-2 bg-blue-900/20 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-full origin-bottom"
          style={{
            scaleY,
            height: "100%",
          }}
        />
      </div>
      <div className="fixed right-4 top-[20%] h-[65vh] w-2 bg-blue-900/20 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-full origin-bottom"
          style={{
            scaleY,
            height: "100%",
          }}
        />
      </div>
    </>
  )
}

