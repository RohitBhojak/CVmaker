import { useState } from "react";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import WorkExperience from "./WorkExperience.jsx";
import Achievements from "./Achievements.jsx";
export default function UserInfo({ setResume }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClose = () => setActiveIndex(-1);
  return (
    <div className="grow overflow-y-auto flex flex-col gap-4">
      <Personal
        setResume={setResume}
        isActive={activeIndex === 0}
        onClick={() => setActiveIndex(0)}
        onClose={onClose}
      ></Personal>
      <Education
        setResume={setResume}
        isActive={activeIndex === 1}
        onClick={() => setActiveIndex(1)}
        onClose={onClose}
      ></Education>
      <Projects
        setResume={setResume}
        isActive={activeIndex === 2}
        onClick={() => setActiveIndex(2)}
        onClose={onClose}
      ></Projects>
      <Skills
        setResume={setResume}
        isActive={activeIndex === 3}
        onClick={() => setActiveIndex(3)}
        onClose={onClose}
      ></Skills>
      <WorkExperience
        setResume={setResume}
        isActive={activeIndex === 4}
        onClick={() => setActiveIndex(4)}
        onClose={onClose}
      ></WorkExperience>
      <Achievements
        setResume={setResume}
        isActive={activeIndex === 5}
        onClick={() => setActiveIndex(5)}
        onClose={onClose}
      ></Achievements>
    </div>
  );
}
