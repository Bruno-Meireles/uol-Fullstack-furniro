import { useEffect, useState, useCallback } from "react";
import BannerItem from "../../components/BannerItem/BannerItem";
import Support from "../../components/Support/Support";
import Product from "../../components/ProductCard/ProductCard";
import "../../pages/Home/ProductList/ProductList.css";
import "./Shop.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showPaginationValue, setShowPaginationValue] = useState<number>(16);
  const [shortValue, setSortValue] = useState<string>("Default");
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleShowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowPaginationValue(parseInt(e.target.value));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
  };

  const fetchProducts = useCallback(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then((response) => {
        const allProducts = response.data;

        const filteredProducts =
          selectedCategories.length > 0
            ? allProducts.filter((product: { category_id: number }) =>
                selectedCategories.includes(product.category_id)
              )
            : allProducts;

        setProducts(filteredProducts);
      })
      .catch((error) => {
        error("Error fetching products:", error);
      });
  }, [selectedCategories]);

  const fetchCategories = () => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        error("Error fetching categories:", error);
      });
  };

  const handleFilterChange = (categoryId: number) => {
    setSelectedCategories((prevSelected) => {
      const newSelected = prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId];

      return newSelected;
    });
  };

  const handleSeeDetails = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  useEffect(() => {
    fetchCategories(); // Carrega as categorias uma vez
    fetchProducts(); // Carrega os produtos sempre que as categorias selecionadas mudarem
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts(); // Atualiza os produtos sempre que as categorias selecionadas mudarem
  }, [selectedCategories, fetchProducts]);

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
              <div>
                <button onClick={toggleFilters} className="filter-btn">
                  Filter
                </button>

                {showFilters && (
                  <div className="category-filters">
                    {categories.map((category) => (
                      <label key={category.id}>
                        <input
                          className="check"
                          type="checkbox"
                          value={category.id}
                          onChange={() => handleFilterChange(category.id)}
                          checked={selectedCategories.includes(category.id)}
                        />
                        {category.name}
                      </label>
                    ))}
                  </div>
                )}
              </div>

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
              <div className="pagination-info">
                Showing 1–{showPaginationValue} of {products.length} results
              </div>

              <div className="controls-right">
                <label htmlFor="show" className="label">
                  Show
                </label>
                <input
                  type="number"
                  id="show"
                  name="show"
                  min={1}
                  value={showPaginationValue}
                  onChange={handleShowChange}
                  className="input"
                />
                <label htmlFor="short-by" className="label">
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
                    Ascending
                  </option>
                  <option className="input-value" value="Descrescente">
                    Descending
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-content">
        <div className="product-flex">
          {products.slice(0, showPaginationValue).map((product) => (
            <Product
              key={product.id}
              product={product}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>
        <div className="pagination-buttons"></div>
      </div>

      <Support />
    </section>
  );
};

export default Shop;
