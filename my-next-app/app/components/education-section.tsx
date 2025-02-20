"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      school: "Victoria Park Collegiate Institute",
      program: "High School - International Baccalaureate",
      period: "Sept. 2022 – Present",
      location: "Toronto, ON",
    },
    {
      school: "J.B Tyrell",
      program: "Middle School - Gifted Program",
      period: "2020 – June 2022",
      location: "Toronto, ON",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Education</h2>
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  {item.school}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-300">{item.program}</p>
                <p className="text-sm text-gray-400">{item.period}</p>
                <p className="text-sm text-gray-400">{item.location}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

