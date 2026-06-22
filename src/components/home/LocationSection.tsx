"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { RESORT_FACTS } from "@/lib/constants";

export function LocationSection() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 font-semibold">Location</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.2] text-[var(--color-forest)] mb-8">
              A Green Escape <br/>
              <span className="italic text-[var(--color-moss)]">Minutes</span> from the City
            </h2>
            
            <div className="w-12 h-[1px] bg-[var(--color-gold)] mb-8" />
            
            <p className="text-[var(--color-muted)] leading-relaxed mb-6 font-medium">
              {RESORT_FACTS.address}
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-10">
              Situated on the scenic Bithoor Road near the Ganga, we offer a peaceful, leafy escape that is easily accessible from central Kanpur.
            </p>

            <div className="flex flex-col gap-4 w-full sm:w-auto mb-10">
              <a href={RESORT_FACTS.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 text-[var(--color-forest)] group border border-[var(--color-forest)]/20 px-6 py-3 rounded-xl hover:bg-[var(--color-forest)]/5 transition-colors">
                <Navigation size={18} className="text-[var(--color-gold)]" />
                <span className="text-sm tracking-wide font-medium">Get Directions on Google Maps</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-[var(--color-gold)]/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] block mb-1">Railway Station</span>
                <span className="text-sm font-medium text-[var(--color-forest)]">~24 km away</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] block mb-1">Airport</span>
                <span className="text-sm font-medium text-[var(--color-forest)]">~32 km away</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative bg-black/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe 
              src="https://maps.google.com/maps?q=26.6102592,80.2569677&hl=en&z=15&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
