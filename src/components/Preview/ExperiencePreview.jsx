import Italics from "./common/Italics";
import Subheading from "./common/Subheading";
import Bullets from "../common/Bullets";
import formatDate from "../utils/formatDate";

export default function ExperiencePreview({ experience }) {
  return (
    <div>
      <Subheading>Experience</Subheading>
      {experience.map((exp) => (
        <ExperienceDetails key={exp.id} {...exp}></ExperienceDetails>
      ))}
    </div>
  );
}

function ExperienceDetails({ title, company, startDate, endDate, description }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <h3 className="font-bold">{title}</h3>
        <Italics>
          {formatDate(startDate)} - {formatDate(endDate)}
        </Italics>
      </div>
      <Italics>{company}</Italics>
      <Bullets description={description}></Bullets>
    </div>
  );
}
