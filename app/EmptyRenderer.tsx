import { withJsonFormsControlProps } from "@jsonforms/react";

const EmptyRenderer = () => {
  // Since this component is supposed to render nothing,
  return null;
};

export default withJsonFormsControlProps(EmptyRenderer);
