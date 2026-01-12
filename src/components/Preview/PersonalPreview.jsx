import Link from "./common/Link";
import { Fragment } from "react";
export default function PersonalPreview({ personal }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-2">{personal.name}</h1>
      <div className="flex flex-wrap justify-center gap-2 text-sm">
        {personal.email && personal.phone && (
          <>
            <span>{personal.email}</span> <Divider /> <span>{personal.phone}</span>
          </>
        )}
        {personal.links.map(
          (link) =>
            link.value.length > 0 && (
              <Fragment key={link.id}>
                <Divider />
                <Link href={link.value}></Link>
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
