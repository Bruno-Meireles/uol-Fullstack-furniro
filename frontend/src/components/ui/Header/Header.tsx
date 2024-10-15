import React from "react";
import logoName from "../../../assets/icons/logoName.svg";
import person from "../../../assets/icons/person.svg";
import car from "../../../assets/icons/car.svg";
import heart from "../../../assets/icons/heart.svg";
import search from "../../../assets/icons/search.svg";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-nav">
          <img src={logoName} alt="Logo" className="header__logo" />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">
                  Home
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/Shop" className="header__nav-link">
                  Shop
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/About" className="header__nav-link">
                  About
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/Contact" className="header__nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__icons">
          <a href="#" className="header__icon-link">
            <img src={person} alt="User" className="header__icon" />
          </a>
          <a href="#" className="header__icon-link">
            <img src={search} alt="Search" className="header__icon" />
          </a>
          <a href="#" className="header__icon-link">
            <img src={heart} alt="Favorites" className="header__icon" />
          </a>
          <a href="#" className="header__icon-link">
            <img src={car} alt="Cart" className="header__icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
