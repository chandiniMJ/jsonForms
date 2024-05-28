import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";

let isNestedObject = false;
const nestedKeys = ["keyPersonalName", "tradingExperience", "tradingStratergy"];

const CustomAddButtonRenderer = ({
  data,
  handleChange,
  path,
  label,
  schema,
  uischema,
}: any) => {
  const [inputs, setInputs] = useState<string[]>(data ?? [""]);
  const [showInputs, setShowInputs] = useState<boolean>(false);
  const [nestedInput, setNestedInput] = useState<
    {
      keyPersonalName: string;
      tradingExperience: string;
      tradingStratergy: string;
    }[]
  >(
    data ?? [
      { keyPersonalName: "", tradingExperience: "", tradingStratergy: "" },
    ]
  );

  useEffect(() => {
    if (data?.length > 0) {
      setShowInputs(true);
    }
    if (uischema?.scope?.includes("keyPersonalInfo")) isNestedObject = true;
  }, [inputs]);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;

    setInputs(newInputs);
    handleChange(path, newInputs);
  };

  const handleNestedChange = (index: number, value: string, key: string) => {
    const newNestedInput = [...nestedInput];
    newNestedInput[index][key] = value;
    setNestedInput(newNestedInput);
  };

  const handleAddInput = () => {
    if (isNestedObject) {
      setNestedInput([
        ...nestedInput,
        { keyPersonalName: "", tradingExperience: "", tradingStratergy: "" },
      ]);
    } else {
      setInputs([...inputs, ""]);
    }
    setShowInputs(true);
  };

  const handleDeleteInput = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
    handleChange(path, newInputs);
  };

  const handleNestedDelete = (index: number) => {
    const newNestedInput = [...nestedInput];
    newNestedInput.splice(index, 1);
    setNestedInput(newNestedInput);
  };

  return (
    <div>
      {!showInputs && !isNestedObject && (
        <div className="flex flex-col mb-4 pt-5">
          <label className="mb-2 text-[#525D70] text-2xs">{label}</label>
          <input
            type="text"
            value={data || ""}
            onChange={(event) => handleChange(path, event.target.value)}
            placeholder={schema.title}
            className="p-2 border border-[#727F95] rounded w-72  bg-[#000000] text-[#525D70]"
          />
        </div>
      )}

      {showInputs &&
        !isNestedObject &&
        inputs.map((input, index) => (
          <div
            key={`${input}_${index}`}
            className={
              index === 0
                ? "flex flex-col mb-4 pt-4"
                : "flex flex-row items-center mb-4"
            }
          >
            {index === 0 && (
              <label className="mb-2 text-[#525D70] text-2xs">{label}</label>
            )}
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="p-2 border border-[#727F95] rounded w-72 mr-4  bg-[#000000] text-[#525D70]"
              autoFocus={true}
            />
            {index !== 0 && (
              <IconButton
              onClick={() => handleDeleteInput(index)}
              aria-label="delete"
              color="primary"
            >
              <DeleteIcon />
            </IconButton>
            )}
          </div>
        ))}

      {!showInputs && isNestedObject && (
        <div className="flex flex-col mb-4 pt-5">
          <div className="flex flex-row justify-between">
            {nestedKeys.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <label className="mb-2 text-[#525D70] text-2xs">{item}</label>
                <input
                  type="text"
                  value={nestedInput[0][item] || ""}
                  onChange={(event) =>
                    handleNestedChange(0, event.target.value, item)
                  }
                  placeholder={schema.title}
                  className="p-2 border border-[#727F95] rounded w-72  bg-[#000000] text-[#525D70]"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {showInputs &&
        nestedInput.length &&
        isNestedObject &&
        nestedInput.map((item, index) => (
          <div key={index} className="flex flex-col mb-4 pt-5">
            <div className="flex flex-row justify-between">
              {nestedKeys.map((keyName, keyIndex) => (
                <div className="flex flex-col" key={keyIndex}>
                  <label className="mb-2 text-[#525D70] text-2xs">
                    {keyName}
                  </label>
                  <input
                    type="text"
                    value={item[keyName] || ""}
                    onChange={(event) =>
                      handleNestedChange(index, event.target.value, keyName)
                    }
                    placeholder={schema.title}
                    className="p-2 border border-[#727F95] rounded w-72  bg-[#000000] text-[#525D70]"
                  />
                </div>
              ))}
              {index !== 0 && (
                <IconButton
                  onClick={() => handleNestedDelete(index)}
                  aria-label="delete"
                  color="primary"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          </div>
        ))}

      <button
        onClick={handleAddInput}
        className="mt-3 w-[88px] h-[32px] bg-[#0F1D47] text-[#2C64F4]"
      >
        Add +
      </button>
    </div>
  );
};

export default withJsonFormsControlProps(CustomAddButtonRenderer);
