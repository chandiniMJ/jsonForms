import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";

interface RadioButtonRendererProps extends ControlProps {
  data: string;
  handleChange: (path: string, value: string) => void;
  label: string;
  schema: {
    enum?: string[];
  };
}

const RadioButtonRenderer: React.FC<RadioButtonRendererProps> = ({
  data,
  handleChange,
  path,
  label,
  schema,
}) => {
  const [selectedOption, setSelectedOption] = React.useState<string>(data);

  const handleRadioChange = (option: string) => {
    setSelectedOption(option);
    handleChange(path, option);
  };

  const options = schema.enum ?? [];

  return (
    <div className="relative z-2 mt-5">
      <label className="pt-2 text-[12px] text-[#ccd0d7]">{label}</label>
      <div className="grid grid-cols-5 xs:grid-cols-2 md:grid-cols-5">
        {options.map((option: string) => (
          <div key={option}>
            <label className="flex items-center h-full pt-3 text-[12px] text-[#ccd0d7]">
              <input
                className={`mr-2 pt-1 text-[12px] w-4 h-4 rounded-full appearance-none relative 
                  ${selectedOption === option ? "bg-white" : "bg-transparent"} 
                  ${
                    selectedOption === option
                      ? "border-4 border-[#2C64F4]"
                      : "border-[#727F95]"
                  } 
                  border-2`}
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleRadioChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(RadioButtonRenderer);
