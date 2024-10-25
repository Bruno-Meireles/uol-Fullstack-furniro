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
  const [limit, setLimit] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [shortValue, setShorttValue] = useState<string>("Default");
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleShowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Se o campo estiver vazio, não atualize o limite
    if (value === "") {
      setLimit(16); // Defina um valor padrão ou mantenha o limite atual
      return; // Saia da função para não prosseguir
    }

    // Tente converter o valor para um número
    const newLimit = parseInt(value);

    // Verifica se é um número válido e maior que 0
    if (!isNaN(newLimit) && newLimit > 0) {
      setLimit(newLimit);
    }

    // Reseta a página atual sempre que o limite muda
    setCurrentPage(1);
  };

  const handleShorttChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShorttValue(e.target.value);
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

        const shortedProducts = [...filteredProducts];

        if (shortValue === "Lowest price") {
          shortedProducts.sort((a, b) => a.price - b.price);
        } else if (shortValue === "Highest price") {
          shortedProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(shortedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [selectedCategories, shortValue]);

  const fetchCategories = () => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
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
    fetchCategories();
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts();
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

              <div className="pagination-info">
                Showing {(currentPage - 1) * limit + 1}–
                {Math.min(currentPage * limit, products.length)} of{" "}
                {products.length} results
              </div>

              <div className="controls-right">
                <label htmlFor="show" className="label-show">
                  Show
                </label>
                <input
                  type="number"
                  id="show"
                  name="show"
                  min={1}
                  value={limit}
                  onChange={handleShowChange}
                  className="input"
                />
                <label htmlFor="short-by" className="label-input">
                  Short by
                </label>
                <select
                  id="short-by"
                  name="short-by"
                  value={shortValue}
                  onChange={handleShorttChange}
                  className="input-short"
                >
                  <option className="input-value" value="Default">
                    Default
                  </option>
                  <option className="input-value" value="Lowest price">
                    Lowest price
                  </option>
                  <option className="input-value" value="Highest price">
                    Highest price
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-content">
        <div className="product-flex">
          {products
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                onSeeDetails={handleSeeDetails}
              />
            ))}
        </div>
        <div className="pagination-buttons">
          {[...Array(Math.ceil(products.length / limit)).keys()].map((page) => (
            <button
              key={page}
              className={`pagination-button ${
                currentPage === page + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="pagination-button pagination-button-next"
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(products.length / limit))
              )
            }
            disabled={currentPage === Math.ceil(products.length / limit)}
          >
            Next
          </button>
        </div>
      </div>

      <Support />
    </section>
  );
};

export default Shop;
