import CrosshairLines from "../components/CrosshairLines";
import { useRef, useState } from "react";

const MouseTrackerWithChildren = ({ children }) => {
  const boxRef = useRef(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!boxRef.current) return;

    const rect = boxRef.current.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    setPos({ x: localX, y: localY });
  };

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      className="relative border border-slate-500 shadow h-72 text-lg overflow-hidden"
    >
      <CrosshairLines pos={pos} isAim />

      {/* Render JSX */}
      <div className="p-2">{children(pos)}</div>
    </div>
  );
};

export default MouseTrackerWithChildren;
