import { FaStarOfLife } from 'react-icons/fa';

export function TextFieldCreateProject({
  name,
  label,
  placeholder,
  register,
  type = 'text',
  classname,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="w-full">
      <label className="mb-2 flex items-center text-sm font-medium gap-x-2">
        {label} {required && <FaStarOfLife className="text-red-500 size-2" />}
      </label>
      <input
        placeholder={placeholder}
        {...register(name, validationSchema)}
        autoComplete="off"
        className={`input-form ${classname}`}
        type={type}
      />
      {errors && errors[name] && (
        <span className="text-red-500 text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export function TextAreaCreateProject({
  name,
  label,
  placeholder,
  register,
  type = 'text',
  classname,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <label className="mb-2 flex items-center text-sm font-medium gap-x-2">
        {label} {required && <FaStarOfLife className="text-red-500 size-2" />}
      </label>
      <textarea
        placeholder={placeholder}
        {...register(name, validationSchema)}
        autoComplete="off"
        className={`input-form resize-none ${classname}`}
        type={type}
      />
      {errors && errors[name] && (
        <span className="text-red-500 text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
