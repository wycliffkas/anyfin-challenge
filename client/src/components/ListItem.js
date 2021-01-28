import React from "react";

const ListItem = ({ selectedCountries, currencyConverter }) => {
  return (
    <>
      {selectedCountries.length > 0 ? (
        <h5 className="center-text">Selected Countries</h5>
      ) : (
        ""
      )}
      {selectedCountries.map((ctry, index) => (
        <div className="card mt-2" key={index}>
          <div className="card-body">
            <h5 className="card-title">{ctry.name}</h5>
            <div className="list-details mb-1">
              <div>
                <h6>
                  <strong>Population:</strong> {ctry.population}
                </h6>
              </div>

              <div>
                <h6>
                  <strong>Currency:</strong> {ctry.currencies[0].code}
                </h6>
              </div>
            </div>

            <form className="row g-3">
              <div className="col-auto">
                <label htmlFor="amount">
                  <strong>Amount</strong>( SEK )
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="amount"
                />
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-primary btn-small"
                  onClick={(event) =>
                    currencyConverter(
                      ctry.currencies[0].code,
                      ctry.alpha2Code,
                      event
                    )
                  }
                >
                  Convert to {ctry.currencies[0].code}
                </button>
              </div>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListItem;
