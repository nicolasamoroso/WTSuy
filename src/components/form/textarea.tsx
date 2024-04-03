const TextArea = ({
  label,
  onChange,
  name,
  value,
  textAreaClassName,
  textAreaRef,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  value: string;
  textAreaClassName?: string;
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
}) => {
  return (
    <div className="textarea">
      <label>{label}</label>
      <textarea
        onChange={onChange}
        name={name}
        value={value}
        {...(textAreaClassName && { className: textAreaClassName })}
        ref={textAreaRef}
      ></textarea>
    </div>
  );
};

export default TextArea;
