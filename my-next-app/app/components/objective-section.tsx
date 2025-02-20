"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ObjectiveSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-blue-400">Objective</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 leading-relaxed">
          Motivated and dedicated individual working to expand his boundaries, learn new skills and a working
          environment. I have a background in leadership, problem-solving and customer service. I hope to implement
          these skills in this to enhance the safety of Toronto and I hope to learn new skills along the way.
        </CardContent>
      </Card>
    </motion.section>
  )
}

