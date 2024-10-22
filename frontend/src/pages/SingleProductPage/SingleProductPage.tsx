import { Link } from "react-router-dom";
import ProductsList from "../Home/ProductList/ProductList";
import "./SingleProductPage.css";

const SingleProductPage: React.FC = () => {
  return (
    <div>
      <section className="singleBar">
        <div className="content">
          <nav className="singleBarItems">
            <Link className="singleBarLinks" to={"/"}>
              Home
            </Link>
            <img src="/assets/icons/arrow.svg" alt="" />
            <Link className="singleBarLinks" to={"/shop"}>
              Shop
            </Link>
            <img src="/assets/icons/arrow.svg" alt="" />
            <img src="assets/icons/line.svg" alt="" />
            <p >Asgaard sofa</p>
          </nav>
        </div>
      </section>
      <ProductsList title="Related Products" limit={4} isSinglePage={true} />
    </div>
  );
};
export default SingleProductPage;
