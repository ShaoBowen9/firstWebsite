"use client"

import { motion } from "framer-motion"
import { BackgroundEffects } from "@/components/background-effects"
import { Card, CardContent } from "@/components/ui/card"
import { Languages, Brain } from "lucide-react"

export default function SkillsPage() {
  const skills = {
    languages: ["English (Fluent)", "French (Basic)", "Mandarin (Basic)"],
    soft: ["Leadership", "Communication", "Teamwork", "Self-Regulation", "Willingness to Learn"],
  }

  return (
    <div className="min-h-screen">
      <div className="grid-overlay" />
      <BackgroundEffects />
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 text-blue-400"
          >
            Skills & Expertise
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Languages className="w-6 h-6 text-blue-400" />
                    <h2 className="text-xl font-semibold">Languages</h2>
                  </div>
                  <ul className="space-y-2">
                    {skills.languages.map((language, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                        {language}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-6 h-6 text-blue-400" />
                    <h2 className="text-xl font-semibold">Soft Skills</h2>
                  </div>
                  <ul className="space-y-2">
                    {skills.soft.map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

