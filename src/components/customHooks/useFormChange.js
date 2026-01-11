import { useEffect } from "react";
import { createFromTemplate } from "../utils/formHelper";

export function useFormChange(
  key,
  setResume,
  setState,
  setIsEdit,
  template,
  loadExample,
  resetForm,
  example
) {
  // effect to load example
  useEffect(() => {
    if (!loadExample) return;
    setState(example[key]);
    setResume((draft) => {
      draft[key] = example[key];
    });
    setIsEdit(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadExample]);

  useEffect(() => {
    if (!resetForm) return;
    setState([createFromTemplate(template)]);
    setResume((draft) => {
      draft[key] = [];
    });
    setIsEdit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetForm]);
}
