import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";

const SingleInputRenderer = ({
  data,
  handleChange,
  path,
  label,
  schema,
}: any) => {
  return (
    <div className="flex flex-col pt-7">
      <label className="text-[#525D70]">{label}</label>
      <input
        type="text"
        value={data || ""}
        onChange={(event) => handleChange(path, event.target.value)}
        placeholder={schema.title}
        className="p-2 border border-[#727F95] rounded w-72 mt-2  bg-[#000000]"
      />
    </div>
  );
};

export default withJsonFormsControlProps(SingleInputRenderer);
