import React from "react";



const Filters: React.FC<FiltersProps> = ({
  categories,
  selectedCategories,
  showFilters,
  toggleFilters,
  handleFilterChange,
  showPaginationValue,
  setShowPaginationValue,
  shortValue,
  setShortValue,
  totalProducts,
  limit,
  offset,
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
  );
};
interface FiltersProps {
  categories: { id: number; name: string }[];
  selectedCategories: number[];
  showFilters: boolean;
  toggleFilters: () => void;
  handleFilterChange: (categoryId: number) => void;
  showPaginationValue: number;
  setShowPaginationValue: (value: number) => void;
  shortValue: string;
  setShortValue: (value: string) => void;
  totalProducts: number;
  limit: number;
  offset: number;
}

export default Filters;
