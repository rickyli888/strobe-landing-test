"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CyclingTextProps {
  texts: string[];
  className?: string;
  duration?: number;
}

export function CyclingText({
  texts,
  className = "",
  duration = 2000,
}: CyclingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState<number>(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure the width of all texts to find the maximum width
  useEffect(() => {
    if (texts.length === 0 || !measureRef.current) return;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    // Get computed styles from the measure element
    const computedStyle = window.getComputedStyle(measureRef.current);
    context.font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;

    let maxMeasuredWidth = 0;
    texts.forEach((text) => {
      const metrics = context.measureText(text);
      maxMeasuredWidth = Math.max(maxMeasuredWidth, metrics.width);
    });

    setMaxWidth(Math.ceil(maxMeasuredWidth));
  }, [texts, className]);

  useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);

    return () => clearInterval(interval);
  }, [texts.length, duration]);

  if (texts.length === 0) return null;

  return (
    <>
      <span
        ref={measureRef}
        className={`invisible absolute ${className}`}
        aria-hidden="true"
        style={{ pointerEvents: "none" }}>
        {texts[0]}
      </span>

      {/* container with fixed width */}
      <span
        className={`relative inline-block ${className}`}
        style={{
          width: maxWidth > 0 ? `${maxWidth}px` : "auto",
          minWidth: maxWidth > 0 ? `${maxWidth}px` : "auto",
        }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="inline-block">
            {texts[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
