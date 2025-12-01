import Link from "./Link";
export default function PersonalPreview({ personal }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-2">{personal.name}</h1>
      <div className="flex flex-wrap justify-center gap-2">
        <span>{personal.email}</span> <Divider /> <span>{personal.phone}</span>
        {personal.links.map((link) => (
          <>
            <Divider />
            <Link
              title={link}
              href={"https://" + link}
              target={"_blank"}
            ></Link>
          </>
        ))}
      </div>
    </div>
  );
}

function Divider() {
  return <span> | </span>;
}
