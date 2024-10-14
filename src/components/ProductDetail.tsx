import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from './ProductList';
import { Heart, ShoppingCart, Trophy, Truck, Shield, CreditCard } from 'lucide-react';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center mt-8">Producto no encontrado</div>;
  }

  return (
    <div className="max-w-[1180px] mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-8">
            <div className="mb-6">
              <img src={product.image} alt={product.name} className="w-full h-96 object-contain" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Descripción del producto</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-2">{product.category} | Nuevo</p>
              <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold">$ {product.price.toLocaleString('es-CO')}</span>
                {product.discount && (
                  <span className="ml-2 text-sm text-green-600">{product.discount}% OFF</span>
                )}
              </div>
              {product.freeShipping && (
                <p className="text-green-600 font-medium mb-4 flex items-center">
                  <Truck size={20} className="mr-2" />
                  Envío gratis
                </p>
              )}
              <div className="mb-6">
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg mb-2 hover:bg-blue-600 transition-colors">
                  Comprar ahora
                </button>
                <button className="w-full bg-blue-100 text-blue-500 py-3 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Agregar al carrito
                </button>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <Truck size={20} className="text-green-600 mr-2" />
                  <span className="text-sm">Envío gratis a todo el país</span>
                </div>
                <div className="flex items-center mb-2">
                  <Shield size={20} className="text-green-600 mr-2" />
                  <span className="text-sm">Compra Protegida</span>
                </div>
                <div className="flex items-center">
                  <Trophy size={20} className="text-green-600 mr-2" />
                  <span className="text-sm">Mercado Puntos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Medios de pago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Tarjetas de crédito</h3>
            <p className="text-sm text-gray-600 mb-2">¡Cuotas sin interés con bancos seleccionados!</p>
            <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Tarjetas de crédito" className="h-8" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tarjetas de débito</h3>
            <img src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" alt="Tarjetas de débito" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;