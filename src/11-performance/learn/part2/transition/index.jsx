import { useState, useTransition } from "react";
import HeavyList from "./HeavyList";

const TransitionDemo = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");

  function handleChange(e) {
    const val = e.target.value;
    setText(val); // immediate update — keeps input responsive

    // Mark heavy update as non-urgent:
    startTransition(() => {
      setQuery(val); // updating query triggers expensive filtering + renders
    });
  }

  return (
    <div className="space-y-2 ">
      <h1 className="text-lg font-semibold">
        useTransition:- (Non-blocking updates)
      </h1>

      <div className="mb-2">
        <input
          value={text}
          onChange={handleChange}
          className="borderV1 px-2 py-1 w-[80%]"
          placeholder="Type to filter (feel the responsiveness)..."
        />

        <span className="ml-4">{isPending ? "Updating results…" : "Idle"}</span>
      </div>

      <HeavyList query={query} />
    </div>
  );
};

export default TransitionDemo;
