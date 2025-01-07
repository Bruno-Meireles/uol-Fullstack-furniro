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
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";

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
    window.scrollTo(0, 300);
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
          selectedCategories: selectedCategories.join(","), // Passando como string
        },
      })
      .then((response) => {
        const allProducts = response.data.items;
        setTotalProducts(response.data.totalCount);
        setProducts(allProducts); // O back-end já faz a filtragem
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

      <Filters
        categories={categories}
        selectedCategories={selectedCategories}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        handleFilterChange={handleFilterChange}
        showPaginationValue={showPaginationValue}
        setShowPaginationValue={setShowPaginationValue}
        shortValue={shortValue}
        setShortValue={setShortValue}
        totalProducts={totalProducts}
        limit={limit}
        offset={offset}
      />

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
      </div>
      <Pagination
        totalProducts={totalProducts}
        limit={limit}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />

      <Support />
    </section>
  );
};

export default Shop;
