"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, Map, HeartHandshake, Leaf } from "lucide-react";

const SERVICES = [
  {
    icon: <HeartHandshake size={24} />,
    title: "Warm 24�-7 Hospitality",
    description: "Attentive, personalized service at all hours."
  },
  {
    icon: <Map size={24} />,
    title: "Concierge & Local Trips",
    description: "Guidance for exploring Bithoor and beyond."
  },
  {
    icon: <Coffee size={24} />,
    title: "Breakfast Among the Gardens",
    description: "Start your day with fresh morning air."
  },
  {
    icon: <Leaf size={24} />,
    title: "Peaceful, Private Cottages",
    description: "Your quiet sanctuary in the forest."
  }
];

export function HospitalityBand() {
  return (
    <section className="py-24 bg-[var(--color-forest)] text-[var(--color-cream)] w-full px-6 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1">
            <motion.span 
              className="text-xs uppercase tracking-widest text-[var(--color-gold)] mb-6 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              5-Star Service
            </motion.span>
            <motion.h2 
              className="font-serif text-4xl md:text-5xl text-[var(--color-ivory)] mb-8 leading-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Your Home <br className="hidden md:block" />
              <span className="text-[var(--color-gold)] italic">in the Forest.</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-[var(--color-cream)]/80 mb-12 font-light max-w-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              More than a room - a calm, green retreat where you&apos;re looked after from arrival to farewell.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  className="flex flex-col space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)]">
                    {service.icon}
                  </div>
                  <h4 className="font-medium text-sm tracking-wide text-[var(--color-ivory)]">{service.title}</h4>
                  <p className="text-xs text-[var(--color-cream)]/60 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div 
            className="order-1 lg:order-2 relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/y.jpeg"
              alt="Hospitality and service at Royal Forest Resort"
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="%2316301f"><rect width="100%" height="100%"/></svg>';
              }}
            />
            <div className="absolute inset-0 border border-[var(--color-gold)]/20 rounded-2xl pointer-events-none mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
