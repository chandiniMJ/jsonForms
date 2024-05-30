export function handleArrayChange(
  index: number,
  value: string,
  array: string[],
  setArray: React.Dispatch<React.SetStateAction<string[]>>,
  handleChange: (path: string, value: any) => void,
  path: string
) {
  const newArray = [...array];
  newArray[index] = value;
  setArray(newArray);
  handleChange(path, newArray);
}

export function handleNestedArrayChange(
  index: number,
  key: string,
  value: string,
  array: Record<string, string>[],
  setArray: React.Dispatch<React.SetStateAction<Record<string, string>[]>>,
  handleChange: (path: string, value: any) => void,
  path: string
) {
  const newArray = [...array];
  newArray[index] = { ...newArray[index], [key]: value };
  setArray(newArray);
  handleChange(path, newArray);
}

export function handleDeleteFromArray(
  index: number,
  array: any[],
  setArray: React.Dispatch<React.SetStateAction<any[]>>,
  handleChange: (path: string, value: any) => void,
  path: string
) {
  const newArray = [...array];
  newArray.splice(index, 1);
  setArray(newArray);
  handleChange(path, newArray);
}
