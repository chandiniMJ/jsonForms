import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import DatePicker from "./Components/DatePicker";

interface DatePickerControlProps {
  data: string;
  handleChange: (path: string, value: any) => void;
  path: string;
  label: string;
}

const DatePickerControl: React.FC<DatePickerControlProps> = ({
  data,
  handleChange,
  path,
  label,
}) => {
  const handleDateChange = (date: string) => {
    handleChange(path, date);
  };

  return (
    <div className="flex flex-col pt-8">
      <label className="pt-1 text-[12px] text-[#ccd0d7]">{label}</label>
      <div className="pt-3">
        <DatePicker
          label={label}
          value={data || ""}
          onChange={(event) => handleDateChange(event.target.value)}
          className="w-72 mt-2"
          hideLabel={true}
        />
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(DatePickerControl);
