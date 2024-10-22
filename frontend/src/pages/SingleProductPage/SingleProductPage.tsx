import { Link } from "react-router-dom";
import ProductsList from "../Home/ProductList/ProductList";
import React, { useState } from "react";
import "./SingleProductPage.css";

const SingleProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action: string) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <section className="singleBar">
        <div className="content">
          <nav className="singleBarItems">
            <Link to={"/"} className="singleBarLinks">
              Home
            </Link>
            <img src="/assets/icons/arrow.svg" alt="arrow" />
            <Link to={"/shop"} className="singleBarLinks">
              Shop
            </Link>
            <img src="/assets/icons/arrow.svg" alt="arrow" />
            <img src="/assets/icons/line.svg" alt="line" />
            <p>Asgaard sofa</p>
          </nav>

          <section className="see-detail-product">
            <div className="content">
              <div className="container-detail">
                <div className="other-images">
                  <img
                    className="other-images-item"
                    src="/assets/images/sofa-images.png"
                    alt="Sofa"
                  />
                  <img
                    className="other-images-item"
                    src="/assets/images/sofa-images-1.png"
                    alt="Sofa"
                  />
                  <img
                    className="other-images-item"
                    src="/assets/images/sofa-images-2.png"
                    alt="Sofa"
                  />
                  <img
                    className="other-images-item"
                    src="/assets/images/sofa-images-3.png"
                    alt="Sofa"
                  />
                </div>

                <div className="image">
                  <img
                    src="/assets/images/Asgaard-sofa.png"
                    alt="Asgaard Sofa"
                  />
                </div>

                <div className="detalhes--grandes">
                  <h3 className="detail-title">Asgaard sofa</h3>
                  <span className="price-customer">Rs. 250,000.00</span>
                  <div className="detail-price-customer">
                    <img
                      className="detail-stars"
                      src="/assets/icons/stars.svg"
                      alt="stars"
                    />
                    <img
                      className="detail-bar"
                      src="assets/icons/line.svg"
                      alt=" bar"
                    />
                    <p className="detail-customer">5 Customer Review</p>
                  </div>
                  <p className="detail-paragraph">
                    Setting the bar as one of the loudest speakers in its class,
                    the Kilburn is a compact, stout-hearted hero with a
                    well-balanced audio which boasts a clear midrange and
                    extended highs for a sound.
                  </p>

                  <div className="product-options">
                    <div className="sizes">
                      <span className="size-title">Size</span>
                      <div className="size-item">
                        <button className="size-items">L</button>
                        <button className="size-items">XL</button>
                        <button className="size-items">XS</button>
                      </div>
                    </div>
                  </div>

                  <div className="product-actions">
                    <div className="quantity">
                      <button onClick={() => handleQuantityChange("decrease")}>
                        -
                      </button>
                      <span>{quantity}</span>
                      <button onClick={() => handleQuantityChange("increase")}>
                        +
                      </button>
                    </div>
                    <button className="add-to-cart">Add To Cart</button>
                    <button className="compare">+ Compare</button>
                  </div>

                  <div className="product-meta">
                    <p>SKU: SS001</p>
                    <p>Category: Sofas</p>
                    <p>Tags: Sofa, Chair, Home, Shop</p>
                    <div className="share">
                      <span>Share: </span>
                      <a href="#">FB</a>
                      <a href="#">IN</a>
                      <a href="#">TW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <ProductsList title="Related Products" limit={4} isSinglePage={true} />
    </div>
  );
};

export default SingleProductPage;
