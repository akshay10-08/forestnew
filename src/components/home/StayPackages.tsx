"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const PACKAGES = [
  {
    id: "weekend",
    title: "Weekend Forest Escape",
    description: "A quick, refreshing getaway into nature.",
    image: "/images/c.png", // [Package Image 1]
    inclusions: [
      "1 Night Stay",
      "Complimentary Breakfast",
      "Pool Access",
      "Late Check-out"
    ]
  },
  {
    id: "family",
    title: "Family Garden Getaway",
    description: "Spacious comfort for the whole family.",
    image: "/images/a.png", // [Package Image 2]
    inclusions: [
      "Premium Cottage",
      "Family Breakfast",
      "Kids-Friendly Amenities",
      "Nature Walk"
    ]
  },
  {
    id: "romantic",
    title: "Romantic Cottage Retreat",
    description: "A private, serene escape for two.",
    image: "/images/b.png", // [Package Image 3]
    inclusions: [
      "Private Sit-out",
      "Candlelit Dinner",
      "Welcome Drinks",
      "Garden Access"
    ]
  }
];

export function StayPackages() {
  return (
    <section className="py-24 bg-[var(--color-cream)] w-full px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="font-serif italic text-xl md:text-2xl text-[var(--color-gold)] mb-4 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Curated For You
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl md:text-5xl text-[var(--color-forest)] mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Stay Packages & Offers
          </motion.h2>
          <motion.div 
            className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#EAE3D5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3 }}
            >
              <div className="relative h-64 w-full overflow-hidden bg-[var(--color-forest)]/10">
                {/* Fallback color for missing placeholders */}
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="%23EAE3D5"><rect width="100%" height="100%"/></svg>';
                  }}
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-[var(--color-forest)] mb-2">{pkg.title}</h3>
                <p className="text-sm text-[var(--color-forest)]/70 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-center text-sm text-[var(--color-forest)]/80">
                      <Check size={14} className="text-[var(--color-gold)] mr-3 flex-shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openWhatsApp(`Hello Royal Forest Resort,\n\nI'm interested in the "${pkg.title}" package.\n\nCould you please share availability and rates?\n\nName: \nCheck-in Date: \nGuests: \n\nThank you.`)}
                  className="w-full flex items-center justify-between uppercase text-xs tracking-widest px-6 py-4 rounded-xl bg-[var(--color-forest)] text-[var(--color-ivory)] hover:bg-[var(--color-gold)] transition-colors"
                >
                  <span>Enquire / Book</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
