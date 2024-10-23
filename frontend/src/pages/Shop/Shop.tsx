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
  const [showValue, setShowValue] = useState<number>(16);
  const [shortValue, setSortValue] = useState<string>("Default");

  const handleShowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowValue(parseInt(e.target.value));
  };

  const handleSortChange = () => {
    setSortValue("console");
  };

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
        <div className="content">
          <div className="controls">
            <div className="controls-left">
              <img
                src="assets/icons/filtering.svg"
                alt="Filter Icon"
                className="icon-filter"
              />
              <button className="filter-btn">Filter</button>
              <img
                src="assets/icons/grid-big-round.svg"
                alt="Grid Icon"
                className="icon-filter"
              />
              <img
                src="assets/icons/view-list.svg"
                alt="List Icon"
                className="icon-filter"
              />
              <img
                src="assets/icons/line.svg"
                alt="Icon Bar"
                className="icon-bar"
              />
              <div className="pagination-info">Showing 1–16 of 32 results</div>

              <div className="controls-right">
                <label htmlFor="show" className="label">
                  Show
                </label>
                <input
                  type="number"
                  id="show"
                  name="show"
                  min={1}
                  value={showValue}
                  onChange={handleShowChange}
                  className="input"
                />
                <label htmlFor="Short-by" className="label">
                  Short by
                </label>
                <select
                  id="short-by"
                  name="short-by"
                  value={shortValue}
                  onChange={handleSortChange}
                  className="input-short"
                >
                  <option className="input-value" value="Default">
                    Default
                  </option>
                  <option className="input-value" value="Crescente">
                    Crescente
                  </option>
                  <option className="input-value" value="Descrescente">
                    Descrescente
                  </option>
                </select>
              </div>
            </div>
          </div>
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
