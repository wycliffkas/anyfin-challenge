import _ from "lodash";
import React, { useState } from "react";
import List from "../components/List";
import Search from "../components/Search";
import SearchItem from "../components/SearchItem";
import { fetchData } from "../services/fetchData";
import Loader from "../utils/Loader";

const Home = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const onChange = ({ target: { value } }) => {
 
    setQuery(value);

    const search = _.debounce(sendQuery, 200);

    setSearchQuery((prevSearch) => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });

    search(value);
  };

  /**
   * In charge to send the value
   * to the API.
   * @param {*} value
   */
  const sendQuery = async (value) => {
    
    console.log("sending query");
    setLoading(true);
    const { cancelPrevQuery, result } = await fetchData(value);
    setLoading(false);

    if (cancelPrevQuery) return;

    console.log("result", result);

    if (result) {
      console.log("hererxxxx");
      setSearchResults(result);
      
    } else {
      setMessage("Not Found");
      setSearchResults([]);
    }
  };

  /**
   * add a country to a
   * list.
   * @param {*} name
   */
  const addToList = (name) => {
    let country = searchResults.filter((ctry) => ctry.name === name);

    if (selectedCountries.some((ctry) => ctry.name === name)) {
      return alert("Country already added");
    } else {
      setSelectedCountries([...selectedCountries, ...country]);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 mt-2">
          <Search OnHandleInputChange={onChange} query={query} />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 mt-2">
          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map((item, index) => (
              <SearchItem item={item} key={index} onAddToList={addToList} />
            ))}

          {query && !searchResults.length  && !loading? (
            <p className="center-text">No matches Found</p>
          ) : (
            ""
          )}

          {loading ? <Loader /> : null}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 mt-4">
          <List selectedCountries={selectedCountries} />
        </div>
      </div>
    </div>
  );
};

export default Home;
