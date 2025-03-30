// components/events/PastEvents.tsx
import { EventCard } from './EventCard';

const pastEvents = [
  {
    id: '4',
    title: 'Cultural Drumming Night',
    description: 'An electrifying evening of traditional drumming and dance performances',
    date: new Date('2023-11-18'),
    time: '7:00 PM',
    image: '/images/events/drumming-night.jpg',
    location: 'Main Dining Hall'
  },
  {
    id: '5',
    title: 'Oktoberfest Celebration',
    description: 'Our special take on this global beer festival with local brews',
    date: new Date('2023-10-07'),
    time: '4:00 PM - 11:00 PM',
    image: '/images/events/oktoberfest.jpg',
    location: 'Beer Garden'
  }
];

export function PastEvents() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Past <span className="text-orange-600">Events</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pastEvents.map(event => (
          <EventCard key={event.id} event={event} isUpcoming={false} />
        ))}
      </div>
    </section>
  );
}