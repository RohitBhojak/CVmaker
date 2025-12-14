import ArrowButton from "./ArrowButton";
import FormHeading from "./FormHeading";

export default function Dropdown({
  heading,
  isActive,
  onClick,
  onClose,
  children,
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-5 flex flex-col gap-4 rounded-lg shadow-md text-gray-900 dark:text-gray-100">
      <div className="flex justify-between">
        <FormHeading>{heading}</FormHeading>
        <ArrowButton onClick={onClick} onClose={onClose} isActive={isActive} />
      </div>
      {isActive && <div>{children}</div>}
    </div>
  );
}
