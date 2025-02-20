"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Science Olympics Club Executive",
      company: "Victoria Park Collegiate Institute",
      period: "September 2024 – Present",
      location: "Toronto, ON",
      responsibilities: [
        "Managed resources such as presentations and organized events",
        "Instructed members through basic training",
        "Prepared the club to be ready for competition",
        "Worked with others to provide the highest quality training while maintaining a fun atmosphere",
      ],
    },
    {
      title: "Waterloo Problem Solving Course",
      company: "University of Waterloo",
      period: "June 2023 – September 2023",
      location: "Waterloo, ON",
      responsibilities: [
        "Studied math related problems and applications",
        "Received a Certificate of Achievement by maintaining an exemplary score on tests and assignments",
      ],
    },
    {
      title: "Customer Service Representative",
      company: "NewArts Toronto",
      period: "February 2023 – June 2023",
      location: "Toronto, ON",
      responsibilities: [
        "Communicate with clients to set up accounts and subscriptions",
        "Identify and troubleshoot technological problems affecting clients and faculty",
        "Maintaining the system and workflow by guiding clients and scheduling",
      ],
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
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
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
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  {experience.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-300">{experience.company}</p>
                <p className="text-sm text-gray-400">{experience.period}</p>
                <p className="text-sm text-gray-400 mb-4">{experience.location}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

