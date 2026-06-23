"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { RESORT_FACTS } from "@/lib/constants";
import { openWhatsApp } from "@/lib/whatsapp";
import clsx from "clsx";

export function MultiChannelFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Desktop Float */}
      <div 
        className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end space-y-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover-only: Call button */}
        <div className={clsx(
          "flex flex-col space-y-3 transition-all duration-300 origin-bottom",
          isHovered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10 pointer-events-none"
        )}>
          {/* Call */}
          <a href={`tel:${RESORT_FACTS.phoneRaw}`} className="flex items-center space-x-3 group justify-end">
            <span className="bg-[var(--color-ivory)] text-[var(--color-forest)] px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
              Call Us
            </span>
            <div className="w-12 h-12 rounded-full bg-[var(--color-forest)]/70 backdrop-blur-md border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold)] hover:bg-[var(--color-forest)] transition-colors">
              <Phone size={20} />
            </div>
          </a>
        </div>

        {/* Always Visible: Email Button */}
        <a
          href={`mailto:${RESORT_FACTS.email}`}
          className="flex items-center space-x-3 group justify-end"
        >
          <span className="bg-[var(--color-ivory)] text-[var(--color-forest)] px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            {RESORT_FACTS.email}
          </span>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[#B8860B] shadow-[0_4px_15px_rgba(194,162,78,0.5)] border border-[var(--color-gold)]/60 flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
            <Mail size={20} />
          </div>
        </a>

        {/* Premium Pill 'Book Now' Base Button */}
        <button 
          type="button"
          onClick={() => openWhatsApp(`Hello Royal Forest Resort,\n\nI'd like to book a stay.\n\nName: \nCheck-in: \nCheck-out: \nGuests: \nCottage preference: \n\nThank you.`)}
          className="relative flex items-center justify-between rounded-[32px] bg-[var(--color-cream)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 border border-[var(--color-gold)]/20 group z-50 pl-2 pr-6 py-2 gap-4 overflow-hidden"
        >
          {/* Subtle pulse ring behind the pill */}
          <div className="absolute inset-0 rounded-[32px] bg-[var(--color-gold)] animate-ping opacity-10" style={{ animationDuration: '3s' }}></div>
          
          {/* Icon in gold ring */}
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-[var(--color-gold)] bg-white group-hover:scale-110 group-hover:border-[#25D366] transition-all duration-300">
            {/* Authentic WhatsApp Icon */}
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-[var(--color-forest)] group-hover:text-[#25D366] transition-colors duration-300">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </div>

          {/* Text */}
          <span className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-forest)] transition-colors pt-[2px]">
            Book Now
          </span>
        </button>
      </div>


      {/* Mobile Floating Email Pill - above sticky bar */}
      <a
        href={`mailto:${RESORT_FACTS.email}`}
        className="md:hidden fixed bottom-[72px] right-4 z-50 flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold)] to-[#B8860B] text-white px-4 py-2.5 rounded-full shadow-[0_4px_15px_rgba(194,162,78,0.5)] border border-[var(--color-gold)]/60"
      >
        <Mail size={16} />
        <span className="text-[10px] font-semibold tracking-widest uppercase">Email Us</span>
      </a>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-forest)] border-t border-[var(--color-gold)]/30 px-2 py-3 flex justify-between items-center pb-safe">
        <a href={`tel:${RESORT_FACTS.phoneRaw}`} className="flex-1 flex flex-col items-center justify-center text-[var(--color-ivory)] border-r border-[var(--color-gold)]/20">
          <Phone size={18} className="mb-1 text-[var(--color-gold)]" />
          <span className="text-[10px] uppercase tracking-wider">Call</span>
        </a>
        <button 
          type="button"
          onClick={() => openWhatsApp(`Hello Royal Forest Resort,\n\nI'd like to enquire about your venue.\n\nName: \nDate: \nGuests: \n\nThank you.`)}
          className="flex-1 flex flex-col items-center justify-center text-[var(--color-ivory)] border-r border-[var(--color-gold)]/20">
          <MessageCircle size={18} className="mb-1 text-[#25D366]" />
          <span className="text-[10px] uppercase tracking-wider">WhatsApp</span>
        </button>
        <a
          href={`mailto:${RESORT_FACTS.email}`}
          className="flex-1 flex flex-col items-center justify-center text-[var(--color-ivory)]"
        >
          <Mail size={18} className="mb-1 text-[var(--color-gold)]" />
          <span className="text-[10px] uppercase tracking-wider">Email</span>
        </a>
      </div>
    </>
  );
}
