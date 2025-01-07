// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./ProductByCategory.css";
// import BannerItem from "../BannerItem/BannerItem";
// import Support from "../Support/Support";
// import Product, { ProductInterface } from "../ProductCard/ProductCard";

// const ProductsByCategory: React.FC = () => {
//   const [products, setProducts] = useState<ProductInterface[]>([]);
//   const [categoryName, setCategoryName] = useState<string>("");
//   const { categoryId } = useParams<{ categoryId: string }>();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const fetchCategory = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/categories/${categoryId}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch category");
//         }
//         const data = await response.json();
//         setCategoryName(data.name);
//       } catch (error) {
//         console.error("Error fetching category:", error);
//       }
//     };

//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/products/category/${categoryId}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     if (categoryId) {
//       fetchCategory();
//       fetchProducts();
//     }
//   }, [categoryId]);

//   return (
//     <div className="content">
//       <BannerItem
//         imgUrl="/assets/images/RectangleImage.png"
//         type={"tipo2"}
//         linkHome="/"
//         icon="/assets/icons/arrow.svg"
//         title={categoryName}
//         linkCategory={`/products/category/${categoryId}`}
//       />
//       <div className="product-list">
//         <h1 className="product-title category">{categoryName}</h1>
//         {products.length > 0 ? (
//           <div className="product-flex">
//             {products.map((product) => (
//               <Product
//                 key={product.id}
//                 product={product}
//                 onSeeDetails={() => navigate(`/products/${product.id}`)}
//               />
//             ))}
//           </div>
//         ) : (
//           <div>No products available</div>
//         )}
//         <section className="category-support">
//           <Support />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ProductsByCategory;
