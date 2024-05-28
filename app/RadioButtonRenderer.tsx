import { withJsonFormsControlProps } from "@jsonforms/react";

const RadioButtonRenderer = ({
  data,
  handleChange,
  path,
  label,
  options,
  schema,
}: any) => {

  return (
    <div style={{ zIndex: 2, position: "relative", marginTop: "5%" }}>
      <label className="pt-2 text-[12px] text-[#525D70]">{label}</label>
      <div className="grid grid-cols-5 xs:grid-cols-2 md:grid-cols-5">
        {schema.enum.map((option: string, index: number) => (
          <div key={option} className="col-span-1">
            <label className="flex items-center h-full text-[#525D70] pt-3 text-2xs">
              <input
                className="mr-2 border-[#727F95] pt-1"
                style={{background: 'black'}}
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
    </div>
  );
};

export default withJsonFormsControlProps(RadioButtonRenderer);
