"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import { RESORT_FACTS } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[var(--color-forest)]">
      <div className="absolute inset-0 z-0">
        <Placeholder src="/images/pool-picnic.png" label="Twilight Pool/Lawn Image" ratio="16/9" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)] via-black/40 to-transparent z-0" />
      
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-ivory)] mb-8 leading-tight text-shadow-hero">
          Your escape into <br/>
          <span className="italic text-[var(--color-gold)] font-light">nature</span> begins here.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
          <button className="w-full sm:w-auto uppercase text-xs md:text-sm tracking-widest px-8 py-4 rounded-full bg-[var(--color-ivory)] text-[var(--color-forest)] hover:bg-white transition-colors font-semibold shadow-xl">
            Book a Stay
          </button>
          <a href={RESORT_FACTS.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto uppercase text-xs md:text-sm tracking-widest px-8 py-4 rounded-full bg-[#25D366] text-white hover:bg-[#20b858] transition-colors font-semibold shadow-xl flex justify-center items-center">
            Enquire on WhatsApp
          </a>
        </div>

        {/* Premium Email Strip */}
        <motion.a
          href={`mailto:${RESORT_FACTS.email}`}
          className="mt-10 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-[var(--color-gold)]/40 px-8 py-4 rounded-full text-[var(--color-ivory)] hover:bg-white/20 hover:border-[var(--color-gold)] transition-all group shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-gold)] flex-shrink-0">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold">Email Us</span>
          <span className="w-[1px] h-4 bg-white/30" />
          <span className="text-sm font-medium tracking-wide group-hover:text-[var(--color-gold)] transition-colors">{RESORT_FACTS.email}</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
