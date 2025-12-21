import Dropdown from "./common/Dropdown";
import InputField from "./common/InputField";
import { v4 } from "uuid";
import { useImmer } from "use-immer";
import { useState } from "react";
import AddButton from "./common/AddButton";
import DeleteButton from "./common/DeleteButton";
import SubmitEditButton from "./common/SubmitEditButton";
import FormSubHeading from "./common/FormSubHeading";
import validate from "../utils/validate";
import { educationSchema } from "./schema";

const Education = ({ setResume, isActive, onClick, onClose }) => {
  const [isEdit, setIsEdit] = useState(true);
  const [education, setEducation] = useImmer([
    {
      id: v4(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      marks: "",
    },
  ]);

  const [errors, setErrors] = useState({});

  const submit = (e) => {
    e.preventDefault();

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

    setResume((draft) => {
      draft.education = education;
    });
    setIsEdit(false);
  };

  const edit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const addEducation = () => {
    setEducation((draft) => {
      draft.push({
        id: v4(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        marks: "",
      });
    });
  };

  const deleteEducation = (index) => {
    setEducation((draft) => {
      draft.splice(index, 1);
    });
  };

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
                <InputField
                  label="School"
                  type="text"
                  id={`school-${edu.id}`}
                  isRequired
                  error={errors[edu.id]?.school}
                  isEdit={isEdit}
                  value={edu.school}
                  setValue={(value) =>
                    setEducation((draft) => {
                      draft[index].school = value;
                    })
                  }
                ></InputField>

                <InputField
                  label="Degree"
                  type="text"
                  id={`degree-${edu.id}`}
                  isRequired
                  error={errors[edu.id]?.degree}
                  isEdit={isEdit}
                  value={edu.degree}
                  setValue={(value) =>
                    setEducation((draft) => {
                      draft[index].degree = value;
                    })
                  }
                ></InputField>
                <div className="flex gap-2">
                  <InputField
                    label="Start Date"
                    type="month"
                    id={`startDate-${edu.id}`}
                    isRequired
                    error={errors[edu.id]?.startDate}
                    isEdit={isEdit}
                    value={edu.startDate}
                    setValue={(value) =>
                      setEducation((draft) => {
                        draft[index].startDate = value;
                      })
                    }
                  ></InputField>

                  <InputField
                    label="End Date"
                    type="month"
                    id={`endDate-${edu.id}`}
                    isRequired
                    error={errors[edu.id]?.endDate}
                    isEdit={isEdit}
                    value={edu.endDate}
                    setValue={(value) =>
                      setEducation((draft) => {
                        draft[index].endDate = value;
                      })
                    }
                  ></InputField>
                </div>

                <InputField
                  label="Marks"
                  type="text"
                  id={`marks-${edu.id}`}
                  isRequired
                  error={errors[edu.id]?.marks}
                  isEdit={isEdit}
                  value={edu.marks}
                  setValue={(value) =>
                    setEducation((draft) => {
                      draft[index].marks = value;
                    })
                  }
                ></InputField>
              </div>
            </div>
          );
        })}
        {isEdit && (
          <AddButton onClick={addEducation}>+ Add Education</AddButton>
        )}

        <SubmitEditButton
          isEdit={isEdit}
          onSubmit={submit}
          onEdit={edit}
        ></SubmitEditButton>
      </form>
    </Dropdown>
  );
};

export default Education;
