import { FaqAccordion } from "@/components/home/FaqAccordion";

export const metadata = {
  title: "FAQ | Royal Forest Resort",
  description: "Frequently asked questions about booking, stays, and events at Royal Forest Resort."
};

export default function FaqPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-ivory)] pt-24 pb-24">
      <FaqAccordion />
    </main>
  );
}
