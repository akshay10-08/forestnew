"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
  const images = [
    { ratio: "4/5", label: "Gallery Image 1" },
    { ratio: "1/1", label: "Gallery Image 2" },
    { ratio: "16/9", label: "Gallery Image 3" },
    { ratio: "1/1", label: "Gallery Image 4" },
  ];

  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Gallery</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-forest)]">Moments at the Resort</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link href="/gallery" className="uppercase text-xs tracking-widest px-6 py-3 rounded-full border border-[var(--color-forest)]/20 text-[var(--color-forest)] hover:bg-[var(--color-forest)]/5 transition-colors inline-flex items-center">
              View Full Gallery
              <ArrowRight size={14} className="ml-2 text-[var(--color-gold)]" />
            </Link>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Placeholder src="/images/cottage-exterior-1.jpg" label={img.label} ratio={img.ratio} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
