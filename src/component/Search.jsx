import { useState } from "react";
import SearchIcon from "./UI/Icons/SearchIcon";

const Search = ({ onChange }) => {
  //   const [search, setSearch] = useState();
  const handleSearch = ({ target: { value } }) => onChange(value);
  return (
    <div className="search">
      <SearchIcon size={"10px"} />
      <input
        type="search"
        placeholder="Search by name"
        className="search_input"
        // value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
export default Search;
