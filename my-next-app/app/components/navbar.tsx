"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code2, Mail } from "lucide-react"

export function Navbar() {
  const links = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/experience", icon: Briefcase, label: "Experience" },
    { href: "/skills", icon: Code2, label: "Skills" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="glass-card mx-4 my-4 px-8 py-3 w-[600px]">
        <div className="flex items-center justify-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-item">
              <link.icon className="w-5 h-5" />
              <span className="text-sm">{link.label}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  )
}

