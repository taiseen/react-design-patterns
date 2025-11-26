import Button from "@/components/ui/Button";
import { useRef, useState } from "react";

const CounterWithRef = () => {
  const countRef = useRef(0); // persists between renders

  const [renderCount, setRenderCount] = useState(0); // for forcing re-renders

  const increment = () => {
    countRef.current = countRef.current + 1; // update ref

    console.log("Ref Count:", countRef.current);
  };

  return (
    <div className="p-4! flex justify-around">
      <div className="space-y-2!">
        <h2 className="text-2xl">Ref Count: {countRef.current}</h2>

        <Button onClick={increment}>Increment Ref Count</Button>
      </div>

      <div className="space-y-2!">
        <h2 className="text-2xl">Render Count: {renderCount}</h2>

        <Button onClick={() => setRenderCount(renderCount + 1)}>
          Force Re-render
        </Button>
      </div>
    </div>
  );
};

export default CounterWithRef;
