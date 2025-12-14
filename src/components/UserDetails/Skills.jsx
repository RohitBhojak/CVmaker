import { useState } from "react";
import Dropdown from "./common/Dropdown";
import { v4 } from "uuid";

const Skills = ({ setResume, isActive, onClick, onClose }) => {
  const [skills, setSkills] = useState([
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
      heading={"Skills Details"}
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
    ></Dropdown>
  );
};

export default Skills;
