const Input = ({
  type,
  label,
  onChange,
  inputClassName,
  name,
  value,
  inputRef,
}: {
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  name: string;
  value: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        {...(inputClassName && { className: inputClassName })}
        name={name}
        value={value}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
