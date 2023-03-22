import React, { useState } from "react";
import "../css/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recherchez un pays par langue"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
