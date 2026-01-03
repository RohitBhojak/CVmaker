export function Input({ type, id, isRequired, value, setValue }) {
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

export function TextArea({ id, isRequired, value, setValue }) {
  return (
    <textarea
      className="border border-gray-300 rounded-md py-1 px-2 text-gray-900 grow"
      placeholder="Use new line (Enter) for bullet points"
      value={value}
      id={id}
      required={isRequired}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
