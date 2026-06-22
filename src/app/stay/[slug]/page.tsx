import { notFound } from "next/navigation";
import { COTTAGES } from "@/lib/data";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return COTTAGES.map((cottage) => ({
    slug: cottage.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cottage = COTTAGES.find((c) => c.slug === params.slug);
  if (!cottage) return { title: 'Not Found' };
  
  return {
    title: `${cottage.name} | Royal Forest Resort`,
    description: cottage.description,
  };
}

export default function CottageDetailPage({ params }: { params: { slug: string } }) {
  const cottage = COTTAGES.find((c) => c.slug === params.slug);

  if (!cottage) {
    notFound();
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-cream)] pt-24 md:pt-32 pb-24">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        
        <Link href="/stay" className="inline-flex items-center text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-forest)] transition-colors mb-8">
          <ArrowLeft size={14} className="mr-2" /> Back to Accommodations
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
              <Placeholder src="/images/grounds-night.jpg" label={`${cottage.name} Hero Image`} ratio="16/9" className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {cottage.gallery.slice(1, 3).map((imgLabel, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Placeholder src="/images/cottage-exterior-1.jpg" label={imgLabel} ratio="4/3" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-white rounded-2xl p-8 shadow-xl border border-[var(--color-gold)]/10">
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-2 block">{cottage.tag}</span>
              <h1 className="font-serif text-3xl text-[var(--color-forest)] mb-2">{cottage.name}</h1>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6">
                {cottage.description}
              </p>
              
              <div className="flex items-center justify-between border-y border-[var(--color-ivory)] py-4 mb-6">
                <div className="text-center">
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--color-muted)] mb-1">Capacity</span>
                  <span className="text-sm font-medium text-[var(--color-forest)]">{cottage.capacity}</span>
                </div>
                <div className="w-[1px] h-8 bg-[var(--color-ivory)]" />
                <div className="text-center">
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--color-muted)] mb-1">Size</span>
                  <span className="text-sm font-medium text-[var(--color-forest)]">{cottage.size}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold mb-4">Room Amenities</h3>
                <ul className="space-y-3">
                  {cottage.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[var(--color-muted)]">
                      <CheckCircle2 size={16} className="text-[var(--color-gold)] mr-3 flex-shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full uppercase text-xs tracking-widest px-8 py-4 rounded-xl bg-[var(--color-forest)] text-[var(--color-ivory)] hover:bg-[var(--color-forest-700)] transition-colors shadow-md font-semibold">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
