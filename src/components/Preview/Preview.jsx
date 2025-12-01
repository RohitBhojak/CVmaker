import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";

export default function Preview({ resume }) {
  return (
    <div className="flex flex-col gap-5 first-line:grow bg-gray-50 rounded-lg shadow-md p-5">
      <PersonalPreview personal={resume.personal}></PersonalPreview>
      <EducationPreview education={resume.education}></EducationPreview>
      {/* <ProjectsPreview projects={resume.projects}></ProjectsPreview>
      <SkillsPreview skills={resume.skills}></SkillsPreview>
      <ExtrasPreview extras={resume.extras}></ExtrasPreview> */}
    </div>
  );
}
