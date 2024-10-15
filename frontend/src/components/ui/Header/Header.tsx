import person from "../../../assets/icons/person.svg";
import car from "../../../assets/icons/car.svg";
import heart from "../../../assets/icons/heart.svg";
import search from "../../../assets/icons/search.svg";
import logo from "../../../assets/icons/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className="content">
        <nav className="header-container">
          <div className="Logo">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Furniro</h2>
          </div>

          <ul className="list">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="item">
              <Link to="/about">About</Link>
            </li>
            <li className="item">
              <Link to="/contact">Contact</Link>
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
      </div>
    </header>
  );
};

export default Header;
