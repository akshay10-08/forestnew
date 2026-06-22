"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";

export function OccasionTiles() {
  const occasions = [
    { title: "Weddings", slug: "hindu", ratio: "4/5", image: "/images/1.png" },
    { title: "Receptions", slug: "reception", ratio: "1/1", image: "/images/d.jpeg" },
    { title: "Sangeet & Mehndi", slug: "sangeet-mehndi-haldi", ratio: "1/1", image: "/images/g.jpeg" },
    { title: "Corporate", slug: "corporate", ratio: "4/5", image: "/images/h.jpeg" },
  ];

  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {occasions.map((occ, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full"
            >
              <Link href={`/weddings/${occ.slug}`} className="group block relative rounded-2xl overflow-hidden h-full">
                <Placeholder src={occ.image} label={`${occ.title} Image`} ratio={occ.ratio} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <h3 className="font-serif text-lg md:text-xl text-[var(--color-ivory)] text-shadow-gold">{occ.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
