import React from "react";
import "./ProductDetailItem.css"


const ProductDetailItem: React.FC<ProductDetailItemProps> = ({
  product,
  quantity,
  handleQuantityChange,
}) => {
  return (
    <section className="see-detail-product">
      <div className="content">
        <div className="container-detail">
          <div className="other-images">
            {Array.isArray(product.other_images_link) &&
            product.other_images_link.length > 0 ? (
              product.other_images_link.map((image, index) => (
                <img
                  key={index} 
                  className="other-images-item"
                  src={image}
                  alt={`${product.name} image ${index + 1}`}
                />
              ))
            ) : (
              <p>No additional images available.</p> 
            )}
          </div>

          <div className="image-big">
            <img
              className="image-big-detail"
              src={product.image_link}
              alt={product.name}
            />
          </div>

          <div className="detalhes--grandes">
            <h3 className="detail-title">{product.name}</h3>
            <span className="price-customer">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(parseFloat(product.price))}
            </span>
            <div className="detail-price-customer">
              <img
                className="detail-stars"
                src="/assets/icons/stars.svg"
                alt="stars"
              />
              <img
                className="detail-bar"
                src="/assets/icons/line.svg"
                alt=" bar"
              />
              <p className="detail-customer">5 Customer Review</p>
            </div>
            <p className="detail-paragraph">{product.description}</p>
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
                  <img src="/assets/icons/linkedin.svg" alt="Icon Linkedin" />
                </a>
                <a href="#">
                  <img src="/assets/icons/twitter.svg" alt="Icon Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  other_images_link: string[];
  is_new?: boolean;
}

interface ProductDetailItemProps {
  product: Product;
  quantity: number;
  handleQuantityChange: (action: string) => void;
}

export default ProductDetailItem;
