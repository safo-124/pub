import Image from "next/image";

// components/about/RestaurantGallery.tsx
export function RestaurantGallery() {
    const galleryImages = [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
      "/images/gallery-6.jpg"
    ];
  
    return (
      <section className="py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Experience <span className="text-orange-600">Gloryland</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={image}
                alt={`Gloryland Good & Pub Joint ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }