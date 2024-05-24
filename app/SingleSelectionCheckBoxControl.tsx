// SingleSelectionCheckbox.js
import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';

const SingleSelectionCheckboxControl = ({ data, handleChange, path, schema }: any) => {
  const handleCheckboxChange = (value: string) => {
    handleChange(path, data === value ? undefined : value);
  };

  return (
    <div>
      {schema.enum.map((option: string) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              checked={data === option}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default withJsonFormsControlProps(SingleSelectionCheckboxControl);
