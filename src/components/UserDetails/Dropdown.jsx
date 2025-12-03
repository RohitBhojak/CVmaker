export default function Dropdown({ children }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-5 flex flex-col gap-4 rounded-lg shadow-md text-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
}
