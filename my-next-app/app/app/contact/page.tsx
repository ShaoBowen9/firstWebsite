"use client"

import { motion } from "framer-motion"
import { BackgroundEffects } from "@/components/background-effects"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, User } from "lucide-react"

export default function ContactPage() {
  const contacts = [
    {
      name: "J.Cormode",
      title: "Library supervisor/teacher",
      email: "joel.cormode@tdsb.on.ca",
    },
    {
      name: "S. Torrie",
      title: "Science Olympics supervisor/teacher",
      email: "sarah.torrie@tdsb.on.ca",
    },
    {
      name: "D. Blackmore",
      title: "Tootor Organization founder",
      email: "newartstoronto@gmail.com",
    },
  ]

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
            Contact Information
          </motion.h1>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">437-606-3663</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">bowenshao2008@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-semibold text-center mb-6"
              >
                References
              </motion.h2>
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <User className="w-5 h-5 text-blue-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-200">{contact.name}</h3>
                          <p className="text-sm text-gray-400">{contact.title}</p>
                          <p className="text-sm text-blue-400">{contact.email}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

