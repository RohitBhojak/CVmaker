import ErrorMessage from "./ErrorMessage.jsx";
// Factory function to create render field function
export default function renderFieldFactory(errors, isEdit, state, setState) {
  const handleInputChange = (key, value, index) => {
    setState((draft) => {
      if (index === -1) {
        draft[key] = value;
      } else {
        draft[index][key] = value;
      }
    });
  };

  return (Component, key, label, type = "text", index = -1, isRequired = true) => {
    const fieldValue = index === -1 ? state[key] : state[index]?.[key] || "";
    const fieldId = index === -1 ? key : `${key}-${index}`;
    const fieldError = index === -1 ? errors[key] : errors?.[state[index]?.id]?.[key];

    return (
      <div className="flex flex-col gap-1 mb-3 grow">
        <label htmlFor={fieldId} className="text-lg">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
        {isEdit ? (
          <Component
            type={type}
            id={fieldId}
            value={fieldValue}
            setValue={(val) => handleInputChange(key, val, index)}
          />
        ) : (
          <p>{fieldValue}</p>
        )}
        {isEdit && fieldError && <ErrorMessage message={fieldError} />}
      </div>
    );
  };
}
