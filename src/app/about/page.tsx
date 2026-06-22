import { Placeholder } from "@/components/ui/Placeholder";
import { SenseOfPlace } from "@/components/home/SenseOfPlace";

export const metadata = {
  title: "About Us | Royal Forest Resort",
  description: "Discover the story of Royal Forest Resort, a serene green escape on Bithoor Road, Kanpur."
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-ivory)] pt-24 md:pt-32">
      <div className="max-w-[1240px] mx-auto px-6 w-full mb-16 md:mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Our Story</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-forest)] mb-6">A Vision of Nature & Luxury</h1>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto mb-6" />
        </div>
      </div>
      
      <SenseOfPlace />
      
      <div className="bg-[var(--color-forest)] text-[var(--color-ivory)] py-24 mt-12">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Commitment to Hospitality</h2>
            <p className="text-[var(--color-ivory)]/80 leading-relaxed mb-6">
              At Royal Forest Resort, hospitality is more than a service; it's a feeling of coming home to nature. We pride ourselves on offering personalized experiences, whether you're here for a quiet weekend or the most important celebration of your life.
            </p>
            <p className="text-[var(--color-ivory)]/80 leading-relaxed">
              Every detail, from the landscaping of our gardens to the culinary masterpieces emerging from our kitchens, is crafted with your utmost comfort in mind.
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-square rounded-full overflow-hidden border-8 border-[var(--color-forest-700)] shadow-2xl">
            <Placeholder src="/images/cottage-exterior-1.jpg" label="Resort Staff / Hospitality Image" ratio="1/1" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}
