import { useState } from "react";
import Dropdown from "./common/Dropdown";
import { v4 } from "uuid";

const WorkExperience = ({ setResume, isActive, onClick, onClose }) => {
  const [experience, setExperience] = useState([
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
      heading={"Experience Details"}
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
    ></Dropdown>
  );
};

export default WorkExperience;
