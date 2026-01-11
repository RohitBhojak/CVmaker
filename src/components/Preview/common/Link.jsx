export default function Link({ href }) {
  const title = href.replace(/^https?:\/\//, "");
  return (
    <a
      className="text-blue-600"
      href={href.includes("http") ? href : "https://" + href}
      target="_blank"
    >
      {title}
    </a>
  );
}
