import { lazy, Suspense, useState } from "react";
import Button from "../../../../components/ui/Button";
import Light from "./Light";

const Heavy = lazy(() => import("./Heavy"));

const LazyLoader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">React.lazy</h1>

      <div className="p-2 borderV1">
        <p>Heavy component is loaded on demand via.</p>

        <Light />

        <Button onClick={() => setShow((s) => !s)} size="sm" className="w-fit">
          {show ? "Hide Heavy" : "Show Heavy"}
        </Button>

        <Suspense
          fallback={<div className="p-4">Loading heavy component…</div>}
        >
          {show && <Heavy />}
        </Suspense>
      </div>
    </div>
  );
};

export default LazyLoader;
