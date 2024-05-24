import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";

const TextInputRenderer = ({
  data,
  handleChange,
  path,
  label,
  schema,
}: any) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}
    >
      <label style={{ marginBottom: "4px"}}>{label}</label>
      <input
        type="text"
        value={data || ""}
        onChange={(event) => handleChange(path, event.target.value)}
        placeholder={schema.title}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "300px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default withJsonFormsControlProps(TextInputRenderer);
