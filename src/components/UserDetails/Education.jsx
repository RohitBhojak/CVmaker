import Dropdown from "./common/Dropdown";
import InputField from "./common/InputField";
import { v4 } from "uuid";
import { useImmer } from "use-immer";
import { useState } from "react";

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
    setEducation((draft) =>
      draft.push({
        id: v4(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        marks: "",
      })
    );
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
                <h3>{`Education ${index + 1}`}</h3>
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
              </div>
            </div>
          );
        })}
      </form>
    </Dropdown>
  );
};

export default Education;
