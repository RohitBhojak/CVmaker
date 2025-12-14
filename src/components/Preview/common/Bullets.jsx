export default function Bullets({ description }) {
  const list = [];
  description.split("\n").map((item, index) => {
    list.push([index, item]);
  });
  return (
    <ul className="ml-5">
      {list.map((item) => (
        <li key={item[0]} className="list-disc">
          {item[1]}
        </li>
      ))}
    </ul>
  );
}
