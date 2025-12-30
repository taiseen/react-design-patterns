import ParentUseCallBack from "./memoization/useCallback";
import ScrollTracker from "./throttling/ScrollTracker";
import MemoProfileTrack from "./memoization/memo";
import UserSorting from "./memoization/useMemo";
import SearchBox from "./debouncing/SearchBox";

const Part1 = () => {
  return (
    <div className="space-y-8 w-1/2">
      <MemoProfileTrack />

      <ParentUseCallBack />

      <UserSorting />

      <SearchBox />

      <ScrollTracker />
    </div>
  );
};

export default Part1;
