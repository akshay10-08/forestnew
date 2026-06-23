"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import { ArrowRight, Wifi, Wind, Bath, BedDouble, Users, Maximize, Clock, Image as ImageIcon } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export function CottagesShowcase() {
  const cottages = [
    {
      id: "garden-cottage",
      name: "Garden Cottage",
      tag: "Garden-View",
      desc: "For couples & solo travellers",
      occupancy: "Sleeps 2",
      bed: "1 King Bed",
      size: "400 sq.ft",
      amenities: [
        { icon: <Wind size={14} />, label: "AC" },
        { icon: <Wifi size={14} />, label: "Free WiFi" },
        { icon: <Bath size={14} />, label: "Ensuite Bath" },
      ],
      imageLabel: "Room Interior - made bed",
      image: "/images/x.png"
    },
    {
      id: "premium-cottage",
      name: "Premium Cottage",
      tag: "Extra Space",
      desc: "For families & extended stays",
      occupancy: "Sleeps 2-4",
      bed: "1 King Bed + Sofa Bed",
      size: "600 sq.ft",
      amenities: [
        { icon: <Wind size={14} />, label: "AC" },
        { icon: <Wifi size={14} />, label: "Free WiFi" },
        { icon: <Bath size={14} />, label: "Ensuite Bath" },
      ],
      imageLabel: "Premium Cottage Interior",
      image: "/images/w.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Hotel Detail Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 text-xs uppercase tracking-widest text-[var(--color-forest)]/70 border-y border-[var(--color-gold)]/20 py-4">
          <div className="flex items-center"><Clock size={14} className="mr-2 text-[var(--color-gold)]" /> Check-in 12:00 PM</div>
          <div className="flex items-center"><Clock size={14} className="mr-2 text-[var(--color-gold)]" /> Check-out 11:00 AM</div>
          <div className="hidden sm:block w-[1px] h-4 bg-[var(--color-gold)]/30" />
          <div className="flex items-center"><Wifi size={14} className="mr-2 text-[var(--color-gold)]" /> Free WiFi</div>
          <div className="flex items-center"><Coffee size={14} className="mr-2 text-[var(--color-gold)]" /> Room Service</div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Accommodation</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-forest)]">Rooms & Cottages</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link href="/stay" className="uppercase text-xs tracking-widest px-6 py-3 rounded-full border border-[var(--color-forest)]/20 text-[var(--color-forest)] hover:bg-[var(--color-forest)]/5 transition-colors">
              View All Accommodations
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {cottages.map((cottage, idx) => (
            <motion.div 
              key={cottage.id}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                <Placeholder src={cottage.image} label={cottage.imageLabel} ratio="4/3" className="h-full group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[var(--color-forest)] font-semibold shadow-sm">
                  {cottage.tag}
                </div>
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest text-[var(--color-forest)] font-semibold shadow-sm flex items-center hover:bg-white transition-colors">
                  <ImageIcon size={14} className="mr-2 text-[var(--color-gold)]" />
                  View Gallery
                </button>
              </div>
              
              <div className="flex flex-col flex-1 px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-3xl text-[var(--color-forest)]">{cottage.name}</h3>
                </div>
                <span className="text-[var(--color-muted)] text-sm italic mb-4 block">{cottage.desc}</span>
                
                {/* Specs */}
                <div className="flex flex-wrap gap-4 mb-4 text-xs font-medium uppercase tracking-wider text-[var(--color-forest)]/70">
                  <div className="flex items-center"><Users size={14} className="mr-1.5 text-[var(--color-gold)]" /> {cottage.occupancy}</div>
                  <div className="flex items-center"><BedDouble size={14} className="mr-1.5 text-[var(--color-gold)]" /> {cottage.bed}</div>
                  <div className="flex items-center"><Maximize size={14} className="mr-1.5 text-[var(--color-gold)]" /> {cottage.size}</div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {cottage.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center text-xs text-[var(--color-forest)]/80 bg-[var(--color-forest)]/5 px-3 py-1.5 rounded-full">
                      {amenity.icon}
                      <span className="ml-1.5">{amenity.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-[var(--color-gold)]/20 pt-6">
                  <button 
                    onClick={() => openWhatsApp(`Hello Royal Forest Resort,\n\nI'd like to book the ${cottage.name}.\n\nCheck-in: \nCheck-out: \nGuests: \n\nThank you.`)}
                    className="flex-1 uppercase text-xs tracking-widest px-6 py-3.5 rounded-xl bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-soft)] hover:text-[var(--color-forest)] transition-colors shadow-md text-center font-semibold">
                    Book a Stay
                  </button>
                  <Link href={`/stay/${cottage.id}`} className="flex-1 group/link inline-flex items-center justify-center uppercase text-xs tracking-widest px-6 py-3.5 rounded-xl border border-[var(--color-forest)]/20 text-[var(--color-forest)] hover:bg-[var(--color-forest)]/5 transition-colors font-semibold">
                    View Room
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
