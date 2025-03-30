import Image from "next/image";

// components/about/OurStory.tsx
export function OurStory() {
    return (
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              The Gloryland Journey
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2010 by Mr. George Kwayixi, Gloryland Good & Pub Joint began as a small 
                eatery in the heart of Accra with a simple mission: to serve authentic Ghanaian 
                cuisine in a welcoming atmosphere.
              </p>
              <p>
                What started as a humble spot for delicious groundnut soup and fufu has grown into 
                one of the city's most beloved dining destinations, known for our vibrant pub 
                atmosphere and commitment to traditional flavors.
              </p>
              <p>
                Today, under the leadership of CEO Mr. George Kwayixi and his dedicated team, 
                we continue to honor our roots while innovating to bring you the best of Ghanaian 
                culinary tradition.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/founder-story.jpg"
              alt="Founder Mr. George Kwayixi in the early days"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    );
  }