import React from "react";

interface PaginationProps {
  totalProducts: number;
  limit: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  limit,
  currentPage,
  handlePagination,
}) => (
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
);

export default Pagination;
