import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import Product from "../../../components/ProductCard/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { ProductInterface } from "../../../components/ProductCard/ProductCard";

const ProductsList: React.FC<IProps> = ({ title, limit = 8, isSinglePage }) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [visibleLimit, setVisibleLimit] = useState(limit);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  if (!products || !Array.isArray(products)) {
    return <div>No products available.</div>;
  }

  const handleSeeDetails = (productId: number) => {
    navigate(`/products/${productId}`);
 
  };

  const handleShowMore = () => {
    if (isSinglePage) {
      if (visibleLimit < 8) {
        setVisibleLimit((prevVisibleLimit) => prevVisibleLimit + 4);
      } else {
        navigate("/shop");
      }
    }
  };

  return (
    <section>
      <div className="product-content">
        <h1 className="product-title-main">{title}</h1>
        <div className="product-flex">
          {products.slice(0, visibleLimit).map((product) => (
            <Product
              key={product.id}
              product={product}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>
        {isSinglePage ? (
          <button className="show-more" onClick={handleShowMore}>
            Show More
          </button>
        ) : (
          <Link to="/shop">
            <button className="show-more">Show More</button>
          </Link>
        )}
      </div>
    </section>
  );
};

export interface IProps {
  title?: string;
  limit?: number;
  isSinglePage?: boolean;
}

export default ProductsList;
