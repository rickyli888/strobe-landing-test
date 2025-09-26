"use client";

import { motion } from "framer-motion";
import { Search, Users, DollarSign, ArrowRight } from "lucide-react";
import { cn } from "@/lib/theme";
import { CyclingText } from "@/components/ui/CyclingText";

const ProcessStep = ({
  step,
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  step: number;
  title: string;
  description: string;
  icon: any;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="relative group h-full">
    {/* Step number */}
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
      {step}
    </div>

    {/* Card */}
    <div
      className={cn(
        "relative rounded-md border border-white/10 backdrop-blur-sm",
        "hover:border-primary/30 transition-all duration-500",
        "hover:scale-105 cursor-pointer",
        "bg-gradient-to-br from-white/5 to-transparent",
        "h-full flex flex-col"
      )}
      style={{ padding: "2rem", minHeight: "320px" }}>
      {/* Icon */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon size={32} className="text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3
          className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300"
          style={{ marginBottom: "1rem" }}>
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed text-lg flex-1">
          {description}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>

    {/* Arrow connector (except for last step) */}
    {step < 3 && (
      <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
        <ArrowRight
          size={24}
          className="text-primary/60 animate-pulse-energy"
        />
      </div>
    )}
  </motion.div>
);

const StatsCard = ({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="text-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300"
    style={{ padding: "1.5rem" }}>
    <div
      className="text-3xl md:text-4xl font-bold text-primary"
      style={{ marginBottom: "0.5rem" }}>
      {value}
    </div>
    <div className="text-white/70 text-sm uppercase tracking-wide">{label}</div>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-background to-background-paper overflow-hidden"
      style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
      </div>

      <div
        className="relative z-10 w-full"
        style={{
          marginLeft: "10rem",
          marginRight: "12rem",
          paddingLeft: "0",
          paddingRight: "0",
          maxWidth: "calc(100vw - 22rem)",
        }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: "6rem" }}>
          <h2
            className="text-4xl md:text-5xl font-light text-white"
            style={{ marginBottom: "2rem" }}>
            How it <span className="text-primary font-medium">works</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            We manage your energy assets and ensure they always operate at peak
            performance.
          </p>
        </motion.div>

        {/* Process steps */}
        <div
          className="grid lg:grid-cols-3 gap-12 lg:gap-20"
          style={{ marginBottom: "8rem" }}>
          <ProcessStep
            step={1}
            title="Explore your potential"
            description="Use our free AI-powered tool to discover how much revenue you could generate with Strobe."
            icon={Search}
            delay={0.2}
          />
          <ProcessStep
            step={2}
            title="Join our network"
            description="Reach out, and we'll connect you to the Strobe network so you can start earning from your electricity."
            icon={Users}
            delay={0.4}
          />
          <ProcessStep
            step={3}
            title="Start earning"
            description="We're with you every step—optimizing performance, flagging issues, and maximizing your returns."
            icon={DollarSign}
            delay={0.6}
          />
        </div>

        {/* What you'll get section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: "4rem" }}>
          <h3
            className="text-4xl font-light text-white"
            style={{ marginBottom: "1.5rem" }}>
            <CyclingText
              texts={["Monetize", "Optimize", "Maximize"]}
              className="text-primary font-medium"
              duration={3000}
            />{" "}
            your power generation
          </h3>
          <p
            className="text-xl text-white/70 max-w-4xl leading-relaxed"
            style={{ marginBottom: "3rem" }}>
            We participate in energy markets on your behalf, ensuring you get
            the best price for the electricity you produce.
          </p>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green/30 transition-all duration-300"
              style={{ padding: "2rem" }}>
              <div
                className="w-12 h-12 bg-green/20 rounded-lg flex items-center justify-center mx-auto"
                style={{ marginBottom: "1rem" }}>
                <div className="w-6 h-6 bg-green rounded-full animate-pulse-energy" />
              </div>
              <h4
                className="text-xl font-semibold text-white"
                style={{ marginBottom: "0.75rem" }}>
                Automated operations
              </h4>
              <p className="text-white/70">
                Get better performance and less downtime at a fraction of the
                cost.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-secondary/30 transition-all duration-300"
              style={{ padding: "2rem" }}>
              <div
                className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto"
                style={{ marginBottom: "1rem" }}>
                <div className="w-6 h-6 bg-secondary rounded-full animate-pulse-energy" />
              </div>
              <h4
                className="text-xl font-semibold text-white"
                style={{ marginBottom: "0.75rem" }}>
                Resiliency
              </h4>
              <p className="text-white/70">
                We seize market opportunities while ensuring your energy needs
                are met.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple/30 transition-all duration-300"
              style={{ padding: "2rem" }}>
              <div
                className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center mx-auto"
                style={{ marginBottom: "1rem" }}>
                <div className="w-6 h-6 bg-purple rounded-full animate-pulse-energy" />
              </div>
              <h4
                className="text-xl font-semibold text-white"
                style={{ marginBottom: "0.75rem" }}>
                Power sales
              </h4>
              <p className="text-white/70">
                We sell your electricity in energy markets, giving you superior
                returns.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatsCard value="24/7" label="Monitoring" delay={0.1} />
          <StatsCard value="15%+" label="Better Returns" delay={0.2} />
          <StatsCard value="100%" label="Automated" delay={0.3} />
          <StatsCard value="NY" label="Available Now" delay={0.4} />
        </motion.div>
      </div>
    </section>
  );
}
