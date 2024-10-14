import React from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  freeShipping: boolean;
  discount?: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
          <img src={product.image} alt={product.name} className="w-full h-48 object-contain p-4" />
          <div className="p-4 border-t">
            <h3 className="text-base mb-2 text-gray-900 line-clamp-2">{product.name}</h3>
            <div className="flex items-center">
              <p className="text-xl font-semibold">$ {product.price.toLocaleString('es-CO')}</p>
              {product.discount && (
                <span className="ml-2 text-sm text-green-600">{product.discount}% OFF</span>
              )}
            </div>
            {product.freeShipping && (
              <p className="text-sm text-green-600 font-medium mt-1">Envío gratis</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;