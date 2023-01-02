import React, { useState } from "react";

type searchProps = {
  setFetchSearch: (search: string) => void;
};

export default function Search({ setFetchSearch }: searchProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFetchSearch(search);
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
