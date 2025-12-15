import { Trash2 } from "lucide-react";
const DeleteButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-bold py-2 px-4 rounded flex justify-center items-center my-3 gap-2 bg-transparent hover:bg-red-100 text-slate-400 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 p-2 w-auto mb-3 self-end shadow-none`}
    >
      <Trash2 size={20} />
    </button>
  );
};

export default DeleteButton;
