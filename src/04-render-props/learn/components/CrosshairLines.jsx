const CrosshairLines = ({ pos, isAim = false }) => {
  const centerBoxSize = 28;

  return (
    <>
      <div
        className="absolute top-0 w-full h-px bg-red-500"
        style={{ top: `${pos.y}px` }}
      />

      <div
        className="absolute left-0 h-full w-px bg-red-500"
        style={{ left: `${pos.x}px` }}
      />

      {/* Center aiming box */}
      {isAim && (
        <div
          className="absolute border border-yellow-400 bg-transparent"
          style={{
            left: `${pos.x - centerBoxSize / 2}px`,
            top: `${pos.y - centerBoxSize / 2}px`,
            width: `${centerBoxSize}px`,
            height: `${centerBoxSize}px`,
          }}
        />
      )}
    </>
  );
};

export default CrosshairLines;
