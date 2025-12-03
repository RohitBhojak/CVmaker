import { useState } from "react";
import Personal from "./Personal.jsx";
export default function UserInfo({ resume, setResume }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="grow">
      <Personal
        resume={resume}
        setResume={setResume}
        isActive={activeIndex === 0}
        onClick={() => setActiveIndex(0)}
      ></Personal>
      {/* <Education></Education>
      <Projects></Projects>
      <Skills></Skills>
      <WorkExperience></WorkExperience> */}
    </div>
  );
}
