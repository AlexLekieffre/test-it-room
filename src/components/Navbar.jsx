import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/BrandLogo.svg" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#accueil">Accueil</a>
        <a href="#recherche">Recherche</a>
      </div>
    </nav>
  );
};

export default Navbar;
