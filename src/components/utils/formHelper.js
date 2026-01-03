import { v4 } from "uuid";
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

// Factory function to create form submit handler
export function handleSubmitFactory(stateName, state, schema, setErrors, setResume, setIsEdit) {
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
