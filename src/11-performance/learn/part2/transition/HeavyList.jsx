import { useMemo } from "react";

// helper: create heavy list once
function createItems(count = 20000) {
  const arr = new Array(count);

  for (let i = 0; i < count; i++) {
    arr[i] = `Item ${i} - ${Math.random().toString(36).slice(2, 7)}`;
  }

  return arr;
}

const HEAVY_LIST = createItems(50000);

const HeavyList = ({ query }) => {
  console.log("🚸 HeavyList component rendered");

  const filtered = useMemo(() => {
    // expensive CPU-bound task simulation
    // add an artificial delay for demo (avoid in production!)

    const res = HEAVY_LIST.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    console.log("Filtered count:", res.length);

    return res.slice(0, 200); // render top 200 for demo
  }, [query]);

  return (
    <div className="borderV1 max-h-96 overflow-y-auto selectScrollbar">
      {filtered.map((item, i) => (
        <div key={i} className="p-2 border-b border-slate-600">
          {item}
        </div>
      ))}
    </div>
  );
};

export default HeavyList;
