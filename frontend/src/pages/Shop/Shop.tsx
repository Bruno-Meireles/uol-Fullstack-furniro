import { useEffect, useState } from "react";
import BannerItem from "../../components/BannerItem/BannerItem";
import Support from "../../components/Support/Support";
import Product from "../../components/ProductCard/ProductCard";
import "../../pages/Home/ProductList/ProductList.css";
import "./Shop.css";
import axios from "axios";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsPerPage] = useState(16);

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
  const handlePagination = () => {
    console.log("Clicou");
  };

  return (
    <section className="shop-page">
      <BannerItem
        imgUrl="/assets/images/RectangleImage.png"
        icon="/assets/icons/arrow.svg"
        title="Shop"
        linkHome="/"
        linkShop="#"
        type="2"
      />

      <div className="filters">
        <button>
          <img src="assets/icons/filtering.svg" alt="Filter Icon" />
          Filter
        </button>
        <img src="assets/icons/grid-big-round.svg" alt=" Grid Icon" />
        <img src="assets/icons/view-list.svg" alt="View list Icon" />
        <img src="assets/icons/line.svg" alt=" Icon Bar" />
        <div className="pagination-info">Showing 1–16 of 32 results</div>
        <div className="controls">
          <label htmlFor="Show">Show</label>
          <input
            type="number"
            name="show"
            id="show"
            min={1}
            defaultValue={16}
          />
          <label htmlFor="Short">Short by</label>
          <input type="text" placeholder="Default" />
        </div>
      </div>

      <div className="product-content">
        <div className="product-flex">
          {products.slice(0, productsPerPage).map((product) => (
            <Product
              key={product.id}
              product={product}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>
        <div className="pagination-buttons">
          <div className="pagination">
            <button className="pagination-button" onClick={handlePagination}>
              1
            </button>
          </div>
          <div className="pagination">
            <button className="pagination-button" onClick={handlePagination}>
              2
            </button>
          </div>
          <div className="pagination">
            <button className="pagination-button" onClick={handlePagination}>
              3
            </button>
          </div>
          <div className="pagination">
            <button
              className="pagination-button pagination-button-next"
              onClick={handlePagination}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Support />
    </section>
  );
};

export default Shop;
