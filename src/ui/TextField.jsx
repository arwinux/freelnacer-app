function TextField({
  name,
  validationSchema,
  register,
  placeholder,
  type,
  classname,
}) {
  return (
    <div>
      <input
        id={name}
        name={name}
        {...register(name, validationSchema)}
        autoComplete="off"
        className={`form-card__textfield text-title ${classname}`}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default TextField;
