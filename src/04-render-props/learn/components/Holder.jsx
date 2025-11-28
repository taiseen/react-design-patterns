const Holder = ({ pos = { x: 0, y: 0 }, text = "N/A" }) => {
  return (
    <p>
      {text} is at ( X:&nbsp;
      <span className="text-yellow-400 font-medium">{pos.x}</span>, Y:&nbsp;
      <span className="text-yellow-400 font-medium">{pos.y}</span>)
    </p>
  );
};

export default Holder;
