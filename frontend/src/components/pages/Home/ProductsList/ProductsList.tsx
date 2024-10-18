import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import Product from "../../../Product";


const Products = (props: IProps): JSX.Element => {
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
      console.log("products");
   
  };

  return (
    <section>
      <div className="product-content">
        <h1 className="product-title-main">{props.title}</h1>
        <div className="product-flex">
          {products.slice(0, 8).map(
            (
              product 
            ) => (
              <Product
                key={product.id}
                product={product}
                onSeeDetails={handleSeeDetails}
              />
            )
          )}
        </div>
        <button className="show-more" onClick={handleShowMore}>
          Show More
        </button>
      </div>
    </section>
  );
};

export interface IProps {
  title: string; 
}

export default Products;
