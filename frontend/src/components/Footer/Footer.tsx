import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="content-1240">
        <nav className="footer-li">
          <div>
            <h3>Furniro.</h3>
            <ul className="footer-text">
              <li>
                400 University Drive Suite 200 Coral <br /> Gables,
                <br /> FL 33134 USA
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li className="footer-item-link">Links</li>
            <li className="footer-item">
              <Link to={"/home"}> Home</Link>
            </li>
            <li className="footer-item">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="footer-item">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="footer-item">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item-link">Help</li>
            <li className="footer-item">
              <Link to={"#"}> Payment Options</Link>
            </li>
            <li className="footer-item">
              <Link to={"#"}>Returns</Link>
            </li>
            <li className="footer-item">
              <Link to={"#"}>Privacy Policies</Link>
            </li>
          </ul>
          <form className="newsletter-form">
            <li className="footer-item-link">Newsletter</li>
            <div>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="newsletter-input"
              />
              <button className="newsletter-button">SUBSCRIBE</button>
            </div>
          </form>
        </nav>
        <div className="separador"></div>
        <p className="copy">2023 furnino. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
