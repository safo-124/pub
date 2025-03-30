import { Button } from "@/components/ui/button";

type CalendarDayProps = {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  onSelect: (date: Date) => void;
};

export function CalendarDay({
  date,
  isCurrentMonth,
  isSelected,
  isToday,
  onSelect,
}: CalendarDayProps) {
  const day = date.getDate();

  return (
    <Button
      variant={isSelected ? "default" : "ghost"}
      className={`h-10 w-10 p-0 font-normal rounded-full 
        ${isToday && !isSelected ? "border border-orange-500" : ""}
        ${!isCurrentMonth ? "text-gray-400" : ""}
      `}
      onClick={() => onSelect(date)}
      aria-label={`Select day ${day}`}
      disabled={!isCurrentMonth}
    >
      {day}
    </Button>
  );
}