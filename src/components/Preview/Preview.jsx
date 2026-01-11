import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";
import ProjectsPreview from "./ProjectsPreview";
import SkillsPreview from "./SkillsPreview";
import AchievementsPreview from "./AchievementsPreview";
import ExperiencePreview from "./ExperiencePreview";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Download } from "lucide-react";
import Button from "../common/Button";

export default function Preview({ resume }) {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "resume",
    pageStyle: `
    @page {
      size: A4;
      margin: 15mm;
    }
    @media print {
      #preview {
        background-color: white;
        padding: 0;
      }
    }
  `,
  });
  return (
    <div className="h-full flex flex-col">
      <div
        ref={contentRef}
        className="lg:overflow-y-auto flex flex-col gap-5 bg-gray-50 rounded-lg p-5 h-full"
        style={{
          fontSize: "11pt",
        }}
        id="preview"
      >
        {Object.keys(resume.personal).length > 0 && (
          <PersonalPreview personal={resume.personal}></PersonalPreview>
        )}
        {resume.education.length > 0 && (
          <EducationPreview education={resume.education}></EducationPreview>
        )}
        {resume.experience.length > 0 && (
          <ExperiencePreview experience={resume.experience}></ExperiencePreview>
        )}
        {resume.projects.length > 0 && (
          <ProjectsPreview projects={resume.projects}></ProjectsPreview>
        )}
        {resume.skills.length > 0 && <SkillsPreview skills={resume.skills}></SkillsPreview>}
        {resume.achievements.description?.trim().length > 0 && (
          <AchievementsPreview achievements={resume.achievements}></AchievementsPreview>
        )}
      </div>
      <Button onClick={reactToPrintFn}>
        <Download /> Download
      </Button>
    </div>
  );
}
