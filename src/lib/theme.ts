// Strobe theme constants and utilities
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Strobe Color Palette
export const strobeColors = {
  // Primary colors
  primary: {
    main: "#FBBE30", // Strobe yellow primary
    light: "#FBE538", // Lighter yellow
    dark: "#F47D1C", // Energy orange
  },
  // Secondary colors
  secondary: {
    main: "#17A2B8", // Teal primary
    light: "#69BAFF", // Light blue
    dark: "#3368D8", // Dark blue
  },
  // Purple accents
  purple: {
    main: "#6D33B5", // Purple primary
    light: "#9971CC", // Light purple
    dark: "#4C1F9F", // Dark purple
  },
  // Energy accent
  energy: {
    main: "#F47D1C", // Energy orange primary
    light: "#FF8C42", // Light orange
    dark: "#E85D00", // Dark orange
  },
  // Success/savings
  success: {
    main: "#28A745", // Green primary
    light: "#6BCF7F", // Light green
    dark: "#1E7E34", // Dark green
  },
  // Background colors (dark theme)
  background: {
    default: "#080808",
    paper: "#0D0D0D",
    chart: "#121212",
  },
  // Text colors
  text: {
    primary: "#FEFEFE",
    secondary: "#F8F8F8",
    disabled: "#BBBBBB",
  },
  // Divider and borders
  divider: "#212121",
  // Action colors
  action: {
    active: "#FBBE30",
    hover: "rgba(251, 229, 56, 0.08)",
    selected: "#F47D1C",
  },
} as const;

// Energy sector specific colors
export const energyColors = {
  solar: "#FFB800", // Solar yellow
  battery: "#00C851", // Battery green
  generator: "#FF6B35", // Generator orange
  grid: "#007BFF", // Grid blue
  savings: "#28A745", // Savings green
  revenue: "#17A2B8", // Revenue teal
} as const;

// Typography scale (Aeonik font family)
export const typography = {
  fontFamily: {
    primary: "'Aeonik', 'Helvetica', sans-serif",
    mono: "'Aeonik Fono', 'Helvetica', sans-serif",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "42px",
    "4xl": "56px",
    "5xl": "75px",
    "6xl": "100px",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// Animation constants
export const animations = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const;

// Spacing scale
export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
  "5xl": "8rem", // 128px
} as const;

// Breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
