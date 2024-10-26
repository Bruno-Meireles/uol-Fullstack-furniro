import { useEffect, useState, useCallback } from "react";
import BannerItem from "../../components/BannerItem/BannerItem";
import Support from "../../components/Support/Support";
import Product, {
  ProductInterface,
} from "../../components/ProductCard/ProductCard";
import "../../pages/Home/ProductList/ProductList.css";
import "./Shop.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [showPaginationValue, setShowPaginationValue] = useState<number>(16);
  const [shortValue, setShortValue] = useState<string>("Default");
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const limit = showPaginationValue;
  const offset = (currentPage - 1) * limit;
  const navigate = useNavigate();

  const fetchProducts = useCallback(() => {
      window.scrollTo(0,300 );
    let orderBy: string | undefined;
    if (shortValue === "Lowest price") {
      orderBy = "lowest";
    } else if (shortValue === "Highest price") {
      orderBy = "highest";
    } else {
      orderBy = undefined;
    }

    axios
      .get(`http://localhost:3000/products`, {
        params: {
          limit,
          orderBy,
          offset,
          selectedCategories,
        },
      })
      .then((response) => {
        const allProducts = response.data.items;
        setTotalProducts(response.data.totalCount);

        const filteredProducts =
          selectedCategories.length > 0
            ? allProducts.filter((product: { category_id: number }) =>
                selectedCategories.includes(product.category_id)
              )
            : allProducts;

        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [selectedCategories, limit, shortValue, offset]);

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

      setCurrentPage(1);
      return newSelected;
    });
  };

  const handleSeeDetails = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  const handlePagination = (page: number) => {
    if (page > 0 && page <= Math.ceil(totalProducts / limit)) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategories, currentPage, fetchProducts]);

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
                Showing {offset + 1}–{Math.min(offset + limit, totalProducts)}{" "}
                of {totalProducts} results
              </div>

              <div className="controls-right">
                <label htmlFor="show" className="label-filter">
                  Show
                </label>
                <input
                  type="number"
                  id="show"
                  name="show"
                  min={1}
                  value={showPaginationValue}
                  onChange={(e) =>
                    setShowPaginationValue(parseInt(e.target.value))
                  }
                  className="input"
                />
                <label htmlFor="short-by" className="label-filter">
                  Sort by
                </label>
                <select
                  id="short-by"
                  name="short-by"
                  value={shortValue}
                  onChange={(e) => setShortValue(e.target.value)}
                  className="input-short"
                >
                  <option value="Default">Default</option>
                  <option value="Lowest price">Lowest</option>
                  <option value="Highest price">Highest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-content">
        <div className="product-flex">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>

        <div className="pagination-buttons">
          {[...Array(Math.ceil(totalProducts / limit))].map((_, index) => (
            <button
              key={index}
              className="pagination-button"
              onClick={() => handlePagination(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-button pagination-button-next"
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage >= Math.ceil(totalProducts / limit)}
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
