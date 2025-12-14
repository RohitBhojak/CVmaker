import { useState } from "react";
import Dropdown from "./common/Dropdown";
import { v4 } from "uuid";

const Projects = ({ setResume, isActive, onClick, onClose }) => {
  const [projects, setProjects] = useState([
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
      heading={"Projects Details"}
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
    ></Dropdown>
  );
};

export default Projects;
