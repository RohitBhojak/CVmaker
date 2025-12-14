import { useState } from "react";
import Dropdown from "./common/Dropdown";
import { v4 } from "uuid";

const Achievements = ({ setResume, isActive, onClick, onClose }) => {
  const [achievements, setAchievements] = useState([
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
      heading={"Achievements Details"}
      onClick={onClick}
      onClose={onClose}
      isActive={isActive}
    ></Dropdown>
  );
};

export default Achievements;
