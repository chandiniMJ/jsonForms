import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import Input from "./Components/Input";

interface SingleInputRendererProps extends ControlProps {
  label: string;
}

const SingleInputRenderer: React.FC<SingleInputRendererProps> = ({
  data,
  handleChange,
  path,
  label,
  schema,
}) => {
  return (
    <div className="flex flex-col pt-7">
      <label className="text-[#ccd0d7]">{label}</label>
      <Input
        label={label}
        value={data || ""}
        onChange={(event) => handleChange(path, event.target.value)}
        placeholder={label}
        className="w-72 mt-2"
      />
    </div>
  );
};

export default withJsonFormsControlProps(SingleInputRenderer);
