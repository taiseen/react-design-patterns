import CrosshairLines from "../components/CrosshairLines";
import { useRef, useState } from "react";

const MouseTrackerWithRender = ({ render }) => {
  const boxRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (e) => {
    if (!boxRef.current) return;

    const rect = boxRef.current.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    setPos({ x: localX, y: localY });
  };

  const handleMouseEnter = () => setIsInside(true);

  const handleMouseLeave = () => setIsInside(false);

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative border border-slate-500 shadow h-72 text-lg overflow-hidden"
    >
      {/* Only show crosshair when mouse is inside */}
      {isInside && <CrosshairLines pos={pos} />}

      {/* Render JSX */}
      <div className="p-2">{render(pos)}</div>
    </div>
  );
};

export default MouseTrackerWithRender;
