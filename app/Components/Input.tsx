interface InputFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  hideLabel?: boolean;
}

const Input = ({
  label,
  value,
  onChange,
  className,
  hideLabel,
}: InputFieldProps) => (
  <div className="flex flex-col">
    {hideLabel ? null : (
      <label className="mt-7 text-[#ccd0d7] text-2xs">{label}</label>
    )}
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`p-2 border border-[#727F95] mt-4 rounded bg-[#000000] text-[#ccd0d7] ${className}`}
    />
  </div>
);

export default Input;
