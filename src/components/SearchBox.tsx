import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import { filterRobots } from "@/redux/robotsSlice";

import { useAppDispatch } from "@/hooks/useDispatch";

function SearchBox() {
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      dispatch(filterRobots(e.target.value));
    },
    [dispatch]
  );

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-6 rounded-lg">
      <label htmlFor="search" className="sr-only">
        Search robots
      </label>
      <input
        type="text"
        id="search"
        className="outline-slate-500 border-2 border-slate-400 py-4 pl-4 w-full rounded-lg"
        placeholder="Search robots"
        ref={ref}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
