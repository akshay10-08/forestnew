"use client";

import { motion } from "framer-motion";
import { TreePine, Waves, Tent, Utensils, Flower2, Car, Zap, Sparkles, Smile, Wifi, BellRing, Coffee } from "lucide-react";

export function AmenitiesGrid() {
  const amenities = [
    { icon: TreePine, label: "Garden Cottages" },
    { icon: Waves, label: "Large Swimming Pool" },
    { icon: Wifi, label: "Free WiFi" },
    { icon: BellRing, label: "Room Service" },
    { icon: Sparkles, label: "Daily Housekeeping" },
    { icon: Coffee, label: "Complimentary Breakfast" },
    { icon: Utensils, label: "In-House Dining" },
    { icon: Flower2, label: "Landscaped Gardens" },
    { icon: Car, label: "Ample Parking" },
    { icon: Zap, label: "Power Backup" },
    { icon: Smile, label: "Kids-Friendly" },
    { icon: Tent, label: "Open-Air Lawns" },
    { icon: Sparkles, label: "Indoor Banquet" },
  ];

  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Resort Amenities</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-forest)] mb-6">Designed for Your Comfort</h2>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center group w-24 md:w-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-forest)] mb-4 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-forest)] transition-colors shadow-sm bg-[var(--color-ivory)]">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="text-xs md:text-sm font-medium tracking-wide text-[var(--color-forest)]">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
