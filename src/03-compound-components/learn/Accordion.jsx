import { useState } from "react";

const Accordion = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded mb-3 last:mb-0 overflow-hidden">
      <button
        type="button"
        className="w-full text-left px-3 py-2 font-medium text-gray-600
          bg-gray-100 hover:bg-gray-200 outline-none duration-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}

        <span className="float-right">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-4 py-4 bg-white text-slate-700">{children}</div>
      )}
    </div>
  );
}

// Attach sub-components
Accordion.Item = AccordionItem;

export default Accordion;
