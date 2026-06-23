import { Placeholder } from "@/components/ui/Placeholder";
import { WEDDING_VENUES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Weddings & Events | Royal Forest Resort",
  description: "Host your dream destination wedding in Kanpur. We offer grand open-air lawns and customized catering for events of all sizes."
};

export default function WeddingsOverviewPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-cream)] pt-24 md:pt-32">
      <div className="max-w-[1240px] mx-auto px-6 w-full mb-16 md:mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Celebrate</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-forest)] mb-6">A Venue as Grand as Your Occasion</h1>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto mb-6" />
          <p className="text-[var(--color-muted)] leading-relaxed text-balance">
            From intimate pre-wedding functions to majestic grand receptions of 1000+ guests, our versatile indoor and outdoor spaces provide the ultimate canvas. Paired with in-house hospitality and garden cottages for your guests, your destination wedding begins here.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {WEDDING_VENUES.map((venue, idx) => (
          <div key={venue.slug} className="group flex flex-col cursor-pointer">
            <div className="relative aspect-[4/3] md:aspect-square rounded-[2rem] overflow-hidden shadow-xl mb-8">
              <Placeholder src={venue.image} label={venue.imageLabel} ratio="4/3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="flex flex-col flex-1 px-4">
              <span className="text-[var(--color-gold)] italic mb-2 block font-serif text-lg">{venue.tagline}</span>
              <h2 className="font-serif text-3xl text-[var(--color-forest)] mb-4">{venue.name}</h2>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 flex-1">
                {venue.description}
              </p>
              
              <div className="flex items-center justify-between border-t border-[var(--color-gold)]/20 pt-6 mt-auto">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--color-muted)] mb-1">Capacity</span>
                  <span className="text-sm font-medium text-[var(--color-forest)]">{venue.capacity}</span>
                </div>
                
                <Link href={`/weddings/${venue.slug}`} className="group/link inline-flex items-center text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold">
                  <span className="relative">
                    Explore Details
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ArrowRight size={14} className="ml-2 text-[var(--color-gold)] transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
