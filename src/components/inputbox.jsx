const Inputbox = ({
  name,
  id,
  autocomplete,
  placeholder,
  className,
  disabled,
  value,
  onBlur,
  label,
  onChange,// Destructure disabled prop
  type,
  onMouseDown,
}) => {
  const buttonType = type === "password" ? "password" : "text";
  return (
    <>
      <input
        type={buttonType}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autocomplete}
        className={`input1 ${className || ""}`}
        placeholder={placeholder}
        disabled={disabled}
        onMouseDown={onMouseDown}
      />
      {label &&
        <label htmlFor="id" className="font-bold absolute top-[2px] left-3.5 peer-disabled:text-inputcolor">
          {label}
        </label>
      }
    </>
  );
};

export default Inputbox;
