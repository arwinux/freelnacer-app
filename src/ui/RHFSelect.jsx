import { FaStarOfLife } from 'react-icons/fa';

function RHFSelect({
  label,
  name,
  register,
  required,
  placeholder,
  options = [],
  className,
}) {
  return (
    <div>
      <label htmlFor="">
        <label className="mb-2 text-title bg-for flex items-center text-sm font-medium gap-x-2">
          {label} {required && <FaStarOfLife className="text-red-500 size-2" />}
        </label>
      </label>
      <select
        id={name}
        {...register(name)}
        className="input-form text-title bg-inputs!"
        placeholder={placeholder}
      >
        {options.map((option) => (
          <option
            className={`${className} text-title`}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
