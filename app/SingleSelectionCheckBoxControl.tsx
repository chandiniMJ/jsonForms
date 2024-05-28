import { withJsonFormsControlProps } from "@jsonforms/react";
import React from "react";

const SingleSelectionCheckboxControl = ({
  data,
  handleChange,
  path,
  schema,
  label
}: any) => {
  const handleCheckboxChange = (value: string) => {
    handleChange(path, data === value ? undefined : value);
  };

  return (
    <div className="relative my-4">
      <label className="block mb-2 text-[#525D70] text-2xs">{label}</label>
      <div className="flex flex-row gap-4">
        {schema.enum.map((option: string) => (
          <div key={option}>
            <label  className="flex items-center h-full text-[#525D70] pt-3 text-2xs">
              <input
                type="checkbox"
                checked={data === option}
                onChange={() => handleCheckboxChange(option)}
                className="mr-2 border-[#727F95]  bg-[#000000] pt-3 text-2xs text-[#525D70]"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(SingleSelectionCheckboxControl);
