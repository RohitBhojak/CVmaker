import ErrorMessage from "./ErrorMessage";

export default function InputField({
  label,
  type,
  id,
  isRequired,
  isEdit,
  value,
  setValue,
}) {
  return (
    <div className="flex flex-col gap-1 mb-3 grow">
      <label htmlFor={id} className="text-lg">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      {isEdit ? (
        <CustomInput type={type} id={id} value={value} setValue={setValue} />
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
}

function CustomInput({ type, id, isRequired, value, setValue }) {
  return (
    <input
      className="border border-gray-300 rounded-md py-1 px-2 text-gray-900 grow"
      type={type}
      value={value}
      id={id}
      required={isRequired}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
