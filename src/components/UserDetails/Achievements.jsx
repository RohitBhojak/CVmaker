import { useState } from "react";
import { useImmer } from "use-immer";
import Dropdown from "./common/Dropdown";
import SubmitEditButton from "./common/SubmitEditButton";
import { TextArea } from "./common/Inputs";
import renderFieldFactory from "./common/renderFieldFactory";
import example from "../example";
import { useFormChange } from "../customHooks/useFormChange";

const Achievements = ({ loadExample, resetForm, setResume, isActive, onClick, onClose }) => {
  // achievement template
  const achievementTemplate = {
    description: "",
  };

  // states
  const [achievements, setAchievements] = useImmer({ ...achievementTemplate });
  const [isEdit, setIsEdit] = useState(true);

  // effects to load example and reset form
  useFormChange(
    "achievements",
    setResume,
    setAchievements,
    setIsEdit,
    achievementTemplate,
    loadExample,
    resetForm,
    example
  );

  // submit handler
  const handleSubmit = () => {
    // update resume
    setResume((draft) => {
      draft.achievements = achievements;
    });

    // set isEdit to false
    setIsEdit(false);
  };

  // instantiate helper functions
  const renderField = renderFieldFactory({}, isEdit, achievements, setAchievements);

  // render
  return (
    <Dropdown
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
      heading={"Achievement Details"}
    >
      <form>
        {renderField(TextArea, "description", "Description", "textArea", -1, false)}
        <SubmitEditButton isEdit={isEdit} onSubmit={handleSubmit} onEdit={() => setIsEdit(true)} />
      </form>
    </Dropdown>
  );
};

export default Achievements;
