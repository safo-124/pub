// app/about/page.tsx
import Image from 'next/image';
import { OurStory } from '@/components/about/OurStory';
import { OurValues } from '@/components/about/OurValues';
import { RestaurantGallery } from '@/components/about/RestaurantGallery';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/images/about-hero.jpg"
          alt="Gloryland Good & Pub Joint exterior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Our <span className="text-orange-400">Story</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <OurStory />
        <OurValues />
        <RestaurantGallery />
      </div>
    </div>
  );
}