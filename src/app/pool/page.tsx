import { Placeholder } from "@/components/ui/Placeholder";
import { PoolFeatureBand } from "@/components/home/PoolFeatureBand";

export const metadata = {
  title: "The Pool & Grounds | Royal Forest Resort",
  description: "Relax by one of Kanpur's largest resort swimming pools, surrounded by lush landscaped gardens and swaying palms."
};

export default function PoolPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-cream)] pt-24 md:pt-32 pb-24">
      <div className="max-w-[1240px] mx-auto px-6 w-full mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Leisure</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-forest)] mb-6">The Pool & Grounds</h1>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto mb-6" />
          <p className="text-[var(--color-muted)] leading-relaxed text-balance">
            The heart of Royal Forest Resort is our expansive swimming pool and surrounding green lawns. Whether you're enjoying an early morning swim or a golden-hour stroll through the gardens, nature is always just a step away.
          </p>
        </div>
      </div>
      
      <PoolFeatureBand />
      
      <div className="max-w-[1240px] mx-auto px-6 w-full mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="aspect-square rounded-full overflow-hidden shadow-2xl relative border-8 border-white">
            <Placeholder src="/images/event-poolside.png" label="Poolside Lounging Image" ratio="1/1" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-forest)] mb-6">A Refreshing Escape</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            Our pool is designed for both relaxation and recreation. Featuring a dedicated shallow area for children and ample lounging space, it's the perfect spot to unwind with a book or enjoy a poolside beverage.
          </p>
          <ul className="space-y-4 text-sm text-[var(--color-muted)] mb-8">
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">One of Kanpur's Largest Resort Pools</li>
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">Poolside Cabanas and Loungers</li>
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">Dedicated Kids Pool Section</li>
            <li className="flex items-center before:content-['·'] before:mr-3 before:text-[var(--color-gold)] before:text-2xl">Landscaped Walking Trails</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
