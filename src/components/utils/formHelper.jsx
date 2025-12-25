import { v4 } from "uuid";
import InputField from "../UserDetails/common/InputField";

// creates a new object with a unique id from a template
export function createFromTemplate(template) {
  return {
    id: v4(),
    ...template,
  };
}

// Helper functions to add and delete dynamic fields
export function dynamicFieldHelper(setState) {
  return {
    add: (template) => {
      setState((draft) => {
        draft.push(createFromTemplate(template));
      });
    },
    delete: (index) => {
      setState((draft) => {
        draft.splice(index, 1);
      });
    },
  };
}

// Factory function to render fields

export function renderFieldFactory(errors, isEdit, state, setState) {
  const handleInputChange = (key, value, index) => {
    setState((draft) => {
      if (index === -1) {
        draft[key] = value;
      } else {
        draft[index][key] = value;
      }
    });
  };

  return (key, label, type = "text", index = -1, isRequired = true) => {
    const fieldValue = index === -1 ? state[key] : state[index]?.[key] || "";
    const fieldId = index === -1 ? key : `${key}-${index}`;
    const fieldError =
      index === -1 ? errors[key] : errors?.[state[index]?.id]?.[key];

    return (
      <InputField
        label={label}
        type={type}
        id={fieldId}
        isRequired={isRequired}
        error={fieldError}
        isEdit={isEdit}
        value={fieldValue}
        setValue={(val) => handleInputChange(key, val, index)}
      />
    );
  };
}
