import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BannerItem from "../../components/BannerItem/BannerItem";
import Support from "../../components/Support/Support";
import ProductCard, {
  ProductInterface,
} from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";

import "./Shop.css";

const Shop: React.FC = () => {
  const navigate = useNavigate();

  // Estados principais
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  // Filtros e ordenação
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [sortOrder, setSortOrder] = useState<string>("Default");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Cálculo de paginação
  const limit = itemsPerPage;
  const offset = (currentPage - 1) * limit;

  // Função para buscar produtos
  const fetchProducts = useCallback(() => {
    window.scrollTo(0, 300);

    const orderBy =
      sortOrder === "Lowest price"
        ? "lowest"
        : sortOrder === "Highest price"
        ? "highest"
        : undefined;

    axios
      .get("http://localhost:3000/products", {
        params: {
          limit,
          offset,
          orderBy,
          selectedCategories: selectedCategories.join(","),
        },
      })
      .then((response) => {
        setProducts(response.data.items);
        setTotalProducts(response.data.totalCount);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [limit, offset, sortOrder, selectedCategories]);

  // Função para buscar categorias
  const fetchCategories = useCallback(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Função para alterar filtros de categorias
  const handleFilterChange = (categoryId: number) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
    setCurrentPage(1); // Resetar para a primeira página ao alterar filtros
  };

  // Função para navegar para detalhes do produto
  const handleSeeDetails = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  // Alternar exibição de filtros
  const toggleFilters = () => setShowFilters((prev) => !prev);

  // Gerenciar navegação de paginação
  const handlePagination = (page: number) => {
    if (page > 0 && page <= Math.ceil(totalProducts / limit)) {
      setCurrentPage(page);
    }
  };

  // Buscar categorias e produtos na inicialização
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [fetchCategories, fetchProducts]);

  // Atualizar produtos ao alterar filtros ou página
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className="shop-page">
      {/* Banner */}
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
        showPaginationValue={itemsPerPage} // Altere o nome
        setShowPaginationValue={setItemsPerPage} // Altere o nome
        shortValue={sortOrder} // Altere o nome
        setShortValue={setSortOrder} // Altere o nome
        totalProducts={totalProducts}
        limit={itemsPerPage} // Inclua se necessário
        offset={(currentPage - 1) * itemsPerPage} // Inclua se necessário
      />

      {/* Lista de produtos */}
      <div className="product-content">
        <div className="product-flex">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>
      </div>

      {/* Paginação */}
      <Pagination
        totalProducts={totalProducts}
        limit={limit}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />

      {/* Suporte */}
      <Support />
    </section>
  );
};

export default Shop;