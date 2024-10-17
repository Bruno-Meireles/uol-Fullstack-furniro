import { useState } from "react";
import "./Product.css";
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "R$ 2.500.000",
    originalPrice: "R$ 3.500.000",
    discount: "-30%",
    image: "/assets/images/Syltherine.png",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "R$ 2.500.000",
    image: "/assets/images/leviosa.png",
  },
  {
    id: 3,
    name: "Respira",
    description: "Luxury big sofa",
    price: "R$ 7.000.000",
    originalPrice: "R$ 14.000.000",
    discount: "-50%",
    image: "/assets/images/respira.png",
  },
  {
    id: 4,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "R$ 5.000.000",
    originalPrice: "R$ 14.000.000",
    image: "/assets/images/potty.png",
    isNew: true,
  },
  {
    id: 5,
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "R$ 2.500.000",
    originalPrice: "R$ 3.500.000",
    discount: "-30%",
    image: "/assets/images/Syltherine.png",
  },
  {
    id: 6,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "R$ 2.500.000",
    image: "/assets/images/leviosa.png",
  },
  {
    id: 7,
    name: "Respira",
    description: "Luxury big sofa",
    price: "R$ 7.000.000",
    originalPrice: "R$ 14.000.000",
    discount: "-50%",
    image: "/assets/images/respira.png",
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "R$ 5.000.000",
    originalPrice: "R$ 14.000.000",
    image: "/assets/images/potty.png",
    isNew: true,
  },
  {
    id: 9,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "R$ 5.000.000",
    originalPrice: "R$ 14.000.000",
    image: "/assets/images/potty.png",
    isNew: true,
  },
  {
    id: 10,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "R$ 5.000.000",
    originalPrice: "R$ 14.000.000",
    image: "/assets/images/potty.png",
    isNew: true,
  },
  {
    id: 11,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "R$ 5.000.000",
    originalPrice: "R$ 14.000.000",
    image: "/assets/images/potty.png",
    isNew: true,
  },
  {
    id: 12,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "R$ 5.000.000",
    originalPrice: "R$ 14.000.000",
    image: "/assets/images/potty.png",
    isNew: true,
  },
];

const Product: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isShowMore, setIsShowMore] = useState(false);

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
        <h1>Our Products</h1>
        <div className="product-flex">
          {products.slice(0, visibleProducts).map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount && (
                  <span className="discount">{product.discount}</span>
                )}
                {product.isNew && <span className="new">New</span>}
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
                {product.originalPrice && (
                  <p className="original-price">
                    <s>{product.originalPrice}</s>
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
