import Dropdown from "./common/Dropdown";
import InputField from "./common/InputField";
import { v4 } from "uuid";
import { useImmer } from "use-immer";
import { useState } from "react";
import AddButton from "./common/AddButton";
import DeleteButton from "./common/DeleteButton";
import SubmitEditButton from "./common/SubmitEditButton";
import FormSubHeading from "./common/FormSubHeading";

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

  const submit = (e) => {
    e.preventDefault();
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
            <div key={edu.id} className="flex items-end gap-2">
              <div className="grow">
                <div className="flex justify-between items-center">
                  <FormSubHeading>{`Education ${index + 1}`}</FormSubHeading>
                  <DeleteButton onClick={deleteEducation} />
                </div>
                <InputField
                  label="School"
                  type="text"
                  id="school"
                  isRequired
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
                  id="degree"
                  isRequired
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
                    id="startDate"
                    isRequired
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
                    id="endDate"
                    isRequired
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
                  id="marks"
                  isRequired
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
