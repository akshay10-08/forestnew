"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";

export function PoolFeatureBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax ±8% Y
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[80vh] md:h-[90vh] min-h-[600px] overflow-hidden bg-[var(--color-forest)] flex items-center justify-center">
      
      <motion.div 
        className="absolute inset-[-10%] w-[120%] h-[120%] pointer-events-none" 
        style={isReducedMotion ? {} : { y }}
      >
        <Placeholder src="/images/pool-picnic.png" label="Swimming Pool Image" ratio="16/9" className="w-full h-full object-cover opacity-60" />
      </motion.div>
      
      {/* Overlay gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)] via-black/20 to-[var(--color-forest)]/30" />
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center text-[var(--color-ivory)] mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-soft)] mb-6 block font-semibold drop-shadow-md">
            The Pool & Grounds
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8 text-shadow-hero">
            Dive into one of <br className="hidden md:block"/>
            Kanpur's largest pools - <br className="hidden md:block"/>
            <span className="italic text-[var(--color-gold)] font-light">then let the gardens do the rest.</span>
          </h2>
          <p className="text-sm md:text-base uppercase tracking-[0.15em] opacity-90 text-shadow-gold">
            Resort-style Pool · Landscaped Pathways · Poolside Lounging
          </p>
        </motion.div>
      </div>
    </section>
  );
}
