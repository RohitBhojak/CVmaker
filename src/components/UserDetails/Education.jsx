import { useImmer } from "use-immer";
import { useState } from "react";
import Dropdown from "./common/Dropdown";
import AddButton from "./common/AddButton";
import DeleteButton from "./common/DeleteButton";
import SubmitEditButton from "./common/SubmitEditButton";
import FormSubHeading from "./common/FormSubHeading";
import validate from "../utils/validate";
import { educationSchema } from "./schema";
import {
  createFromTemplate,
  dynamicFieldHelper,
  renderFieldFactory,
} from "../utils/formHelper";

const Education = ({ setResume, isActive, onClick, onClose }) => {
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
  const [education, setEducation] = useImmer([
    createFromTemplate(educationTemplate),
  ]);

  // handlers
  const submit = () => {
    // validate data and set errorsq
    const newErrors = {};
    let isValid = true;

    education.forEach((edu) => {
      const itemErrors = validate(edu, educationSchema);
      if (Object.keys(itemErrors).length > 0) {
        isValid = false;
        newErrors[edu.id] = itemErrors;
      }
    });

    setErrors(newErrors);
    if (!isValid) return;

    // update resume if no errors
    setResume((draft) => {
      draft.education = education;
    });

    // set isEdit to false
    setIsEdit(false);
  };

  // instantiate helper functions
  const { add: addEducation, delete: deleteEducation } =
    dynamicFieldHelper(setEducation);
  const renderField = renderFieldFactory(
    errors,
    isEdit,
    education,
    setEducation
  );

  // render
  return (
    <Dropdown
      heading={"Education Details"}
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
    >
      <form>
        {education.map((edu, index) => {
          return (
            <div key={edu.id} className="flex gap-2">
              <div className="grow">
                <div className="flex justify-between items-center mb-3">
                  <FormSubHeading>{`Education ${index + 1}`}</FormSubHeading>
                  {isEdit && (
                    <DeleteButton onClick={() => deleteEducation(index)} />
                  )}
                </div>
                {renderField("school", "School", "text", index)}
                {renderField("degree", "Degree", "text", index)}
                <div className="flex gap-2">
                  {renderField("startDate", "Start Date", "month", index)}
                  {renderField("endDate", "End Date", "month", index)}
                </div>
                {renderField("marks", "Marks", "number", index)}
              </div>
            </div>
          );
        })}
        {isEdit && (
          <AddButton onClick={() => addEducation(educationTemplate)}>
            + Add Education
          </AddButton>
        )}

        <SubmitEditButton
          isEdit={isEdit}
          onSubmit={submit}
          onEdit={() => setIsEdit(true)}
        ></SubmitEditButton>
      </form>
    </Dropdown>
  );
};

export default Education;
