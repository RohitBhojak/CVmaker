import Italics from "./Italics";
import Subheading from "./Subheading";
import Bullets from "./Bullets";

export default function ExperiencePreview({ experience }) {
  return (
    <div>
      <Subheading>Experience</Subheading>
      {experience.map((exp) => (
        <ExperienceDetails key={exp.title} {...exp}></ExperienceDetails>
      ))}
    </div>
  );
}

function ExperienceDetails({
  title,
  company,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <h3 className="font-bold">{title}</h3>
        <Italics>
          {startDate} - {endDate}
        </Italics>
      </div>
      <Italics>{company}</Italics>
      <Bullets description={description}></Bullets>
    </div>
  );
}
