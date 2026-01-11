import Link from "./common/Link";
import { Fragment } from "react";
export default function PersonalPreview({ personal }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-2">{personal.name}</h1>
      <div className="flex flex-wrap justify-center gap-2 text-sm">
        <span>{personal.email}</span> <Divider /> <span>{personal.phone}</span>
        {personal.links.map(
          (link) =>
            link.length > 0 && (
              <Fragment key={link}>
                <Divider />
                <Link href={link}></Link>
              </Fragment>
            )
        )}
      </div>
    </div>
  );
}

function Divider() {
  return <span> | </span>;
}
