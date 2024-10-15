import React from "react";
import logoName from "../../../assets/icons/logoName.svg";
import person from "../../../assets/icons/person.svg";
import car from "../../../assets/icons/car.svg";
import heart from "../../../assets/icons/heart.svg";
import search from "../../../assets/icons/search.svg";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="header-container">
        <img src={logoName} alt="Logo" className="header-logo" />
        <ul className="list">
          <li className="item">
            <a href="/">Home</a>
          </li>
          <li className="item">
            <a href="/Shop">Shop</a>
          </li>
          <li className="item">
            <a href="/About">About</a>
          </li>
          <li className="item">
            <a href="/Contact">Contact</a>
          </li>
        </ul>
        <ul className="header-icons list">
          <a href="#">
            <img src={person} alt="User" />
          </a>
          <a href="#">
            <img src={search} alt="Search" />
          </a>
          <a href="#">
            <img src={heart} alt="Favorites" />
          </a>
          <a href="#">
            <img src={car} alt="Cart" />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
