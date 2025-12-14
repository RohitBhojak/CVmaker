import Subheading from "./common/Subheading";
import Italics from "./common/Italics";
export default function EducationPreview({ education }) {
  return (
    <div>
      <Subheading>Education</Subheading>
      {education.map((edu) => (
        <EducationDetails key={edu.degree} {...edu}></EducationDetails>
      ))}
    </div>
  );
}

function EducationDetails({ school, degree, startDate, endDate, marks }) {
  return (
    <div className="flex justify-between">
      <h3>
        {degree}, {school}: <strong>{marks}</strong>
      </h3>
      <Italics>
        {startDate} - {endDate}
      </Italics>
    </div>
  );
}
