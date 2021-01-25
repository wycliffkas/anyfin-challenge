import React from "react";

const Search = ({ OnHandleInputChange, query }) => {
  return (
    <form>
      <input
        type="text"
        name="query"
        value={query}
        id="search-input"
        placeholder="Search country..."
        onChange={OnHandleInputChange}
      />
    </form>
  );
};

export default Search;
