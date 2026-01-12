import Subheading from "./common/Subheading";
export default function SkillsPreview({ skills }) {
  return (
    <div>
      <Subheading>Skills</Subheading>
      {skills.map((skill) => (
        <SkillsDetails key={skill.id} {...skill}></SkillsDetails>
      ))}
    </div>
  );
}

function SkillsDetails({ title, description }) {
  return (
    <div>
      <b>{title}: </b>
      <span>{description}</span>
    </div>
  );
}
