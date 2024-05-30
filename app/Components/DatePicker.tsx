import React from "react";

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hideLabel?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  className,
  hideLabel,
}) => (
  <div className="flex flex-col">
    {!hideLabel && (
      <label className="my-5 text-[#ccd0d7] text-2xs">{label}</label>
    )}
    <input
      type="date"
      value={value}
      onChange={onChange}
      className={`p-2 border border-[#727F95] bg-[#000000] rounded mt-2 text-[#ccd0d7] ${className}`}
      style={{ colorScheme: "dark" }}
    />
  </div>
);

export default DatePicker;
