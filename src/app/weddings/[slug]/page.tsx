import { notFound } from "next/navigation";
import { WEDDING_VENUES } from "@/lib/data";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return WEDDING_VENUES.map((venue) => ({
    slug: venue.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const venue = WEDDING_VENUES.find((v) => v.slug === params.slug);
  if (!venue) return { title: 'Not Found' };
  
  return {
    title: `${venue.name} | Royal Forest Resort`,
    description: venue.description,
  };
}

export default function WeddingVenueDetailPage({ params }: { params: { slug: string } }) {
  const venue = WEDDING_VENUES.find((v) => v.slug === params.slug);

  if (!venue) {
    notFound();
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-ivory)] pt-24 md:pt-32 pb-24">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        
        <Link href="/weddings" className="inline-flex items-center text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-forest)] transition-colors mb-8">
          <ArrowLeft size={14} className="mr-2" /> Back to All Venues
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-br-[100px] overflow-hidden shadow-xl">
              <Placeholder src="/images/grounds-night.jpg" label={`${venue.name} Hero Image`} ratio="16/9" className="w-full h-full object-cover" />
            </div>
            
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-[var(--color-forest)] prose-p:text-[var(--color-muted)] max-w-none">
              <h2 className="text-3xl">The Perfect Setting for {venue.name}</h2>
              <p>{venue.description}</p>
              <p>
                When planning an event as significant as this, every detail matters. We work closely with leading planners, decorators, and our in-house culinary team to ensure that the vision for your event translates flawlessly into reality.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8 not-prose">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Placeholder src="/images/cottage-exterior-1.jpg" label={`${venue.name} Detail 1`} ratio="4/3" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Placeholder src="/images/cottage-exterior-1.jpg" label={`${venue.name} Detail 2`} ratio="4/3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-[var(--color-forest-700)] text-[var(--color-ivory)] rounded-[2rem] p-8 shadow-xl">
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-2 block">{venue.tagline}</span>
              <h1 className="font-serif text-3xl mb-6">{venue.name}</h1>
              
              <div className="bg-[var(--color-forest)]/50 rounded-xl p-4 mb-6 border border-white/10 text-center">
                <span className="block text-[10px] uppercase tracking-widest text-[var(--color-gold-soft)] mb-1">Max Capacity</span>
                <span className="text-lg font-serif">{venue.capacity}</span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-4">Venue Features</h3>
                <ul className="space-y-3">
                  {venue.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm opacity-90">
                      <CheckCircle2 size={16} className="text-[var(--color-gold)] mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full uppercase text-xs tracking-widest px-8 py-4 rounded-xl bg-[var(--color-gold)] text-[var(--color-forest)] hover:bg-[var(--color-gold-soft)] transition-colors shadow-md font-semibold">
                Plan Your Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
