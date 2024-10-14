import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-8 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Acerca de</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="text-gray-600 hover:underline">Mercado Libre</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Investor Relations</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Tendencias</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Otros sitios</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="text-gray-600 hover:underline">Developers</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Mercado Pago</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Mercado Envíos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Ayuda</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="text-gray-600 hover:underline">Comprar</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Vender</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Resolución de problemas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Redes sociales</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="text-gray-600 hover:underline">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;