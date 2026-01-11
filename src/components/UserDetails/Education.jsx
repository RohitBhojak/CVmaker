import { useImmer } from "use-immer";
import { useState } from "react";
import Dropdown from "./common/Dropdown";
import AddButton from "./common/AddButton";
import DeleteButton from "./common/DeleteButton";
import SubmitEditButton from "./common/SubmitEditButton";
import FormSubHeading from "./common/FormSubHeading";
import { educationSchema } from "./schema";
import { createFromTemplate, dynamicFieldHelper, handleSubmitFactory } from "../utils/formHelper";
import renderFieldFactory from "./common/renderFieldFactory";
import { Input } from "./common/Inputs";
import example from "../example";
import { useFormChange } from "../customHooks/useFormChange";

const Education = ({ resetForm, loadExample, setResume, isActive, onClick, onClose }) => {
  // template
  const educationTemplate = {
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    marks: "",
  };

  // states
  const [isEdit, setIsEdit] = useState(true);
  const [errors, setErrors] = useState({});
  const [education, setEducation] = useImmer([createFromTemplate(educationTemplate)]);

  // effects to load example and reset form
  useFormChange(
    "education",
    setResume,
    setEducation,
    setIsEdit,
    educationTemplate,
    loadExample,
    resetForm,
    example
  );

  // instantiate helper functions
  const { add: addEducation, delete: deleteEducation } = dynamicFieldHelper(setEducation);

  const renderField = renderFieldFactory(errors, isEdit, education, setEducation);

  const handleSubmit = handleSubmitFactory(
    "education",
    education,
    educationSchema,
    setErrors,
    setResume,
    setIsEdit
  );

  // render
  return (
    <Dropdown heading={"Education Details"} onClick={onClick} onClose={onClose} isActive={isActive}>
      <form>
        {education.map((edu, index) => {
          return (
            <div key={edu.id} className="flex gap-2">
              <div className="grow">
                <div className="flex justify-between items-center mb-3">
                  <FormSubHeading>{`Education ${index + 1}`}</FormSubHeading>
                  {isEdit && <DeleteButton onClick={() => deleteEducation(index)} />}
                </div>
                {renderField(Input, "school", "School", "text", index)}
                {renderField(Input, "degree", "Degree", "text", index)}
                <div className="flex gap-2">
                  {renderField(Input, "startDate", "Start Date", "month", index)}
                  {renderField(Input, "endDate", "End Date", "month", index)}
                </div>
                {renderField(Input, "marks", "Marks", "number", index)}
              </div>
            </div>
          );
        })}
        {isEdit && (
          <AddButton onClick={() => addEducation(educationTemplate)}>+ Add Education</AddButton>
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

export default Education;
