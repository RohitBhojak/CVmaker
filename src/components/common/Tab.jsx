const Tab = ({ onClick, isActive, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-md font-medium transition-all ${
        isActive
          ? "bg-white dark:bg-slate-800 shadow text-purple-600 dark:text-purple-400"
          : "text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 dark:text-gray-400"
      }`}
    >
      {children}
    </button>
  );
};

export default Tab;
