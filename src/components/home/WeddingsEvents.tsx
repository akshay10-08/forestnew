"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WeddingsEvents() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ivory)]">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="order-2 md:order-1 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 font-semibold">Beyond The Stay · Celebrations</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.2] text-[var(--color-forest)] mb-8">
              Where Dreams Find <br/>Their <span className="italic text-[var(--color-moss)]">Stage</span>
            </h2>
            
            <div className="w-12 h-[1px] bg-[var(--color-gold)] mb-8" />
            
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Celebrate life's biggest moments surrounded by nature. From intimate gatherings to grand celebrations of 400+ guests, our open-air lawns under the trees and elegant indoor banquets provide the perfect backdrop.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-10">
              With garden cottages for your guests, you can host a true destination wedding without ever leaving Kanpur.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Link href="/weddings" className="group inline-flex items-center space-x-3 text-[var(--color-forest)]">
                <span className="uppercase text-sm tracking-widest font-medium relative">
                  Explore Venues
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowRight size={16} className="text-[var(--color-gold)] transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-tl-[100px] overflow-hidden shadow-2xl group">
              <Placeholder src="/images/d.jpeg" label="Open-Air Lawn / Wedding Setup Image" ratio="4/5" className="h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[var(--color-forest)] to-transparent">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-[var(--color-ivory)]">
                  <span className="block text-xs uppercase tracking-widest text-[var(--color-gold)] mb-1">Grand Lawn</span>
                  <span className="font-serif text-xl">Up to 400+ Guests</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
