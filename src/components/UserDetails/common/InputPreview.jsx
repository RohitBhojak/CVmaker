import Bullets from "../../common/Bullets";

export default function InputPreview({ children }) {
  return (
    <div className="border-b border-gray-900 dark:border-gray-200 py-1 px-1 font-medium">
      {children.includes("\n") ? <Bullets description={children} /> : children || "N/A"}
    </div>
  );
}
