import PersonalPreview from "./PersonalPreview";

export default function Preview({ resume }) {
  return (
    <div className="grow bg-gray-50 rounded-lg shadow-md p-5">
      <PersonalPreview personal={resume.personal}></PersonalPreview>
      {/* <EducationPreview education={resume.education}></EducationPreview>
      <ProjectsPreview projects={resume.projects}></ProjectsPreview>
      <SkillsPreview skills={resume.skills}></SkillsPreview>
      <ExtrasPreview extras={resume.extras}></ExtrasPreview> */}
    </div>
  );
}
