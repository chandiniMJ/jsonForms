import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";

interface TextInputRendererProps {
  data: string | null | undefined;
  handleChange: (path: string, value: string | undefined) => void;
  path: string;
  label: string;
  schema: {
    title?: string;
  };
}

const TextInputRenderer = ({
  data,
  handleChange,
  path,
  label,
  schema,
}: TextInputRendererProps) => {
  return (
    <div className="flex flex-col pt-8">
      <label className="pt-1 text-[12px] text-[#ccd0d7]">{label}</label>
      <input
        type="text"
        value={data || ""}
        onChange={(event) => handleChange(path, event.target.value)}
        placeholder={schema.title}
        className="p-2 border border-[#727F95]  bg-[#000000] rounded w-72 mt-2 text-[#ccd0d7]"
      />
    </div>
  );
};

export default withJsonFormsControlProps(TextInputRenderer);
