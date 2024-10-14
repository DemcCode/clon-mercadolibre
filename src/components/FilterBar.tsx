import React from 'react';

interface FilterBarProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, onCategoryChange }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">Filtrar por categoría:</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('')}
          className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;