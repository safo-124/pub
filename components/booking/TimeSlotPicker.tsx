// components/booking/TimeSlotPicker.tsx
'use client';

import { Button } from '@/components/ui/button';

const timeSlots = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
];

type TimeSlotPickerProps = {
  selectedTime?: string;
  onTimeSelect: (time: string) => void;
};

export function TimeSlotPicker({ selectedTime, onTimeSelect }: TimeSlotPickerProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {timeSlots.map(time => (
        <Button
          key={time}
          type="button"
          variant={selectedTime === time ? 'default' : 'outline'}
          className={`${selectedTime === time ? 'bg-orange-600' : ''}`}
          onClick={() => onTimeSelect(time)}
        >
          {time}
        </Button>
      ))}
    </div>
  );
}