import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  image_link: string;
  other_images_link: string[];
  price: string;
}

interface CategoryProductsProps {
  categoryId: number; 
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ categoryId }) => {
  const [products, setProducts] = useState<Product[]>([]);

 useEffect(() => {
   if (categoryId) {
     axios
       .get(`http://localhost:3000/products/category/${Number(categoryId)}`)
       .then((response) => {
         setProducts(response.data);
       })
       .catch((error) => {
         console.error("Error fetching products by category:", error);
       });
   }
 }, [categoryId]);


  if (products.length === 0) {
    return <div>No products found in this category.</div>;
  }

  return (
    <div>
      <h2>Products in this Category</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image_link} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(parseFloat(product.price))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
