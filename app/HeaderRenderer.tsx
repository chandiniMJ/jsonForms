import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";

const HeaderRenderer = ({ label }: any) => {
  return <div className="text-base text-[#848D9C] font-400 my-6 font-inter">{label}</div>;
};

export default withJsonFormsControlProps(HeaderRenderer);
