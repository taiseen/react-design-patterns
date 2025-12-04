import useClickOutside from "../hooks/useClickOutside";
import Button from "../../../components/ui/Button";
import { useState, useRef } from "react";

const options = ["Option 1", "Option 2", "Option 3"];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div
      ref={dropdownRef}
      className="relative p-4 flex flex-col gap-4 items-center border border-slate-600 rounded shadow"
    >
      <Button onClick={() => setIsOpen(!isOpen)}>
        Toggle Menu{" "}
        <span
          className={`inline-block transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </Button>

      {/* Always render the dropdown, but control visibility via classes */}
      <ul
        className={`absolute top-full left-1/2 mt-2 w-48 bg-slate-700 border border-gray-600 rounded shadow-lg
          origin-top
          transform -translate-x-1/2
          transition-all duration-200 ease-out
          z-10
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto visible"
              : "opacity-0 scale-95 pointer-events-none invisible"
          }`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded hover:bg-blue-600 transition-colors duration-150 
              ${isOpen ? "cursor-pointer" : "cursor-default"}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
