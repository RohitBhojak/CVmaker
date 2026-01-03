import { ChevronDown } from "lucide-react";

export default function ArrowButton({ onClick, onClose, isActive }) {
  return (
    <button onClick={isActive ? onClose : onClick}>
      <ChevronDown
        className={`transition-transform duration-300 ease-in-out ${isActive ? "rotate-180" : ""}`}
      />
    </button>
  );
}
