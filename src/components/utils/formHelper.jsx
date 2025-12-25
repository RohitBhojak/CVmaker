import { v4 } from "uuid";
import InputField from "../UserDetails/common/InputField";
import validate from "./validate";

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

export function handleSubmitFactory(
  stateName,
  state,
  schema,
  setErrors,
  setResume,
  setIsEdit
) {
  console.log(state);
  return () => {
    // validate data and set errors
    const newErrors = {};
    let isValid = true;

    state.forEach((item) => {
      const itemErrors = validate(item, schema);
      if (Object.keys(itemErrors).length > 0) {
        isValid = false;
        newErrors[item.id] = itemErrors;
      }
    });

    setErrors(newErrors);
    if (!isValid) return;

    // update resume if no errors
    setResume((draft) => {
      draft[stateName] = state;
    });

    // set isEdit to false
    setIsEdit(false);
  };
}
