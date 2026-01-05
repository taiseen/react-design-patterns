import DashboardIsolated from "./component-isolation";
import TransitionDemo from "./transition";
import LazyLoader from "./lazy-loading";

const Part2 = () => {
  return (
    <div className="space-y-8 w-1/2 mt-2">
      <h1 className="text-2xl">Part 2:</h1>

      <TransitionDemo />

      <LazyLoader />

      <DashboardIsolated />
    </div>
  );
};

export default Part2;
