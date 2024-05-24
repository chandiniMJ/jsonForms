import React from 'react';

const CustomTradingControl = ({ data, path, handleChange }: any) => {
  // Custom component logic here
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    handleChange(path, value);
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
    </div>
  );
};

export default CustomTradingControl;
