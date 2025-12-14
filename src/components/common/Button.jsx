export default function Button({
  children,
  onClick,
  type,
  className = "bg-purple-700 hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-700",
}) {
  return (
    <button
      type={type}
      className={`w-full text-white font-bold py-2 px-4 rounded flex justify-center items-center my-3 gap-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
