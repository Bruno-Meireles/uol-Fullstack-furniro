import { Link, useParams } from "react-router-dom";
import ProductsList from "../Home/ProductList/ProductList";
import React, { useEffect, useState } from "react";
import "./SingleProductPage.css";
import axios from "axios";

const SingleProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
            <p>{product.name}</p> {/* Produto dinâmico */}
          </nav>

          <section className="see-detail-product">
            <div className="content">
              <div className="container-detail">
                <div className="other-images">
                  {/* Imagens adicionais - você pode substituir essas URLs se sua API retornar outras imagens */}
                  <img
                    className="other-images-item"
                    src={product.image_link} // Imagem principal
                    alt={product.name}
                  />
                </div>

                <div className="image-big">
                  <img
                    className="image-big-detail"
                    src={product.image_link}
                    alt={product.name}
                  />
                </div>

                <div className="detalhes--grandes">
                  <h3 className="detail-title">{product.name}</h3>{" "}
                  {/* Nome do produto */}
                  <span className="price-customer">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(parseFloat(product.price))}
                  </span>{" "}
                  {/* Preço formatado */}
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
                    {product.description} {/* Descrição do produto */}
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
                  <div>
                    <span className="circle-title">Color</span>
                    <div className="circle-container">
                      <div className="circle purple-circle"></div>
                      <div className="circle black-circle"></div>
                      <div className="circle yellow-circle"></div>
                    </div>
                  </div>
                  <div className="product-actions">
                    <div className="quantity">
                      <button
                        className="quantity-button"
                        onClick={() => handleQuantityChange("decrease")}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="quantity-button"
                        onClick={() => handleQuantityChange("increase")}
                      >
                        +
                      </button>
                    </div>
                    <button className="add-to-cart">Add To Cart</button>
                    <button className="compare">+ Compare</button>
                  </div>
                  <div className="detail-separador"></div>
                  <div className="product-meta">
                    <div className="product-meta-detail">
                      <span className="label">SKU</span>
                      <span className="value">: SS001</span>
                    </div>
                    <div className="product-meta-detail">
                      <span className="label">Category</span>
                      <span className="value">: Sofas</span>
                    </div>
                    <div className="product-meta-detail">
                      <span className="label">Tags</span>
                      <span className="value">: Sofa, Chair, Home, Shop</span>
                    </div>
                    <div className="share">
                      <span className="label">Share</span>
                      <span className="value-share">:</span>
                      <a href="#">
                        <img src="/assets/icons/face.svg" alt="Icon Facebook" />
                      </a>
                      <a href="#">
                        <img
                          src="/assets/icons/linkedin.svg"
                          alt="Icon Linkedin"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="/assets/icons/twitter.svg"
                          alt="Icon Twitter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="separador"></div>
      <ProductsList title="Related Products" limit={4} isSinglePage={true} />
    </div>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_price?: string;
  discount_percent?: string;
  image_link: string;
  is_new?: boolean;
}

export default SingleProductPage;
