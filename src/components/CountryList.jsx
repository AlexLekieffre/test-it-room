import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import "../css/CountryList.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [startIndex, setStartIndex] = useState(3);

  const fetchCountries = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setDisplayedCountries(data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries("https://restcountries.com/v3.1/all");
  }, []);

  const handleSearch = (language) => {
    if (language) {
      fetchCountries(`https://restcountries.com/v3.1/lang/${language}`);
    } else {
      fetchCountries("https://restcountries.com/v3.1/all");
    }
  };

  const handleLoadMore = () => {
    setStartIndex((prevIndex) => prevIndex + 6);
    setDisplayedCountries(countries.slice(0, startIndex + 12));
  };

  return (
    <div>
      <div className="searchbar">
        <h1 className="title">Ma super page de recherche</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="country-list">
        {displayedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      {startIndex + 6 < countries.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Voir plus
        </button>
      )}
    </div>
  );
};

export default CountryList;
