import { withJsonFormsControlProps } from "@jsonforms/react";

const DividerRenderer = () => {
  return (
    <div className="w-full pt-[3rem]">
      <hr className="border-t border-[#1A1E28]" />
    </div>
  );
};

export default withJsonFormsControlProps(DividerRenderer);
