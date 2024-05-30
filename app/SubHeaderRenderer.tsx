import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";

interface SubHeaderRendererProps {
  label: string;
}

const SubHeaderRenderer = ({ label }: SubHeaderRendererProps) => {
  return (
    <div className="text-[#848D9C] font-400 text-xs mt-3 w-[58rem] font-inter break-words">
      {label}
    </div>
  );
};

export default withJsonFormsControlProps(SubHeaderRenderer);
