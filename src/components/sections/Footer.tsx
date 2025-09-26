"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/theme";
import { SpinningText } from "@/components/ui/SpinningText";

const FooterLink = ({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <motion.a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-1"
    whileHover={{ x: 2 }}>
    {children}
    {external && <ExternalLink size={14} />}
  </motion.a>
);

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-background to-background-paper border-t border-white/10">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div
        className="relative z-10 w-full"
        style={{
          marginLeft: "10rem",
          marginRight: "12rem",
          paddingLeft: "0",
          paddingRight: "0",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          maxWidth: "calc(100vw - 22rem)",
        }}>
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-between gap-12"
          style={{ marginBottom: "5rem" }}>
          <div className="flex-1">
            <h2
              className="text-3xl md:text-4xl font-light text-white"
              style={{ marginBottom: "1.5rem" }}>
              Monetize your power generation{" "}
              <span className="text-primary font-medium">now</span>
            </h2>
            <p
              className="text-lg text-white/70 max-w-2xl leading-relaxed"
              style={{ marginBottom: "2rem" }}>
              Reach out to optimize your power assets. Now available in New
              York, with more regions coming soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <motion.a
                href="https://explore.strobepower.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "bg-primary text-background font-semibold rounded-lg",
                  "hover:bg-primary-dark transition-all duration-300",
                  "text-base flex items-center gap-2 shadow-lg"
                )}
                style={{ padding: "0.75rem 1.5rem" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Try our Opportunity Assessment tool
                <ExternalLink size={16} />
              </motion.a>

              <motion.a
                href="mailto:hello@strobepower.com"
                className={cn(
                  "border-2 border-white/20 text-white font-semibold rounded-lg",
                  "hover:border-primary hover:text-primary transition-all duration-300",
                  "text-base flex items-center gap-2"
                )}
                style={{ padding: "0.75rem 1.5rem" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Mail size={16} />
                Contact Us
              </motion.a>
            </div>
          </div>

          {/* Spinning Text on the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 hidden lg:block">
            <SpinningText
              className="w-56 h-56 text-primary text-lg font-bold"
              duration={20}
              radius={6}>
              POWER • GENERATION • OPTIMIZATION • STROBE •
            </SpinningText>
          </motion.div>
        </motion.div>

        {/* Footer content */}
        <div
          className="grid md:grid-cols-4 gap-8"
          style={{ marginBottom: "3rem" }}>
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2">
            <div style={{ marginBottom: "1.5rem" }}>
              <Image
                src="/strobe_logo.svg"
                alt="Strobe"
                width={120}
                height={36}
                className="filter brightness-0 invert"
              />
            </div>
            <p
              className="text-white/70 leading-relaxed max-w-md"
              style={{ marginBottom: "1.5rem" }}>
              Strobe maximizes the value of your power assets by delivering
              resiliency, cash instead of bill credits, and better returns
              through direct energy market sales.
            </p>
            <div className="text-sm text-white/50">
              <p>Now available in New York</p>
              <p>More regions coming soon</p>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4">
            <h4
              className="text-white font-semibold"
              style={{ marginBottom: "1rem" }}>
              Get Started
            </h4>
            <div className="space-y-3">
              <FooterLink href="https://explore.strobepower.com" external>
                Opportunity Assessment
              </FooterLink>
              <FooterLink href="mailto:hello@strobepower.com" external>
                Join Our Network
              </FooterLink>
              <FooterLink href="mailto:hello@strobepower.com" external>
                Contact Support
              </FooterLink>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4">
            <h4
              className="text-white font-semibold"
              style={{ marginBottom: "1rem" }}>
              Contact
            </h4>
            <div className="space-y-3">
              <FooterLink href="mailto:hello@strobepower.com" external>
                hello@strobepower.com
              </FooterLink>
              <div className="text-white/70">
                <p>For billing support and</p>
                <p>partnership inquiries</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ paddingTop: "2rem" }}>
          <div className="text-white/50 text-sm">
            © 2025 Strobe. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <FooterLink href="mailto:hello@strobepower.com">
              Privacy Policy
            </FooterLink>
            <FooterLink href="mailto:hello@strobepower.com">
              Terms of Service
            </FooterLink>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
