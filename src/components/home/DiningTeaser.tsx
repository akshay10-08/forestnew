"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";

export function DiningTeaser() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ivory)] relative overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-square md:aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
            <Placeholder src="/images/2.png" label="Plated Cuisine / Dining Image" ratio="4/5" className="h-full object-cover" />
          </div>
        </motion.div>
        
        <motion.div 
          className="order-2 flex flex-col items-start"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 font-semibold">Dining</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.2] text-[var(--color-forest)] mb-8">
            A Feast for the <br/>
            <span className="italic text-[var(--color-moss)]">Senses</span>
          </h2>
          
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mb-8" />
          
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            From relaxed poolside lunches to grand wedding banquets, our multi-cuisine offerings are crafted to delight. We cater to every palate, offering everything from local delicacies to international favorites.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-10 font-medium">
            Request a custom menu & quote for your special events.
          </p>
          
          <Link href="/dining" className="uppercase text-xs tracking-widest px-8 py-3.5 rounded-full border border-[var(--color-forest)]/20 text-[var(--color-forest)] hover:bg-[var(--color-forest)]/5 transition-colors">
            Explore Dining
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
