import { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";

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

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleSeeDetails = (productId: number) => {
    console.log("Viewing details for product:", productId);
  };

  const handleShowMore = () => {
    if (isShowMore) {
      setVisibleProducts(8);
    } else {
      setVisibleProducts(products.length);
    }
    setIsShowMore(!isShowMore);
  };

  return (
    <section>
      <div className="product-content">
        <h1 className="product-title-main">Our Products</h1>
        <div className="product-flex">
          {products.slice(0, visibleProducts).map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image_link} alt={product.name} />
                {product.discount_percent && (
                  <span className="discount_percent ">
                    -{product.discount_percent}%
                  </span>
                )}
                {product.is_new && <span className="new">New</span>}
                <div className="hover-actions">
                  <button
                    className="button-details"
                    onClick={() => handleSeeDetails(product.id)}
                  >
                    See Details
                  </button>
                  <div className="actions">
                    <img
                      src="/assets/icons/share.svg"
                      alt="Share"
                      className="actions-icon"
                    />
                    <a href="#">Share</a>
                    <img src="/assets/icons/compare.svg" alt="Compare" />
                    <a href="#">Compare</a>
                    <img src="/assets/icons/like.svg" alt="Like" />
                    <a href="#">Like</a>
                  </div>
                </div>
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-sub-title">{product.description}</p>
              <div className="price-container">
                <p className="price">{product.price}</p>
                {product.discount_price && (
                  <p className="original-price">
                    <s>{product.discount_price}</s>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="show-more" onClick={handleShowMore}>
          {isShowMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Product;
