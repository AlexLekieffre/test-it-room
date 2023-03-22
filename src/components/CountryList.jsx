import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import "../css/CountryList.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const fetchCountries = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (Array.isArray(data)) {
        setCountries(data);
        setDisplayedCountries(data.slice(0, 6));
      } else {
        console.error("invalid");
      }
    } catch (error) {
      console.error("erreur", error);
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
  };

  useEffect(() => {
    setDisplayedCountries(countries.slice(0, startIndex + 6));
  }, [startIndex, countries]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="country-list">
        {displayedCountries.map((country) => (
          <CountryCard country={country} />
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
