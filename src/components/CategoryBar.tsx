import React from 'react';

interface CategoryBarProps {
  categories: string[];
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories }) => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto py-2">
        <ul className="flex space-x-4 overflow-x-auto">
          {categories.map((category) => (
            <li key={category} className="flex-shrink-0">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-500">{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryBar;