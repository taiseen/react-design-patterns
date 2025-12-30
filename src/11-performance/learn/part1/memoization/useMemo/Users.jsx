import { useMemo } from "react";

const Users = ({ list }) => {
  console.log("🚸 Child - Users component rendered");

  // const sorted = list.sort((a, b) => a.localeCompare(b));

  const sorted = useMemo(() => {
    console.log("⭕ Sorting expensive list…");
    return [...list].sort((a, b) => a.localeCompare(b));
  }, [list]);

  return (
    <div className="space-y-2">
      <h2>Sorted Users</h2>

      <div className="flex gap-2 flex-wrap items-center justify-evenly borderV1 py-2.5 px-2 max-h-60 overflow-y-auto">
        {sorted.map((user, index) => (
          <div key={index} className="borderV1 px-2">
            {user}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
