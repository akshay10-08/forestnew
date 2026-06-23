import { Hero } from "@/components/home/Hero";
import { FeatureRibbon } from "@/components/home/FeatureRibbon";
import { SenseOfPlace } from "@/components/home/SenseOfPlace";
import { CottagesShowcase } from "@/components/home/CottagesShowcase";
import { PoolFeatureBand } from "@/components/home/PoolFeatureBand";
import { StayPackages } from "@/components/home/StayPackages";
import { AmenitiesGrid } from "@/components/home/AmenitiesGrid";
import { HospitalityBand } from "@/components/home/HospitalityBand";
import { Experiences } from "@/components/home/Experiences";
import { DiningTeaser } from "@/components/home/DiningTeaser";
import { WeddingsEvents } from "@/components/home/WeddingsEvents";
import { OccasionTiles } from "@/components/home/OccasionTiles";
import { MarqueeRibbon } from "@/components/home/MarqueeRibbon";
import { ResortReels } from "@/components/home/ResortReels";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { LocationSection } from "@/components/home/LocationSection";
import { BookingFormSection } from "@/components/home/BookingFormSection";
import { RESORT_FACTS } from "@/lib/constants";

export const metadata = {
  title: "Royal Forest Resort - Luxury Nature Resort & Stay in Kanpur",
  description: "A premium nature resort on Bithoor Road, Kanpur - garden cottages, one of Kanpur's largest pools, and serene stays. Also a sought-after destination wedding venue.",
  openGraph: {
    title: "Royal Forest Resort | Luxury Nature Resort & Stay in Kanpur",
    description: "A premium nature resort on Bithoor Road, Kanpur - garden cottages, one of Kanpur's largest pools, and serene stays.",
    url: "https://royalforestresort.com",
    siteName: "Royal Forest Resort",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Forest Resort Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "name": RESORT_FACTS.name,
        "description": "A premium nature resort on Bithoor Road, Kanpur - garden cottages, one of Kanpur's largest pools, and serene stays.",
        "url": "https://royalforestresort.com",
        "telephone": RESORT_FACTS.phoneRaw,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bithoor Road",
          "addressLocality": "Kanpur",
          "addressRegion": "UP",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.4499", // Placeholder
          "longitude": "80.3319" // Placeholder
        },
        "starRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Swimming Pool",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Garden Cottages",
            "value": true
          }
        ],
        "priceRange": "₹₹₹"
      },
      {
        "@type": "EventVenue",
        "name": "Royal Forest Resort Weddings & Events",
        "description": "Grand open-air lawns for destination weddings and celebrations.",
        "url": "https://royalforestresort.com/weddings",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bithoor Road",
          "addressLocality": "Kanpur",
          "addressRegion": "UP",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeatureRibbon />
      <SenseOfPlace />
      <CottagesShowcase />
      <PoolFeatureBand />
      <StayPackages />
      <AmenitiesGrid />
      <HospitalityBand />
      <Experiences />
      <DiningTeaser />
      <WeddingsEvents />
      <OccasionTiles />
      <MarqueeRibbon />
      <ResortReels />
      <Testimonials />
      
      <LocationSection />
      <BookingFormSection />
      
      <FaqAccordion />
      
    </div>
  );
}
