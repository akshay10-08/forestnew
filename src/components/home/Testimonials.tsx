"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      text: "A beautiful green oasis. The swimming pool is huge and very well maintained. The perfect weekend staycation away from the city noise.",
      author: "Vikram S.",
      type: "Staycation"
    },
    {
      text: "The perfect destination wedding venue in Kanpur. The open-air lawns under the trees were exactly what we wanted, and our guests loved the garden cottages.",
      author: "Priya & Rahul",
      type: "Wedding Booking"
    },
    {
      text: "Excellent food and amazing hospitality. The staff went out of their way to make our family gathering special.",
      author: "Neha M.",
      type: "Event Booking"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-forest-700)] text-[var(--color-ivory)]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-soft)] mb-4 block font-semibold">Reviews</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ivory)] mb-6">Guest Experiences</h2>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              className="bg-[var(--color-forest)]/50 border border-[var(--color-ivory)]/10 p-8 rounded-2xl flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex space-x-1 mb-6 text-[var(--color-gold)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm md:text-base leading-relaxed opacity-90 mb-8 italic flex-1">
                "{rev.text}"
              </p>
              <div className="mt-auto">
                <span className="block font-medium tracking-wide">{rev.author}</span>
                <span className="text-xs uppercase tracking-widest text-[var(--color-gold-soft)] opacity-80 mt-1 block">{rev.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
