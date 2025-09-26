"use client";

import { motion } from "framer-motion";

const FAQItem = ({
  question,
  answer,
  delay = 0,
}: {
  question: string;
  answer: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="rounded-lg bg-white/5 border border-white/10 hover:border-primary/20 transition-all duration-300"
    style={{ padding: "1.5rem" }}>
    <h4 className="text-white font-medium" style={{ marginBottom: "0.75rem" }}>
      {question}
    </h4>
    <p className="text-white/70 text-sm leading-relaxed">{answer}</p>
  </motion.div>
);

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-background-paper overflow-hidden"
      style={{ paddingTop: "2rem", paddingBottom: "6rem" }}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
          className="text-center w-full flex flex-col items-center"
          style={{ marginBottom: "4rem" }}>
          <h2
            className="text-4xl md:text-5xl font-light text-white"
            style={{ marginBottom: "1.5rem" }}>
            Frequently Asked{" "}
            <span className="text-primary font-medium">Questions</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about Strobe and energy
            monetization.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <FAQItem
            question="What if I'm already enrolled in a net metering program?"
            answer="Strobe works alongside existing programs to maximize your returns through energy market participation."
            delay={0.1}
          />
          <FAQItem
            question="How much can I expect to earn?"
            answer="Earnings vary based on your setup and location. Use our assessment tool for personalized estimates."
            delay={0.2}
          />
          <FAQItem
            question="How does this compare to demand response?"
            answer="Strobe provides continuous optimization and revenue generation, not just peak demand events."
            delay={0.3}
          />
          <FAQItem
            question="Where is Strobe available?"
            answer="Currently available in New York, with expansion to additional regions planned for 2025."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
