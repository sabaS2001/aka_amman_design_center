import { useState } from "react";
import style from "./calendar.module.scss";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

interface CalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  invalid?: boolean;
}

function Calendar({ selectedDate, onSelect, invalid }: CalendarProps) {
  const today = startOfDay(new Date());
  const [viewDate, setViewDate] = useState(today);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = firstOfMonth.getDay();

  const cells: (Date | null)[] = [
    ...Array(leadingBlanks).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const monthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  function changeMonth(delta: number) {
    setViewDate(new Date(year, month + delta, 1));
  }

  return (
    <div className={[style.calendar, invalid ? style.invalid : ""].join(" ").trim()}>
      <div className={style.header}>
        <button
          type="button"
          className={style.navBtn}
          onClick={() => changeMonth(-1)}
          aria-label="Previous month"
        >
          &lsaquo;
        </button>
        <span className={style.monthLabel}>{monthLabel}</span>
        <button
          type="button"
          className={style.navBtn}
          onClick={() => changeMonth(1)}
          aria-label="Next month"
        >
          &rsaquo;
        </button>
      </div>

      <div className={style.grid}>
        {WEEKDAYS.map((day) => (
          <div key={day} className={style.weekday}>
            {day}
          </div>
        ))}

        {cells.map((date, i) => {
          if (!date) {
            return <div key={`blank-${i}`} className={style.cell} aria-hidden="true" />;
          }

          const isPast = date < today;
          const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
          const isToday = isSameDay(date, today);

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={isPast}
              onClick={() => onSelect(date)}
              aria-pressed={isSelected}
              className={[
                style.cell,
                style.day,
                isSelected ? style.selected : "",
                isToday && !isSelected ? style.today : "",
              ]
                .join(" ")
                .trim()}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
