import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strobe Power",
  description:
    "Strobe maximizes the value of your power assets by delivering resiliency, cash instead of bill credits, and better returns through direct energy market sales. Now available in New York.",
  keywords:
    "solar energy, battery storage, energy monetization, net metering, energy markets, power generation, renewable energy",
  authors: [{ name: "Strobe" }],
  creator: "Strobe",
  publisher: "Strobe",
  openGraph: {
    title: "Strobe – Your Power. Your Way.",
    description:
      "Get paid for electricity from your solar, batteries, and generators. We go beyond net metering.",
    url: "https://strobepower.com",
    siteName: "Strobe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strobe – Your Power. Your Way.",
    description:
      "Get paid for electricity from your solar, batteries, and generators.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
