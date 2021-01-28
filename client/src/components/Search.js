import React from "react";
import { ReactComponent as CancelIcon } from "../assets/images/cancel.svg";

const Search = ({
  OnHandleInputChange,
  query,
  setQuery,
  setSearchResults,
  handleSearch,
  setMessage,
}) => {
  const cancel = () => {
    setSearchResults([]);
    setQuery("");
    setMessage("");
  };

  return (
    <form className="search">
      <input
        type="text"
        name="query"
        value={query}
        id="search-input"
        placeholder="Search country..."
        onChange={OnHandleInputChange}
      />
      <CancelIcon onClick={cancel} className={query ? "show" : "hide"} />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSearch}
        disabled={!query}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
