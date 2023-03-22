import React, { useState, useEffect } from "react";
import { languageMap } from "../const/languageMap";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const searchLanguage = () => {
      const searchTermInEnglish =
        languageMap[debouncedSearchTerm.toLowerCase()] ||
        debouncedSearchTerm.toLowerCase();
      onSearch(searchTermInEnglish);
    };

    if (debouncedSearchTerm) {
      searchLanguage();
    } else {
      onSearch("");
    }
  }, [debouncedSearchTerm, onSearch]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="">
      <input
        className="search-bar"
        type="text"
        placeholder="Rechercher une langue..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
