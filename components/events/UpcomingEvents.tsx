// components/events/UpcomingEvents.tsx
import { EventCard } from './EventCard';

const upcomingEvents = [
  {
    id: '1',
    title: 'Highlife Night Live',
    description: 'An evening of classic Ghanaian highlife music with live band performances',
    date: new Date('2023-12-15'),
    time: '7:00 PM',
    image: '/images/events/highlife-night.jpg',
    location: 'Main Dining Hall',
    price: 20
  },
  {
    id: '2',
    title: 'Traditional Food Festival',
    description: 'Celebrate Ghanaian culinary heritage with special dishes from all regions',
    date: new Date('2023-12-22'),
    time: '5:00 PM - 10:00 PM',
    image: '/images/events/food-festival.jpg',
    location: 'Outdoor Terrace',
    price: 15
  },
  {
    id: '3',
    title: 'New Year\'s Eve Bash',
    description: 'Ring in the new year with live music, dancing, and special menu',
    date: new Date('2023-12-31'),
    time: '8:00 PM - 2:00 AM',
    image: '/images/events/new-years.jpg',
    location: 'Entire Venue',
    price: 50
  }
];

export function UpcomingEvents() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Upcoming <span className="text-orange-600">Events</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map(event => (
          <EventCard key={event.id} event={event} isUpcoming={true} />
        ))}
      </div>
    </section>
  );
}