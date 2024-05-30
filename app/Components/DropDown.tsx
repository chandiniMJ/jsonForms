// Dropdown.tsx
import React from "react";

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  hideLabel?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
  className,
  hideLabel,
}) => (
  <div className="flex flex-col">
    {!hideLabel && (
      <label className="mt-7 text-[#ccd0d7] text-2xs">{label}</label>
    )}
    <select
      value={value}
      onChange={onChange}
      className={`p-2 border border-[#727F95] mt-4 rounded bg-[#000000] text-[#ccd0d7] ${className}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
