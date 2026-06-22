"use client";

import { Star } from "lucide-react";
import { RESORT_FACTS } from "@/lib/constants";

export function FeatureRibbon() {
  return (
    <div className="w-full bg-[var(--color-forest-700)] py-8 border-y border-[var(--color-gold)]/20 text-[var(--color-ivory)] overflow-hidden relative z-20">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-12 items-center text-xs md:text-sm tracking-widest uppercase opacity-90 text-center">
        <span>Garden Cottages</span>
        <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
        <span>One of Kanpur's Largest Pools</span>
        <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
        <span className="flex items-center">
          {RESORT_FACTS.rating} <Star size={14} className="mx-1 text-[var(--color-gold)] fill-[var(--color-gold)]" /> Google
        </span>
        <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
        <span>Lush Forest Setting</span>
        <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
        <span>Weddings & Stays</span>
      </div>
    </div>
  );
}
