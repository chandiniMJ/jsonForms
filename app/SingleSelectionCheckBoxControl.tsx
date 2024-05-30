import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";

interface SingleSelectionCheckboxControlProps {
  data: string | null | undefined;
  handleChange: (path: string, value: string | undefined) => void;
  path: string;
  label: string;
  schema: {
    enum: string[];
  };
}

const SingleSelectionCheckboxControl: React.FC<
  SingleSelectionCheckboxControlProps | ControlProps
> = ({ data, handleChange, path, label, schema }) => {
  const handleCheckboxChange = (value: string) => {
    handleChange(path, data === value ? undefined : value);
  };

  const options = schema.enum ?? [];

  return (
    <div className="relative mt-6 w-[60rem]">
      <label className="text-[#ccd0d7] text-[12px]">{label}</label>
      <div className="grid grid-cols-5 xs:grid-cols-2 md:grid-cols-4">
        {options.map((option: string) => (
          <div key={option} className="flex items-center gap-5">
            <div
              style={{
                position: "relative",
              }}
            >
              <input
                type="checkbox"
                value="None"
                id={option}
                name="check"
                checked={data === option}
                onChange={() => handleCheckboxChange(option)}
                className="hidden"
              />
              <label
                htmlFor={option}
                className={`w-5 h-5 cursor-pointer absolute left-0 rounded-[3px] border-2 
                  ${data === option ? "bg-[#2C64F4]" : "bg-transparent"}
                  ${data === option ? "border-[#2C64F4]" : "border-[#727F95]"}`}
              >
                {data === option && (
                  <span className="absolute w-[9px] h-[5px] border-[2px] mt-[4px] ml-[4px] border-white border-t-0 border-r-0 bg-transparent opacity-100 transform rotate-[-45deg]" />
                )}
              </label>
            </div>
            <span className="text-[#ccd0d7] text-[12px] mt-4 ml-3">
              {option}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(SingleSelectionCheckboxControl);
