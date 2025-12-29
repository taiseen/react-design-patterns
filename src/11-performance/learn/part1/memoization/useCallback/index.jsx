import { useCallback, useState } from "react";
import Button from "../../../../../components/ui/Button";
import Child from "./Child";

const ParentUseCallBack = () => {
  const [count, setCount] = useState(0);

  /**
   * NOTE (Thumb Rule):
   * React-এ inline arrow function দিলে প্রতি render-এ নতুন function reference তৈরি হয়।
   * নতুন reference মানে prop change, আর prop change হলে memo থাকলেও child re-render হবে।
   *
   * সমাধান সহজ:
   * function reference stable রাখতে useCallback ব্যবহার করো।
   * useCallback একই function reference ধরে রাখে যতক্ষণ dependency না বদলায়।
   */

  const handleClick = useCallback(() => {
    console.log("Child Clicked!");
  }, []);

  // const handleClick = () => console.log("Child Clicked!");

  console.log("Parent-Use-CallBack Rendered");

  return (
    <div>
      <h1 className="text-lg font-semibold">useCallback:-</h1>

      <div className="p-2 borderV1 space-y-2">
        <p>Count: {count}</p>

        <div className="flex gap-2 justify-between">
          <Button onClick={() => setCount(count + 1)} size="sm">
            Increment
          </Button>

          {/* onClick={() => console.log("Child Clicked!")} */}
          <Child onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ParentUseCallBack;
