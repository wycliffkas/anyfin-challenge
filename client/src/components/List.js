import React from "react";

const List = ({ selectedCountries }) => {
  return (
    <div>
      {selectedCountries.length > 0 ? (<h5 className="center-text">Selected Countries</h5>) : ""}
      {selectedCountries.map((ctry) => (
        <div className="list">
          <h6>{ctry.name}</h6>
          <div className="list-details">
            <h6>
              <strong>Population:</strong> {ctry.population}
            </h6>
            <h6>
              <strong>Currency:</strong> {ctry.currencies[0].code}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
