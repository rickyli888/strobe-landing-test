"use client";

import React, { memo } from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const GradientText = memo(
  ({
    children,
    className = "",
    colors = ["#FBBE30", "#FBE538", "#F47D1C", "#E85D00"],
    speed = 1,
  }: GradientTextProps) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
        colors[0]
      })`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    };

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true">
          {children}
        </span>
      </span>
    );
  }
);

GradientText.displayName = "GradientText";
