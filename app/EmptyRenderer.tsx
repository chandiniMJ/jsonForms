import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";

const EmptyRenderer = () => {

    
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "16px", width: "300px" }}
    >
    </div>
  );
};

export default withJsonFormsControlProps(EmptyRenderer);
