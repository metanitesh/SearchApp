import React, { useState } from "react";
import { useStore } from "../../store";

type searchProps = {
  setFetchSearch: (search: string) => void;
};

export default function Search() {
  const { setSearchQuery } = useStore();
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(search);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={search} onChange={handleChange} />
    </form>
  );
}
