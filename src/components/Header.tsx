import React, { useState } from 'react';
import { Search, ShoppingCart, User, Bell, MapPin, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    onSearch(newQuery);
  };

  const categories = [
    { name: 'Vehículos', subcategories: ['Carros, Motos y Otros', 'Accesorios para Vehículos'] },
    { name: 'Supermercado', subcategories: ['Almacén', 'Bebidas', 'Cuidado Personal'] },
    { name: 'Tecnología', subcategories: ['Celulares y Smartphones', 'Computación', 'TV, Audio y Video'] },
    { name: 'Electrodomésticos', subcategories: ['Climatización', 'Cocina', 'Lavado'] },
    { name: 'Hogar y Muebles', subcategories: ['Decoración', 'Muebles', 'Jardín'] },
  ];

  return (
    <header className="bg-[#FFE600]">
      <div className="max-w-[1200px] mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.87/mercadolibre/logo_large_25years_v2.png" alt="MercadoLibre Logo" className="h-8" />
          </Link>
          <form onSubmit={handleSearch} className="max-w-[588px] flex-grow mx-4 relative hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Buscar productos, marcas y más..."
              className="w-full py-2 px-4 pr-10 rounded-sm shadow-sm text-sm"
            />
            <button type="submit" className="absolute right-3 top-2 text-gray-400">
              <Search size={20} />
            </button>
          </form>
          <img src="https://http2.mlstatic.com/D_NQ_771618-MLA79911597221_102024-OO.webp" alt="Disney+" className="h-10 hidden md:block" />
          <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Menu size={24} />
          </button>
        </div>
        <div className={`md:flex items-center justify-between mt-4 text-sm ${showMobileMenu ? 'block' : 'hidden'}`}>
          <div className="flex items-center mb-2 md:mb-0">
            <MapPin size={16} className="mr-1" />
            <span className="mr-2">Ingresa tu ubicación</span>
          </div>
          <nav className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="relative">
              <button
                className="flex items-center hover:text-blue-600"
                onMouseEnter={() => setShowCategoryMenu(true)}
                onMouseLeave={() => setShowCategoryMenu(false)}
              >
                Categorías <ChevronDown size={16} className="ml-1" />
              </button>
              {showCategoryMenu && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                  onMouseEnter={() => setShowCategoryMenu(true)}
                  onMouseLeave={() => setShowCategoryMenu(false)}
                >
                  {categories.map((category, index) => (
                    <div key={index} className="group relative px-4 py-2 hover:bg-gray-100">
                      <a href="#" className="block text-sm">{category.name}</a>
                      <div className="absolute left-full top-0 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg w-64">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <a key={subIndex} href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">{subcategory}</a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <a href="#" className="hover:text-blue-600">Ofertas</a>
            <a href="#" className="hover:text-blue-600">Historial</a>
            <a href="#" className="hover:text-blue-600">Supermercado</a>
            <a href="#" className="hover:text-blue-600">Moda</a>
            <a href="#" className="hover:text-blue-600">Vender</a>
            <a href="#" className="hover:text-blue-600">Ayuda</a>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600">Crea tu cuenta</a>
            <a href="#" className="hover:text-blue-600">Ingresa</a>
            <a href="#" className="hover:text-blue-600">Mis compras</a>
            <ShoppingCart size={20} />
          </div>
        </div>
        <form onSubmit={handleSearch} className="relative mt-2 md:hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Buscar productos, marcas y más..."
            className="w-full py-2 px-4 pr-10 rounded-sm shadow-sm text-sm"
          />
          <button type="submit" className="absolute right-2 top-[0.5rem] text-gray-400">
            <Search size={20} />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;