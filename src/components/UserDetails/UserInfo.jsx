import { useState } from "react";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Achievements from "./Achievements.jsx";
import Button from "../common/Button.jsx";
import { FileText, RotateCcw } from "lucide-react";
import { formStateFactory } from "../utils/formHelper.js";

export default function UserInfo({ setResume }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const onClose = () => setActiveIndex(-1);
  const [loadExample, setLoadExample] = useState(false);
  const [resetForm, setResetForm] = useState(false);

  const handleLoadExample = formStateFactory(setLoadExample);
  const handleResetForm = formStateFactory(setResetForm);

  const propsFactory = (index) => ({
    isActive: activeIndex === index,
    onClick: () => setActiveIndex(index),
    setResume,
    onClose,
    loadExample,
    resetForm,
  });

  return (
    <div className="lg:overflow-y-auto flex flex-col gap-4 h-full">
      <Personal {...propsFactory(0)}></Personal>
      <Education {...propsFactory(1)}></Education>
      <Experience {...propsFactory(2)}></Experience>
      <Projects {...propsFactory(3)}></Projects>
      <Skills {...propsFactory(4)}></Skills>
      <Achievements {...propsFactory(5)}></Achievements>
      <div className="mt-auto flex gap-3">
        <Button onClick={handleLoadExample}>
          <FileText size={16} /> Load Example
        </Button>
        <Button onClick={handleResetForm}>
          <RotateCcw size={16} /> Reset Form
        </Button>
      </div>
    </div>
  );
}
