import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import Product from "../../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductsList: React.FC<IProps> = ({ title, limit = 8 }) => {
  const [products, setProducts] = useState<Product[]>([]);

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
    console.log("Show More button clicked");
  };

  return (
    <section>
      <div className="product-content">
        <h1 className="product-title-main">{title}</h1>
        <div className="product-flex">
          {products.slice(0, limit).map((product) => (
            <Product
              key={product.id}
              product={product}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>
        <Link to={"/shop"}>
          <button className="show-more" onClick={handleShowMore}>
            Show More
          </button>
        </Link>
      </div>
    </section>
  );
};
export interface IProps {
  title?: string;
  limit?: number;
}

export default ProductsList;
