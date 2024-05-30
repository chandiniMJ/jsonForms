import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";

interface MultiSelectionCheckboxControlProps extends ControlProps {
  data: string[];
  handleChange: (path: string, value: string[]) => void;
  label: string;
}

function MultiSelectionCheckboxControl({
  data,
  handleChange,
  path,
  schema,
  label,
}: MultiSelectionCheckboxControlProps) {
  const handleCheckboxChange = (value: string) => {
    const newData = data ? [...data] : [];
    const index = newData.indexOf(value);

    if (index !== -1) {
      newData.splice(index, 1);
    } else {
      newData.push(value);
    }

    handleChange(path, newData);
  };

  return (
    <div className="relative mt-6 w-[60rem]">
      <label className="text-[#ccd0d7] text-[12px]">{label}</label>
      <div className="grid grid-cols-5 xs:grid-cols-2 md:grid-cols-4">
        {schema?.enum?.map((option: string) => (
          <div key={option} className="flex items-center gap-5">
            <div className="relative">
              <input
                id={option}
                type="checkbox"
                checked={data ? data.includes(option) : false}
                onChange={() => handleCheckboxChange(option)}
                className="hidden"
              />
              <label
                htmlFor={option}
                className={`w-5 h-5 cursor-pointer absolute left-0 rounded-[3px] border-2 
                  ${
                    data && data.includes(option)
                      ? "bg-[#2C64F4]"
                      : "bg-transparent"
                  }
                  ${
                    data && data.includes(option)
                      ? "border-[#2C64F4]"
                      : "border-[#727F95]"
                  }`}
              >
                {data && data.includes(option) && (
                  <span className="absolute w-[9px] h-[5px] border-[3px] border-t-0 border-r-0 border-solid border-[#fcfff4] bg-transparent opacity-1 transform rotate-[-45deg] top-[4px] left-[4px]"></span>
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
}

export default withJsonFormsControlProps(MultiSelectionCheckboxControl);
