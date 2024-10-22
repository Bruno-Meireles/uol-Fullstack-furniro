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
            <p>Asgaard sofa</p>
          </nav>
          <section>
            <div className="product-detail">
              <div className="div1">
                <img
                  src="../../../public/assets/images/sofa-images.png"
                  alt="Sofa"
                />
              </div>
              <div className="div2">
                <img
                  src="../../../public/assets/images/sofa-images-1.png"
                  alt="Sofa"
                />
              </div>
              <div className="div3">
                <img
                  src="../../../public/assets/images/sofa-images-2.png"
                  alt="Sofa"
                />
              </div>
              <div className="div4">
                <img
                  src="../../../public/assets/images/sofa-images-3.png"
                  alt="Sofa"
                />
              </div>
              <div className="div5">
                {" "}
                <img
                  src="../../../public/assets/images/asgaard-sofa.png"
                  alt="Sofa"
                />
              </div>
              <div className="div6">
                <h1>Asgaard sofa</h1>
              </div>
              <div className="div7">Rs. 250,000.00 </div>
              <div className="div8">
                <img src="assets/icons/stars.svg" alt="" />
              </div>
              <div className="div9">
                <img src="/assets/icons/line.svg" alt="" />
              </div>
              <div className="div10">
                <p>
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                </p>
              </div>
              <div className="div11"> oi</div>
              <div className="div12">oi </div>
            </div>
          </section>
        </div>
      </section>
      <ProductsList title="Related Products" limit={4} isSinglePage={true} />
    </div>
  );
};
export default SingleProductPage;
