import { useState, useEffect } from "react";
import componentList from "../db";

const NavigateBtn = ({ onIndexSelect, currentTaskIdx }) => {
  const [isSelected, setIsSelected] = useState(currentTaskIdx);

  useEffect(() => {
    setIsSelected(currentTaskIdx);
  }, [currentTaskIdx]);

  useEffect(() => {
    // Scroll to selected task
    if (currentTaskIdx !== null) {
      const btn = document.querySelector(`[data-index="${currentTaskIdx}"]`);
      btn?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [currentTaskIdx]);

  const handleSelect = (id) => {
    onIndexSelect(id); // 1. Notify parent (App) to update the component
    setIsSelected(id); // 2. Update local highlight

    if (typeof window !== "undefined") {
      window.history.pushState(null, "", "/"); // 3. Clear the URL to root path "/"
    }
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-2 flex gap-2.5 flex-col bg-slate-900/80 p-2! rounded border border-slate-700/80 shadow-lg z-50 h-[290px] overflow-y-auto navigateBtnScrollbar">
      {componentList
        .map((obj, idx) => (
          <button
            data-index={idx}
            type="button"
            key={obj.id}
            onClick={() => handleSelect(idx)}
            className={`px-2! pt-0.5! pb-1! rounded cursor-pointer transition-colors duration-200 text-left ${
              isSelected === idx
                ? "bg-blue-600"
                : "bg-slate-700 hover:bg-blue-500"
            }`}
          >
            {obj.id}
          </button>
        ))
        .reverse()}
    </div>
  );
};

export default NavigateBtn;
