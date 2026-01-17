import { useState } from "react";
import Calendar from "react-calendar";

import * as styles from "./custom-date-picker.css";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div>
      <Calendar
        onChange={(value) => {
          if (value instanceof Date) {
            setSelectedDate(value);
          }
        }}
        value={selectedDate}
        selectRange={false}
        calendarType="gregory"
        view="month"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatDay={(_locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        formatShortWeekday={(_locale, date) =>
          date.toLocaleDateString("en-US", { weekday: "short" })
        }
        tileDisabled={({ date }) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return date > today;
        }}
        className={styles.calendar}
      />
    </div>
  );
};
export { CustomDatePicker };
