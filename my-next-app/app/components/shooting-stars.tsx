"use client"

import { useEffect, useRef } from "react"

export function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let shootingStars: {
      x: number
      y: number
      length: number
      speed: number
      size: number
      active: boolean
    }[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createShootingStar = () => ({
      x: Math.random() * canvas.width,
      y: 0,
      length: Math.random() * 60 + 80, // Slightly shorter trails
      speed: Math.random() * 8 + 12, // Slightly slower speed
      size: Math.random() * 1 + 0.5,
      active: true,
    })

    const initShootingStars = () => {
      shootingStars = Array(5)
        .fill(null)
        .map(() => ({
          ...createShootingStar(),
          y: Math.random() * canvas.height,
        }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shootingStars.forEach((star, index) => {
        if (star.active) {
          ctx.beginPath()
          const gradient = ctx.createLinearGradient(
            star.x,
            star.y,
            star.x + star.length * Math.cos(Math.PI / 4),
            star.y + star.length * Math.sin(Math.PI / 4),
          )
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)")
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

          ctx.strokeStyle = gradient
          ctx.lineWidth = star.size
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(star.x + star.length * Math.cos(Math.PI / 4), star.y + star.length * Math.sin(Math.PI / 4))
          ctx.stroke()

          star.x += star.speed * Math.cos(Math.PI / 4)
          star.y += star.speed * Math.sin(Math.PI / 4)

          if (star.x > canvas.width || star.y > canvas.height) {
            shootingStars[index] = createShootingStar()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    initShootingStars()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

