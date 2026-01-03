import { useState } from "react";
import { useImmer } from "use-immer";
import Dropdown from "./common/Dropdown";
import SubmitEditButton from "./common/SubmitEditButton";
import validate from "../utils/validate";
import { achievementsSchema } from "./schema";
import { TextArea } from "./common/Inputs";
import renderFieldFactory from "./common/renderFieldFactory";

const Achievements = ({ setResume, isActive, onClick, onClose }) => {
  // achievement template
  const achievementTemplate = {
    description: "",
  };

  // states
  const [achievements, setAchievements] = useImmer({ ...achievementTemplate });
  const [isEdit, setIsEdit] = useState(true);
  const [errors, setErrors] = useState({});

  // submit handler
  const handleSubmit = () => {
    // validate data and set errors
    const newErrors = validate(achievements, achievementsSchema);
    setErrors(newErrors);
    // early return if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // update resume if no errors
    setResume((draft) => {
      draft.achievements = achievements;
    });

    // set isEdit to false
    setIsEdit(false);
  };

  // instantiate helper functions
  const renderField = renderFieldFactory(errors, isEdit, achievements, setAchievements);

  // render
  return (
    <Dropdown
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
      heading={"Achievement Details"}
    >
      <form>
        {renderField(TextArea, "description", "Description")}
        <SubmitEditButton isEdit={isEdit} onSubmit={handleSubmit} onEdit={() => setIsEdit(true)} />
      </form>
    </Dropdown>
  );
};

export default Achievements;
