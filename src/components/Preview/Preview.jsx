import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";
import ProjectsPreview from "./ProjectsPreview";
import SkillsPreview from "./SkillsPreview";
import AchievementsPreview from "./AchievementsPreview";
import ExperiencePreview from "./ExperiencePreview";
import { usePDF } from "react-to-pdf";

export default function Preview({ resume }) {
  const { toPDF, targetRef } = usePDF();
  return (
    <div>
      <div
        ref={targetRef}
        className="flex flex-col gap-5 first-line:grow bg-gray-50 rounded-lg shadow-md p-5 mb-4"
      >
        {resume.personal && (
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
      <button
        className="w-full bg-purple-700 hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => toPDF()}
      >
        Download
      </button>
    </div>
  );
}
