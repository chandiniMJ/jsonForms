import React, { useState } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import DropdownInputGroup from "./Components/DropDownInputGroup";

interface DropDownInputGroupAddButtonRendererProps {
  data: any;
  handleChange: (path: string, value: any) => void;
  path: string;
  schema: any;
}

const DropDownInputGroupAddButtonRenderer: React.FC<
  DropDownInputGroupAddButtonRendererProps
> = ({ data, handleChange, path, schema }) => {
  const defaultItem = {
    title: schema.items.properties.title.enum[0],
    name: "",
    ownership: schema.items.properties.ownership.enum[0],
    address: "",
    dob: "",
  };

  const [additionalNestedInputs, setAdditionalNestedInputs] = useState(
    data && data.length ? data : [defaultItem]
  );

  const handleAdditionalNestedChange = (
    index: number,
    value: any,
    key: string
  ) => {
    const newAdditionalNestedInputs = [...additionalNestedInputs];
    const updatedItem = { ...newAdditionalNestedInputs[index], [key]: value };
    newAdditionalNestedInputs[index] = updatedItem;
    setAdditionalNestedInputs(newAdditionalNestedInputs);
    handleChange(path, newAdditionalNestedInputs);
  };

  const handleAdditionalNestedDelete = (index: number) => {
    const newAdditionalNestedInputs = [...additionalNestedInputs];
    newAdditionalNestedInputs.splice(index, 1);
    setAdditionalNestedInputs(newAdditionalNestedInputs);
    handleChange(path, newAdditionalNestedInputs);
  };

  const handleAddInput = () => {
    setAdditionalNestedInputs([...additionalNestedInputs, { ...defaultItem }]);
  };

  return (
    <div>
      {additionalNestedInputs.map((item: any, index: number) => (
        <DropdownInputGroup
          key={index}
          index={index}
          item={item}
          handleAdditionalNestedChange={handleAdditionalNestedChange}
          handleAdditionalNestedDelete={handleAdditionalNestedDelete}
          schema={schema.items.properties}
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

export default withJsonFormsControlProps(DropDownInputGroupAddButtonRenderer);
