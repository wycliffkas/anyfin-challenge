import React from "react";

const SearchItem = ({ item, onAddToList }) => {
  return (
    <div className="search-result mt-2">
      <div className="result-title">
        <h6>{item.name}</h6>
      </div>
      <div className="result-button">
        <button
          type="button"
          className="btn btn-primary btn-small"
          onClick={() => onAddToList(item.name)}
        >
          Add to List
        </button>
      </div>
    </div>
  );
};

export default SearchItem;
