import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';

const RadioButtonRenderer = ({ data, handleChange, path, label, options }: any) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option: string) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              value={option}
              checked={data === option}
              onChange={(event) => handleChange(path, event.target.value)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default withJsonFormsControlProps(RadioButtonRenderer);
