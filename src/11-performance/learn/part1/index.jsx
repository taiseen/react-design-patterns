import ParentUseCallBack from "./memoization/useCallback";
import MemoProfileTrack from "./memoization/memo";
import ScrollTracker from "./throttling/ScrollTracker";
import SearchBox from "./debouncing/SearchBox";

const Part1 = () => {
  return (
    <div className="space-y-8 w-1/2">
      <MemoProfileTrack />

      <ParentUseCallBack />

      <SearchBox />

      <ScrollTracker />
    </div>
  );
};

export default Part1;
