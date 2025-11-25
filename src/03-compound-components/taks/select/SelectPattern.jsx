import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const Select = ({
  placeholder = "Select an option",
  direction = "bottom",
  defaultValue = "",
  options = [],
  onChange,
}) => {
  const containerRef = useRef(null);
  const optionRefs = useRef([]);
  const menuRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const closeMenu = () => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    onChange?.(value);
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (options.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlightedIndex((prevIndex) => {
          const newIndex =
            prevIndex >= options.length - 1 ? prevIndex : prevIndex + 1;
          return newIndex;
        });
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlightedIndex((prevIndex) => {
          const newIndex = prevIndex <= 0 ? 0 : prevIndex - 1;
          return newIndex;
        });
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          const selectedOption = options[highlightedIndex];
          setSelectedValue(selectedOption.value);
          onChange?.(selectedOption.value);
          closeMenu();
        }
      } else if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, highlightedIndex, options, onChange]);

  useEffect(() => {
    if (
      isOpen &&
      highlightedIndex >= 0 &&
      optionRefs.current[highlightedIndex]
    ) {
      const optionElement = optionRefs.current[highlightedIndex];
      optionElement.scrollIntoView({
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [highlightedIndex, isOpen]);

  const selectedLabel =
    options.find((option) => option.value === selectedValue)?.label ||
    placeholder;

  const menuPositionClasses =
    direction === "top" ? "bottom-full mb-1" : "top-full mt-1";

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            closeMenu();
          } else {
            const selectedIndex = options.findIndex(
              (opt) => opt.value === selectedValue
            );
            setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
            setIsOpen(true);
          }
        }}
        className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          className={`ml-2 h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          ref={menuRef}
          className={`absolute z-10 w-full rounded-md border border-gray-200 bg-white shadow-lg max-h-60 overflow-auto selectScrollbar py-1 text-sm ${menuPositionClasses}`}
          role="listbox"
        >
          {options.map((option, index) => (
            <Select.Option
              key={option.value}
              option={option}
              isSelected={selectedValue === option.value}
              isHighlighted={highlightedIndex === index}
              onSelect={handleSelect}
              ref={(el) => (optionRefs.current[index] = el)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const Option = ({ option, isSelected, isHighlighted, onSelect, ...rest }) => {
  return (
    <li
      {...rest}
      onClick={() => onSelect(option.value)}
      className={`flex cursor-pointer items-center justify-between px-4 py-2 ${
        isHighlighted
          ? "bg-indigo-100 text-slate-800"
          : isSelected
          ? "bg-indigo-50 text-indigo-700 font-medium"
          : "text-gray-700 hover:bg-indigo-50"
      }`}
      role="option"
      aria-selected={isSelected}
    >
      <span>{option.label}</span>
      {isSelected && <Check className="h-4 w-4 text-indigo-600" />}
    </li>
  );
};

Select.Option = Option;

export default Select;
