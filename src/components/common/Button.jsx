export default function Button({ children, onClick }) {
  return (
    <button
      className={`w-full text-white font-bold py-2 px-4 rounded flex justify-center items-center my-3 gap-2 bg-purple-700 hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-700`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
