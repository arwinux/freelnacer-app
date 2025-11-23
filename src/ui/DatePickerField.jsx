import DatePicker from 'react-multi-date-picker';
import gregorian from 'react-date-object/calendars/gregorian';
import { FaStarOfLife } from 'react-icons/fa';

function DatePickerField({ label, required, date, setDate, className }) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-2 flex items-center text-sm font-medium gap-x-2">
        {label} {required && <FaStarOfLife className="text-red-500 size-2" />}
      </label>
      <DatePicker
        value={date}
        calendarPosition="bottom-center"
        required={required}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={gregorian}
        inputClass={`input-form flex-1 h-12 ${className}`}
      />
    </div>
  );
}

export default DatePickerField;
