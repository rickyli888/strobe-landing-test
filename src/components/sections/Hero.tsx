"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/theme";
import { GradientText } from "@/components/ui/GradientText";

const FloatingEnergyGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated grid background */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
					linear-gradient(rgba(251, 190, 48, 0.3) 1px, transparent 1px),
					linear-gradient(90deg, rgba(251, 190, 48, 0.3) 1px, transparent 1px)
				`,
        backgroundSize: "50px 50px",
      }}
    />

    {/* Floating particles */}
    {Array.from({ length: 12 }).map((_, i) => {
      // Create more varied starting positions
      const startX = (i * 137 + i * i * 23) % 1200;
      const startY = (i * 89 + i * i * 31) % 800;
      const endX = (startX + 300 + i * 50) % 1200;
      const endY = (startY + 200 + i * 40) % 800;

      return (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{
            x: startX,
            y: startY,
            opacity: 0,
          }}
          animate={{
            x: [startX, endX, (endX + 150) % 1200, startX],
            y: [startY, endY, (endY + 100) % 800, startY],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: 15 + (i % 4) * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      );
    })}
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <FloatingEnergyGrid />

      {/* Main layout container with explicit spacing */}
      <div className="relative h-full w-full flex">
        {/* Left accent */}
        <div className="hidden lg:flex w-24 h-screen border-r border-white/10 flex-col justify-between py-8 fixed left-0 top-0 z-40">
          <div className="space-y-1 px-4">
            <div className="w-full h-px bg-primary/30" />
            <div className="w-full h-px bg-primary/20" />
            <div className="w-full h-px bg-primary/10" />
          </div>
          <div
            className="rotate-180 whitespace-nowrap text-white/40 text-xs tracking-[0.5em]"
            style={{ writingMode: "vertical-rl" }}>
            STROBE.ENERGY_25
          </div>
          <div className="space-y-1 px-4">
            <div className="w-full h-px bg-primary/10" />
            <div className="w-full h-px bg-primary/20" />
            <div className="w-full h-px bg-primary/30" />
          </div>
        </div>

        {/* Main content with explicit margins and padding */}
        <div
          className="flex-1 flex items-center"
          style={{
            marginLeft: "6rem", // 96px for lg:ml-24
            marginRight: "8rem", // 128px for right sidebar
            paddingLeft: "4rem", // 64px
            paddingRight: "4rem", // 64px
            paddingTop: "8rem", // 128px
            paddingBottom: "4rem", // 64px
          }}>
          <div className="w-full max-w-4xl">
            {/* System status and coordinates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-between items-center"
              style={{ marginBottom: "6rem" }}>
              <div className="text-white/40 text-xs tracking-[0.5em] uppercase">
                POWER GENERATION OPTIMIZATION PLATFORM
              </div>
              <div className="text-white/40 text-xs font-mono">
                PWR:247 GEN:528
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              style={{ marginBottom: "4rem" }}>
              <div className="text-6xl lg:text-8xl font-light leading-[0.9] tracking-wide">
                <div
                  className="flex items-center gap-8 text-white/40"
                  style={{ marginBottom: "2rem" }}>
                  <span className="line-through">NET METERING</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
                <div className="text-white">
                  YOUR POWER.
                  <br />
                  <GradientText className="font-medium">YOUR WAY.</GradientText>
                </div>
              </div>
            </motion.div>

            {/* Subtitle and description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              }}
              className="max-w-3xl"
              style={{ marginBottom: "5rem" }}>
              <p
                className="text-xl lg:text-2xl text-white/80 leading-relaxed"
                style={{ marginBottom: "3rem" }}>
                Get paid for electricity from your{" "}
                <strong className="text-white font-medium">solar</strong>,{" "}
                <strong className="text-white font-medium">batteries</strong>,
                and{" "}
                <strong className="text-white font-medium">generators</strong>.
              </p>

              <div className="space-y-6">
                <p className="text-lg text-white/60 uppercase tracking-wide">
                  INTRODUCING STROBE
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  We go beyond net metering. We maximize the value of your power
                  assets by delivering resiliency, cash instead of bill credits,
                  and better returns through direct energy market sales.
                </p>
                <p className="text-lg text-primary font-medium">
                  Let us earn for you.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="flex flex-col sm:flex-row gap-6"
              style={{ marginBottom: "4rem" }}>
              <motion.a
                href="mailto:hello@strobepower.com"
                className={cn(
                  "border border-white/30 text-white font-semibold rounded-lg",
                  "hover:border-primary hover:bg-primary/10 transition-all duration-200",
                  "text-lg inline-flex items-center justify-center"
                )}
                style={{ padding: "1.25rem 2.5rem" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                Contact Us
              </motion.a>
            </motion.div>

            {/* Availability notice */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.0,
                ease: "easeOut",
              }}
              className="text-sm text-white/50">
              Now available in New York, with more regions coming soon.
            </motion.p>
          </div>
        </div>

        {/* Right accent */}
        <div className="hidden lg:flex w-32 border-l border-white/10 p-4 flex-col justify-between fixed right-0 top-24 h-[calc(100vh-6rem)] z-40">
          <div className="text-white/40 text-xs tracking-wider font-mono rotate-90 origin-left translate-x-8">
            NODE::STROBE.25.A
          </div>
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-full h-px bg-primary/20" />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
}
