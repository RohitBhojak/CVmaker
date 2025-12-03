import { useState } from "react";
export default function InputField({ label, type, id }) {
  return (
    <div className="flex gap-2">
      <label htmlFor={id} className="">
        {label}
      </label>
      <CustomInput type={type} id={id} />
    </div>
  );
}

function CustomInput({ type, id }) {
  const [value, setValue] = useState("");
  return (
    <input
      type={type}
      value={value}
      id={id}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
