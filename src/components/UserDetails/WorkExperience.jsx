import { useState } from "react";
import Dropdown from "./common/Dropdown";
import { v4 } from "uuid";

const WorkExperience = ({ setResume, isActive, onClick, onClose }) => {
  const [workExperience, setWorkExperience] = useState([
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
      heading={"Work Experience Details"}
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
    ></Dropdown>
  );
};

export default WorkExperience;
