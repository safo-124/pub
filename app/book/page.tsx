import { BookingForm } from '@/components/booking/BookingForm';

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-wine mb-8 text-center">Book a Table</h1>
      <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-lg shadow-lg">
        <BookingForm />
      </div>
    </div>
  );
}