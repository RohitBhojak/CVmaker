import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";
import ProjectsPreview from "./ProjectsPreview";
import { usePDF } from "react-to-pdf";

export default function Preview({ resume }) {
  const { toPDF, targetRef } = usePDF();
  return (
    <div>
      <div
        ref={targetRef}
        className="flex flex-col gap-5 first-line:grow bg-gray-50 rounded-lg shadow-md p-5 mb-4"
      >
        <PersonalPreview personal={resume.personal}></PersonalPreview>
        <EducationPreview education={resume.education}></EducationPreview>
        <ProjectsPreview projects={resume.projects}></ProjectsPreview>
        {/* <SkillsPreview skills={resume.skills}></SkillsPreview> */}
        {/* <ExtrasPreview extras={resume.extras}></ExtrasPreview> */}
      </div>
      <button
        className="w-full bg-purple-700 hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => toPDF()}
      >
        Download
      </button>
    </div>
  );
}
