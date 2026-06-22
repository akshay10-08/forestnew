import { Placeholder } from "@/components/ui/Placeholder";
import { COTTAGES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Stay & Cottages | Royal Forest Resort",
  description: "Experience nature and luxury in our Garden and Premium cottages at Royal Forest Resort, Kanpur."
};

export default function StayOverviewPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-ivory)] pt-24 md:pt-32">
      <div className="max-w-[1240px] mx-auto px-6 w-full mb-16 md:mb-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Accommodations</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-forest)] mb-6">Stay Amidst Nature</h1>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto mb-6" />
          <p className="text-[var(--color-muted)] leading-relaxed">
            Wake up to the sound of rustling leaves and step out directly into lush green gardens. Our cottages are designed to offer a peaceful retreat without compromising on modern luxury.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full flex flex-col gap-24 pb-24">
        {COTTAGES.map((cottage, idx) => (
          <div key={cottage.slug} className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
            
            <div className={`col-span-1 md:col-span-7 ${idx % 2 !== 0 ? 'md:col-start-6' : ''}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <Placeholder src={cottage.image} label={cottage.imageLabel} ratio="4/3" className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold shadow-sm">
                  {cottage.tag}
                </div>
              </div>
            </div>
            
            <div className={`col-span-1 md:col-span-5 flex flex-col items-start ${idx % 2 !== 0 ? 'md:col-start-1' : ''}`}>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-forest)] mb-2">{cottage.name}</h2>
              <span className="text-[var(--color-gold)] italic mb-6 block font-serif text-lg">{cottage.tagline}</span>
              
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                {cottage.description}
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 w-full border-y border-[var(--color-gold)]/20 py-6">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--color-muted)] mb-1">Capacity</span>
                  <span className="text-sm font-medium text-[var(--color-forest)]">{cottage.capacity}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--color-muted)] mb-1">Size</span>
                  <span className="text-sm font-medium text-[var(--color-forest)]">{cottage.size}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <Link href={`/stay/${cottage.slug}`} className="uppercase text-xs tracking-widest px-8 py-3.5 rounded-full bg-[var(--color-forest)] text-[var(--color-ivory)] hover:bg-[var(--color-forest-700)] transition-colors shadow-md">
                  View Details
                </Link>
                <button className="group inline-flex items-center text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold">
                  <span className="relative">
                    Book Now
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight size={14} className="ml-2 text-[var(--color-gold)] transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}
