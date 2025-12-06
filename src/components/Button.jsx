export default function Button({ children, onClick }) {
  return (
    <button
      className="w-full bg-purple-700 hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
