// src/components/Filters/Filters.tsx

import React from "react";

interface Category {
  id: number;
  name: string;
}

interface FiltersProps {
  categories: Category[];
  selectedCategories: number[];
  handleFilterChange: (categoryId: number) => void;
  showFilters: boolean;
  toggleFilters: () => void;
  offset: number;
  limit: number;
  totalProducts: number;
  showPaginationValue: number;
  setShowPaginationValue: (value: number) => void;
  shortValue: string;
  setShortValue: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  categories,
  selectedCategories,
  handleFilterChange,
  showFilters,
  toggleFilters,
  offset,
  limit,
  totalProducts,
  showPaginationValue,
  setShowPaginationValue,
  shortValue,
  setShortValue,
}) => {
  return (
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
              Showing {offset + 1}–{Math.min(offset + limit, totalProducts)} of{" "}
              {totalProducts} results
            </div>
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
              onChange={(e) => setShowPaginationValue(parseInt(e.target.value))}
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

            <img
              src="assets/icons/show-icon.svg"
              alt="Show Icon"
              className="icon-show"
            />
            <img
              src="assets/icons/sort-icon.svg"
              alt="Sort Icon"
              className="icon-sort"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
