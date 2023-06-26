import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

interface Props {
  onChange: (text: string) => void;
}

function SearchBox({ onChange }: Props) {
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
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
