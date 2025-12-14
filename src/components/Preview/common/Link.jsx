export default function Link({ title, href }) {
  return (
    <a className="text-blue-600" href={href}>
      {title}
    </a>
  );
}
