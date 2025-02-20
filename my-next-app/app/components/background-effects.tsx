"use client"

import { ParticlesContainer } from "./particles"
import { FloatingStars } from "./floating-stars"
import { ShootingStars } from "./shooting-stars"
import { ParallaxMountains } from "./parallax-mountains"
import { ScrollProgress } from "./scroll-progress"
import { AuroraBackground } from "./aurora-background"

export function BackgroundEffects() {
  return (
    <>
      <AuroraBackground />
      <ParticlesContainer />
      <FloatingStars />
      <ShootingStars />
      <ParallaxMountains />
      <ScrollProgress />
    </>
  )
}

