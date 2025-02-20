import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bowen Shao - Portfolio",
  description: "Personal portfolio of Bowen Shao",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} bg-[#020817]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}



import './globals.css'