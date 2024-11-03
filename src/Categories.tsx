import React from "react";

interface CategoriesProps {
  filterItems: (category: string) => void;
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
