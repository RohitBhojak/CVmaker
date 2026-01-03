import Bullets from "../../common/Bullets";

export default function InputPreview({ value }) {
  return (
    <p className="border-b border-gray-900 dark:border-gray-200 py-1 px-1 font-medium">
      {value.includes("\n") ? <Bullets description={value} /> : value || "N/A"}
    </p>
  );
}
