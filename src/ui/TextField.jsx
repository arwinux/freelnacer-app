function TextField({ name, value, onChange, placeholder, type, classname }) {
  return (
    <div>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className={`auth-card__textfield ${classname}`}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default TextField;
