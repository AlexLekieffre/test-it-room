import React from "react";
import "../css/CountryCard.css";

const CountryCard = ({ country }) => {
  const flagUrl = country.flags.svg;
  const languages = Object.values(country.languages).join(", ");

  const openGoogleMaps = () => {
    const query = encodeURIComponent(
      `${country.name.common} ${country.capital && country.capital[0]}`
    );
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, "_blank");
  };

  return (
    <div className="country-card">
      <div className="flag-container">
        <img
          className="country-flag"
          src={flagUrl}
          alt={`Drapeau de ${country.name.common}`}
        />
      </div>
      <div className="country-info">
        <p className="country-continent">{country.region}</p>
        <p>{country.name.common}</p>
        <p>
          Liste des langues parlées :
          <br />
          {languages}
        </p>
        <button className="map-button" onClick={openGoogleMaps}>
          Voir sur Google Maps
        </button>
      </div>
    </div>
  );
};

export default CountryCard;
