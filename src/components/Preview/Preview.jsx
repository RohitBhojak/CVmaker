import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";
import ProjectsPreview from "./ProjectsPreview";
import SkillsPreview from "./SkillsPreview";
import AchievementsPreview from "./AchievementsPreview";
import ExperiencePreview from "./ExperiencePreview";
import { usePDF } from "react-to-pdf";
import { Download } from "lucide-react";
import Button from "../common/Button";

export default function Preview({ resume }) {
  const { toPDF, targetRef } = usePDF();
  return (
    <div>
      <div
        ref={targetRef}
        className="flex flex-col gap-5 bg-gray-50 rounded-lg p-5 mb-4"
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
        {resume.skills.length > 0 && (
          <SkillsPreview skills={resume.skills}></SkillsPreview>
        )}
        {resume.achievements.length > 0 && (
          <AchievementsPreview
            achievements={resume.achievements}
          ></AchievementsPreview>
        )}
      </div>
      <Button onClick={() => toPDF()}>
        <Download /> Download
      </Button>
    </div>
  );
}
