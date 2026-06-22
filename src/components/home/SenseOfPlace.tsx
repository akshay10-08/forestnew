"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";

export function SenseOfPlace() {
  return (
    <section className="py-24 md:py-32 max-w-[1024px] mx-auto px-6 overflow-hidden bg-[var(--color-ivory)]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        <motion.div 
          className="col-span-1 md:col-span-6 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl relative">
            <Placeholder src="/images/a.png" label="Resort Aerial / Garden Image" ratio="4/5" className="h-full object-cover transition-transform duration-700" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-tl-[100px] rounded-br-[100px] pointer-events-none" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-[var(--color-gold)] rounded-full opacity-30 pointer-events-none" />
        </motion.div>
        
        <motion.div 
          className="col-span-1 md:col-span-6 flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 font-semibold">Where Nature Meets Luxury</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.2] text-[var(--color-forest)] mb-8">
            A Green Escape on the <br className="hidden md:block"/>
            <span className="italic text-[var(--color-moss)]">Scenic</span> Bithoor Road
          </h2>
          
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mb-8" />
          
          <p className="text-[var(--color-muted)] leading-relaxed mb-6 text-balance">
            On the leafy Bithoor Road near the Ganga, Royal Forest Resort is a green place to stay - cottages that open onto gardens, one of Kanpur's largest pools, and the quiet of the forest, minutes from the city.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-10 text-balance">
            Come for a weekend; stay for the calm. And for those planning a grand celebration, our estate also offers sprawling open-air venues for a destination wedding without leaving the city.
          </p>
          
          <Link href="/about" className="group inline-flex items-center space-x-3">
            <span className="uppercase text-sm tracking-widest text-[var(--color-forest)] group-hover:text-[var(--color-gold)] transition-colors font-medium relative">
              Discover the Resort
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="w-8 h-8 rounded-full border border-[var(--color-forest)]/20 flex items-center justify-center group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)] transition-colors">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
