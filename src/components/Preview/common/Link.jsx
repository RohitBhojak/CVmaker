export default function Link({ title, href }) {
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
