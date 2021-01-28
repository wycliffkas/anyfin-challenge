import { convertCurrency } from "currencies-exchange-rates";
import React, { useState } from "react";
import ListItem from "../components/ListItem";

const List = ({ selectedCountries }) => {
  const [amount, setAmount] = useState("");

  const currencyConverter = (local, id, event) => {
    event.preventDefault();
    const result = convertCurrency("SEK", local, amount);

    const ctryIndex = selectedCountries.findIndex(
      (ctry) => ctry.alpha2Code === id
    );
  };

  return (
    <div>
      <ListItem
        selectedCountries={selectedCountries}
        currencyConverter={currencyConverter}
      />
    </div>
  );
};

export default List;
