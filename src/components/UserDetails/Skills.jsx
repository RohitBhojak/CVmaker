import { useState } from "react";
import { useImmer } from "use-immer";
import Dropdown from "./common/Dropdown";
import AddButton from "./common/AddButton";
import DeleteButton from "./common/DeleteButton";
import SubmitEditButton from "./common/SubmitEditButton";
import FormSubHeading from "./common/FormSubHeading";
import { skillsSchema } from "./schema";
import { createFromTemplate, dynamicFieldHelper, handleSubmitFactory } from "../utils/formHelper";
import renderFieldFactory from "./common/renderFieldFactory";
import { Input } from "./common/Inputs";
import example from "../example";
import { useFormChange } from "../customHooks/useFormChange";

const Skills = ({ loadExample, resetForm, setResume, isActive, onClick, onClose }) => {
  // template
  const skillTemplate = {
    title: "",
    description: "",
  };

  // states
  const [skills, setSkills] = useImmer([createFromTemplate(skillTemplate)]);
  const [isEdit, setIsEdit] = useState(true);
  const [errors, setErrors] = useState({});

  // effects to load example and reset form
  useFormChange(
    "skills",
    setResume,
    setSkills,
    setIsEdit,
    skillTemplate,
    loadExample,
    resetForm,
    example
  );

  // instantiate helper functions
  const { add: addSkill, delete: deleteSkill } = dynamicFieldHelper(setSkills);

  const renderField = renderFieldFactory(errors, isEdit, skills, setSkills);

  const handleSubmit = handleSubmitFactory(
    "skills",
    skills,
    skillsSchema,
    setErrors,
    setResume,
    setIsEdit
  );

  // render
  return (
    <Dropdown heading={"Skill Details"} onClick={onClick} onClose={onClose} isActive={isActive}>
      <form>
        {skills.map((skill, index) => {
          return (
            <div key={skill.id} className="flex gap-2">
              <div className="grow">
                <div className="flex justify-between items-center mb-3">
                  <FormSubHeading>{`Skill ${index + 1}`}</FormSubHeading>
                  {isEdit && <DeleteButton onClick={() => deleteSkill(index)} />}
                </div>
                {renderField(Input, "title", "Title", "text", index)}
                {renderField(Input, "description", "Description", "text", index)}
              </div>
            </div>
          );
        })}
        {isEdit && <AddButton onClick={() => addSkill(skillTemplate)}>+ Add Skill</AddButton>}

        <SubmitEditButton
          isEdit={isEdit}
          onSubmit={handleSubmit}
          onEdit={() => setIsEdit(true)}
        ></SubmitEditButton>
      </form>
    </Dropdown>
  );
};

export default Skills;
