import { GalleryOrbit } from "@/components/home/GalleryOrbit";

export const metadata = {
  title: "Gallery | Royal Forest Resort",
  description: "View the beautiful gardens, cottages, and wedding venues at Royal Forest Resort."
};

export default function GalleryPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-ivory)] pt-24 md:pt-32">
      <GalleryOrbit />
    </main>
  );
}
