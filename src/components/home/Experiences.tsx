"use client";

import { motion } from "framer-motion";

export function Experiences() {
  const experiences = [
    "Poolside Lounging",
    "Garden Walks",
    "Pre-wedding Shoots",
    "Bonfire Evenings",
    "Family Getaways",
    "Photography Spots"
  ];

  return (
    <section className="py-24 bg-[var(--color-forest)] text-[var(--color-ivory)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-moss)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
      
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[var(--color-gold)]/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-soft)] mb-4 block font-semibold">Leisure</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ivory)]">Curated Experiences</h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--color-ivory)]/70 mt-6 md:mt-0 leading-relaxed text-balance">
            More than just a stay. Immerse yourself in the tranquility of nature with activities designed to help you unwind and connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="flex items-start group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="font-serif text-3xl text-[var(--color-gold)]/40 mr-6 mt-1 transition-colors group-hover:text-[var(--color-gold)]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 border-b border-[var(--color-ivory)]/10 pb-4 group-hover:border-[var(--color-gold)] transition-colors">
                <h3 className="text-lg tracking-wide">{exp}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
