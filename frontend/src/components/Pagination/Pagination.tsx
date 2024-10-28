import React from "react";

const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  limit,
  currentPage,
  handlePagination,
}) => {
  const totalPages = Math.ceil(totalProducts / limit);
  const paginationButtons = [];
  const startPage = Math.floor((currentPage - 1) / 3) * 3 + 1;
  const endPage = Math.min(startPage + 2, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    paginationButtons.push(
      <button
        key={i}
        className="pagination-button"
        onClick={() => handlePagination(i)}
        disabled={i === currentPage}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="pagination-buttons">
      {paginationButtons}
      {totalPages > endPage && (
        <button
          className="pagination-button pagination-button-next"
          onClick={() => handlePagination(endPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      )}
    </div>
  );
};
interface PaginationProps {
  totalProducts: number;
  limit: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}
export default Pagination;
