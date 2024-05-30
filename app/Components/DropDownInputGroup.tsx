import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Dropdown from "./Dropdown";
import Input from "./Input";
import DatePicker from "./DatePicker";

interface DropdownInputGroupProps {
  index: number;
  item: Record<string, any>;
  handleAdditionalNestedChange: (
    index: number,
    value: string,
    key: string
  ) => void;
  handleAdditionalNestedDelete: (index: number) => void;
  schema: any;
}

const DropdownInputGroup: React.FC<DropdownInputGroupProps> = ({
  index,
  item,
  handleAdditionalNestedChange,
  handleAdditionalNestedDelete,
  schema,
}) => (
  <div key={index} className="flex flex-row items-center space-x-4 mb-4">
    {Object.keys(schema).map((propertyName) => {
      const value = item[propertyName] ?? "";

      return (
        <div key={propertyName} className="flex flex-col">
          <label className="my-5 text-[#ccd0d7] text-2xs">{propertyName}</label>
          {schema[propertyName].enum ? (
            <Dropdown
              label={propertyName}
              value={value}
              options={schema[propertyName].enum}
              onChange={(event) =>
                handleAdditionalNestedChange(
                  index,
                  event.target.value,
                  propertyName
                )
              }
              className="w-15"
              hideLabel={true}
            />
          ) : schema[propertyName].format === "date" ? (
            <DatePicker
              label={propertyName}
              value={value}
              onChange={(event) =>
                handleAdditionalNestedChange(
                  index,
                  event.target.value,
                  propertyName
                )
              }
              className="w-65 mt-2"
              hideLabel={true}
            />
          ) : (
            <Input
              label={propertyName}
              value={value}
              onChange={(event) =>
                handleAdditionalNestedChange(
                  index,
                  event.target.value,
                  propertyName
                )
              }
              placeholder={schema.title}
              className="w-65 mt-2"
              hideLabel={true}
            />
          )}
        </div>
      );
    })}
    {index !== 0 && (
      <div className="flex self-end">
        <IconButton
          onClick={() => handleAdditionalNestedDelete(index)}
          aria-label="delete"
          color="primary"
        >
          <DeleteIcon />
        </IconButton>
      </div>
    )}
  </div>
);

export default DropdownInputGroup;
