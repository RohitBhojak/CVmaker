import { useState } from "react";
import Dropdown from "./Dropdown";
import { v4 } from "uuid";

const Education = ({ setResume, isActive, onClick, onClose }) => {
  const [education, setEducation] = useState([
    {
      id: v4(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      marks: "",
    },
  ]);
  return (
    <Dropdown
      heading={"Education Details"}
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
    ></Dropdown>
  );
};

export default Education;
