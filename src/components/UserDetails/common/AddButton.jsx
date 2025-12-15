export default function AddButton({ children, onClick }) {
  return (
    <button
      type="button"
      className={`w-full font-bold py-2 px-4 rounded flex justify-center items-center my-3 gap-2 bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-slate-900`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
