import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductByCategory.css"
import BannerItem from "../BannerItem/BannerItem";
import "../../pages/Home/ProductList/ProductList.css";
import Support from "../Support/Support";
import Product, { ProductInterface } from "../ProductCard/ProductCard";

const ProductsByCategory: React.FC<{ categoryId: number }> = ({
  categoryId,
}) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products/category/${categoryId}`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Expected an array but got:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const handleSeeDetails = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="content">
      <BannerItem
        imgUrl="/assets/images/RectangleImage.png"
        type={"tipo2"}
        linkHome="/"
        icon="/assets/icons/arrow.svg"
        title="Category"
        linkCategory={`/products/category/${categoryId}`}
      />
      <div className="product-list">
        <h1 className="product-title category">Category</h1>
        {products.length > 0 ? (
          <div className="product-flex">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onSeeDetails={handleSeeDetails}
              />
            ))}
          </div>
        ) : (
          <div>No products available</div>
        )}
        <section className="category-suport">
          <Support />
        </section>
      </div>
    </div>
  );
};

export default ProductsByCategory;
