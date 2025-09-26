"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/theme";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-white/10">
      <div
        className="flex items-center justify-between w-full"
        style={{
          paddingLeft: "4rem",
          paddingRight: "4rem",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
        }}>
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/strobe_logo.svg"
            alt="Strobe"
            width={140}
            height={42}
            className="filter brightness-0 invert"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center" style={{ gap: "3rem" }}>
          <a
            href="#how-it-works"
            className="text-white/70 hover:text-primary transition-colors duration-200 font-medium text-base">
            How it works
          </a>
          <a
            href="#benefits"
            className="text-white/70 hover:text-primary transition-colors duration-200 font-medium text-base">
            Benefits
          </a>
          <a
            href="mailto:hello@strobepower.com"
            className="text-white/70 hover:text-primary transition-colors duration-200 font-medium text-base">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <ShimmerButton
            onClick={() =>
              window.open("https://explore.strobepower.com", "_blank")
            }>
            Get Started
          </ShimmerButton>
        </motion.div>
      </div>
    </motion.header>
  );
}
