import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className="content">
        <nav className="header-container">
          <div className="Logo">
            <img src="/assets/icons/logo.svg" alt="" />
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
              <img src="/assets/icons/person.svg" alt="User" />
            </a>
            <a href="#">
              <img src="/assets/icons/search.svg" alt="Search" />
            </a>
            <a href="#">
              <img src="/assets/icons/heart.svg" alt="Favorites" />
            </a>
            <a href="#">
              <img src="/assets/icons/car.svg" alt="Cart" />
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
