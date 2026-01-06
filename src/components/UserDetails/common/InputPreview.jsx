import Bullets from "../../common/Bullets";

export default function InputPreview({ children, type }) {
  return (
    <div className="border-b border-gray-900 dark:border-gray-200 py-1 px-1 font-medium">
      {type === "textArea" ? <Bullets description={children} /> : children || "N/A"}
    </div>
  );
}
