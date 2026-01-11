import { useState } from "react";
import { useImmer } from "use-immer";
import Dropdown from "./common/Dropdown";
import AddButton from "./common/AddButton";
import DeleteButton from "./common/DeleteButton";
import SubmitEditButton from "./common/SubmitEditButton";
import FormSubHeading from "./common/FormSubHeading";
import { experienceSchema } from "./schema";
import { createFromTemplate, dynamicFieldHelper, handleSubmitFactory } from "../utils/formHelper";
import renderFieldFactory from "./common/renderFieldFactory";
import { Input, TextArea } from "./common/Inputs";
import example from "../example";
import { useFormChange } from "../customHooks/useFormChange";

const Experience = ({ loadExample, resetForm, setResume, isActive, onClick, onClose }) => {
  // template
  const experienceTemplate = {
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  // states
  const [experience, setExperience] = useImmer([createFromTemplate(experienceTemplate)]);
  const [isEdit, setIsEdit] = useState(true);
  const [errors, setErrors] = useState({});

  // effects to load example and reset form
  useFormChange(
    "experience",
    setResume,
    setExperience,
    setIsEdit,
    experienceTemplate,
    loadExample,
    resetForm,
    example
  );

  // instantiate helper functions
  const { add: addExperience, delete: deleteExperience } = dynamicFieldHelper(setExperience);

  const renderField = renderFieldFactory(errors, isEdit, experience, setExperience);

  const handleSubmit = handleSubmitFactory(
    "experience",
    experience,
    experienceSchema,
    setErrors,
    setResume,
    setIsEdit
  );

  // render
  return (
    <Dropdown
      heading={"Experience Details"}
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
    >
      <form>
        {experience.map((experience, index) => {
          return (
            <div key={experience.id} className="flex gap-2">
              <div className="grow">
                <div className="flex justify-between items-center mb-3">
                  <FormSubHeading>{`Experience ${index + 1}`}</FormSubHeading>
                  {isEdit && <DeleteButton onClick={() => deleteExperience(index)} />}
                </div>
                {renderField(Input, "title", "Title", "text", index)}
                {renderField(Input, "company", "Company", "text", index)}
                <div className="flex gap-2">
                  {renderField(Input, "startDate", "Start Date", "month", index)}
                  {renderField(Input, "endDate", "End Date", "month", index)}
                </div>
                {renderField(TextArea, "description", "Description", "textArea", index)}
              </div>
            </div>
          );
        })}
        {isEdit && (
          <AddButton onClick={() => addExperience(experienceTemplate)}>+ Add Experience</AddButton>
        )}

        <SubmitEditButton
          isEdit={isEdit}
          onSubmit={handleSubmit}
          onEdit={() => setIsEdit(true)}
        ></SubmitEditButton>
      </form>
    </Dropdown>
  );
};

export default Experience;
