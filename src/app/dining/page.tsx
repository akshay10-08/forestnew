import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dining | Royal Forest Resort",
  description: "A culinary journey at Royal Forest Resort. Multi-cuisine dining experiences for stays and grand events."
};

export default function DiningPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-cream)] pt-24 md:pt-32">
      <div className="max-w-[1240px] mx-auto px-6 w-full mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Culinary Experience</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-forest)] mb-6">Taste the Extraordinary</h1>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto mb-6" />
          <p className="text-[var(--color-muted)] leading-relaxed text-balance">
            Our expert chefs craft menus that celebrate local flavors and global cuisines. From in-room dining in your private cottage to expansive buffet spreads for your grand events.
          </p>
        </div>
      </div>

      <div className="w-full h-[50vh] md:h-[60vh] relative mb-24">
        <Placeholder src="/images/2.png" label="Grand Dining / Banquet Setup" ratio="21/9" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full pb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-3xl text-[var(--color-forest)] mb-6">In-House Dining</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            For our staying guests, we offer a curated menu of Indian, Continental, and Oriental cuisines. Enjoy your meals by the poolside, in the comfort of your cottage, or at our dedicated dining areas.
          </p>
          <ul className="space-y-4 text-sm text-[var(--color-muted)] mb-8">
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">Breakfast Buffets</li>
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">A La Carte Lunch & Dinner</li>
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">Special Dietary Menus (Pure Veg / Jain available)</li>
          </ul>
        </div>
        
        <div>
          <h2 className="font-serif text-3xl text-[var(--color-forest)] mb-6">Event Catering</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            A wedding or corporate event is incomplete without an unforgettable feast. Our catering team specializes in creating elaborate, customized menus for up to 1000+ guests.
          </p>
          <ul className="space-y-4 text-sm text-[var(--color-muted)] mb-8">
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">Live Counters & Action Stations</li>
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">Themed Buffets</li>
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">Gourmet Desserts</li>
          </ul>
          
          <Link href="/contact" className="group inline-flex items-center text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold mt-4">
            <span className="relative">
              Request Catering Menu
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
            </span>
            <ArrowRight size={14} className="ml-2 text-[var(--color-gold)] transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
