import { useState } from "react";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
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
      {/* <Projects></Projects> */}
      {/* <Skills></Skills> */}
      {/* <WorkExperience></WorkExperience>  */}
      {/* <Achievements></Achievements> */}
    </div>
  );
}
