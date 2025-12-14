import { ChevronDown } from "lucide-react";
const ArrowButton = ({ onClick, onClose, isActive }) => {
  return isActive ? (
    <button onClick={onClose}>
      <ChevronDown className="rotate-180" />
    </button>
  ) : (
    <button onClick={onClick}>
      <ChevronDown />
    </button>
  );
};

export default ArrowButton;
