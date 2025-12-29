import Button from "../../../../../components/ui/Button";
import MemoizedCard from "./ProfileTracker";
import { useState } from "react";

const MemoProfileTrack = () => {
  const [value, setValue] = useState("");

  const [childValue, setChildValue] = useState("JavaScript");

  console.log("⭕ parent value change \nRendered <MemoProfileTrack />");

  const handleChildeValueToggle = () => {
    setChildValue((prev) => (prev === "JavaScript" ? "React" : "JavaScript"));
  };

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold flex justify-between items-center">
        Memo:- Profile Tracker{" "}
        <span className="bg-green-200 text-slate-800 px-2 py-1 text-xs rounded">
          SEE CONSOLE
        </span>
      </h1>

      <div className="p-2 borderV1 space-y-2">
        <div className="flex gap-3 justify-between">
          <input
            value={value}
            className="px-2 py-1 borderV1"
            onChange={(e) => setValue(e.target.value)}
          />

          <Button onClick={handleChildeValueToggle} size="sm" className="w-fit">
            Update Child by Toggling
          </Button>
        </div>

        {/* 🟥🟥🟥 its re-render only when its props change. 🟥🟥🟥 */}
        <MemoizedCard name={childValue} />
      </div>
    </div>
  );
};

export default MemoProfileTrack;
