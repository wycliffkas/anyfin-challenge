import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Header from "../components/Header";
import List from "./List";
import Search from "../components/Search";
import SearchItem from "../components/SearchItem";
import history from "../utils/history";
import Loader from "../utils/Loader";

const Home = () => {
  const [query, setQuery] = useState("");
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
  };

  /**
   * add a country to a
   * list.
   * @param {*} name
   */
  const addToList = (name) => {
    let country = searchResults.filter((ctry) => ctry.name === name);

    if (selectedCountries.some((ctry) => ctry.name === name)) {
      toast.error("Country was already added to list!");
    } else {
      setSelectedCountries([...selectedCountries, ...country]);
      toast.success("Country has been added to list!");
    }
  };

  /**
   * logout users
   */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/");
  };

  /**
   * search country
   * from API.
   * @param {*} name
   */
  const onHandleSearch = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    setLoading(true);
    const result = await axios.get(`http://localhost:8080/country/${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setLoading(false);

    result.data.message
      ? setMessage(result.data.message)
      : setSearchResults(result.data);
  };

  return (
    <>
      <Header handleLogout={handleLogout} />
      <div className="container body">
        <div className="row justify-content-center">
          <div className="col-6 mt-2">
            <Search
              OnHandleInputChange={onChange}
              setQuery={setQuery}
              setSearchResults={setSearchResults}
              query={query}
              handleSearch={onHandleSearch}
              setMessage={setMessage}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10 mt-2">

            {searchResults &&
              searchResults.length > 0 &&
              searchResults.map((item, index) => (
                <SearchItem item={item} key={index} onAddToList={addToList} />
              ))}

            {message ? <p className="center-text">{message}</p> : ""}

            {loading ? <Loader /> : null}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 mt-4">
            <List selectedCountries={selectedCountries} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
