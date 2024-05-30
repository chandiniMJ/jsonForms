import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";

interface HeaderRendererProps {
  label: string;
}

function HeaderRenderer({ label }: HeaderRendererProps) {
  console.log("label from HeaderRenderer", label);

  return (
    <div className="text-base text-[#848D9C] mt-[3rem] font-400 font-inter">
      {label}
    </div>
  );
}

export default withJsonFormsControlProps(HeaderRenderer);
