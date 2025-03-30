// app/events/page.tsx
import { EventCard } from '@/components/events/EventCard';
import { UpcomingEvents } from '@/components/events/UpcomingEvents';
import { PastEvents } from '@/components/events/PastEvents';

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-blue-900">
        <div className="absolute inset-0 bg-wine/70 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Events at <span className="text-orange-400">Gloryland</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Live music, cultural nights, and special celebrations
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <UpcomingEvents />
        <PastEvents />
        
        {/* Private Events CTA */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Host Your Private Event
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Gloryland is the perfect venue for birthdays, anniversaries, corporate events, 
            and more. Our team will work with you to create a memorable experience.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-lg font-medium">
            Inquire About Private Events
          </button>
        </div>
      </div>
    </div>
  );
}