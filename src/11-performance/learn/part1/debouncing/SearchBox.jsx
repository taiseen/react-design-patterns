import useDebounce from "./hook/useDebounce";
import { useState, useEffect } from "react";

const SearchBox = () => {
  const DELAY_TIME_IN_MS = 600;

  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, DELAY_TIME_IN_MS);

  useEffect(() => {
    if (!debouncedQuery) return;

    console.log("API Call with:", debouncedQuery);

    // Simulated API:
    // fetch(`/api?q=${debouncedQuery}`)
  }, [debouncedQuery]);

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Debouncing:- Search User</h1>

      <input
        type="text"
        value={query}
        placeholder="Type to search…"
        className="borderV1 px-2 py-1 w-full"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
