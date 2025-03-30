// components/events/EventCard.tsx
import Image from 'next/image';
import Link from 'next/link';

type Event = {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  image: string;
  location: string;
  price?: number;
};

export function EventCard({ event, isUpcoming }: { event: Event; isUpcoming: boolean }) {
  const formattedDate = event.date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
        {isUpcoming && (
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Upcoming
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-blue-900">{event.title}</h3>
          {isUpcoming && event.price && (
            <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm font-medium">
              ₵{event.price}
            </span>
          )}
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <span className="mr-4">{formattedDate}</span>
          <span>{event.time}</span>
        </div>
        
        <p className="text-gray-700 mb-4">{event.description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              <span className="font-medium">Location:</span> {event.location}
            </span>
            
            {isUpcoming ? (
              <Link 
                href={`/events/book/${event.id}`}
                className="bg-wine hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Book Now
              </Link>
            ) : (
              <button className="text-orange-600 text-sm font-medium">
                View Photos
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}