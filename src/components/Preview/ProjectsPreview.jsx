import Link from "./common/Link";
import Subheading from "./common/Subheading";
import Bullets from "./common/Bullets";

export default function ProjectsPreview({ projects }) {
  return (
    <div>
      <Subheading>Projects</Subheading>
      {projects.map((project) => (
        <ProjectDetails key={project.name} {...project}></ProjectDetails>
      ))}
    </div>
  );
}

function ProjectDetails({ name, link, description }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <h3 className="font-bold">{name}</h3>
        {link && <Link title="GitHub" href={link}></Link>}
      </div>
      <Bullets description={description}></Bullets>
    </div>
  );
}
