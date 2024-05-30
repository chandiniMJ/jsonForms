import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  handleArrayChange,
  handleDeleteFromArray,
  handleNestedArrayChange,
} from "./UtilitFunction";
import Input from "./Components/Input";

interface InputGroupProps {
  index: number;
  item: Record<string, string>;
  nestedKeys: string[];
  handleNestedChange: (index: number, key: string, value: string) => void;
  handleNestedDelete: (index: number) => void;
  schema: any;
}

const InputGroup = ({
  index,
  item,
  nestedKeys,
  handleNestedChange,
  handleNestedDelete,
  schema,
}: InputGroupProps) => (
  <div key={index} className="flex flex-col mb-4">
    <div className="flex flex-row items-center space-x-4">
      {nestedKeys.map((keyName: string, keyIndex: number) => (
        <Input
          key={keyIndex}
          label={keyName}
          value={item[keyName] || ""}
          onChange={(e) => handleNestedChange(index, keyName, e.target.value)}
          placeholder={schema.title}
          className="w-72"
        />
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
);

interface AddButtonRendererProps {
  data: any;
  handleChange: (path: string, value: any) => void;
  path: string;
  label: string;
  schema: any;
  uischema: any;
}

const AddButtonRenderer = ({
  data,
  handleChange,
  path,
  label,
  schema,
  uischema,
}: AddButtonRendererProps) => {
  const [inputs, setInputs] = useState(data || [""]);
  const [showInputs, setShowInputs] = useState(data?.length > 0);
  const [nestedInput, setNestedInput] = useState(
    data || [
      { keyPersonalName: "", tradingExperience: "", tradingStratergy: "" },
    ]
  );

  const isNestedObject = uischema?.scope?.includes("keyPersonalInfo");

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

  return (
    <div>
      {!showInputs && !isNestedObject && (
        <Input
          label={label}
          value={data || ""}
          onChange={(e) => handleChange(path, e.target.value)}
          placeholder={schema.title}
          className="w-72"
        />
      )}

      {showInputs &&
        !isNestedObject &&
        inputs.map((input: any, index: number) => (
          <div key={index} className="flex items-center mb-4">
            <Input
              label={index === 0 ? label : ""}
              value={input}
              onChange={(e) =>
                handleArrayChange(
                  index,
                  e.target.value,
                  inputs,
                  setInputs,
                  handleChange,
                  path
                )
              }
              placeholder={schema.title}
              className={`w-72 ${index !== 0 && "mr-4"}`}
            />
            {index !== 0 && (
              <IconButton
                onClick={() =>
                  handleDeleteFromArray(
                    index,
                    inputs,
                    setInputs,
                    handleChange,
                    path
                  )
                }
                aria-label="delete"
                color="primary"
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        ))}

      {isNestedObject &&
        nestedInput.map((item: any, index: number) => (
          <InputGroup
            key={index}
            index={index}
            item={item}
            nestedKeys={[
              "keyPersonalName",
              "tradingExperience",
              "tradingStratergy",
            ]}
            handleNestedChange={(index: any, key: any, value: any) =>
              handleNestedArrayChange(
                index,
                key,
                value,
                nestedInput,
                setNestedInput,
                handleChange,
                path
              )
            }
            handleNestedDelete={(index: any) =>
              handleDeleteFromArray(
                index,
                nestedInput,
                setNestedInput,
                handleChange,
                path
              )
            }
            schema={schema}
          />
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

export default withJsonFormsControlProps(AddButtonRenderer);
