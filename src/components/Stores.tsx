import React from 'react';

const Stores: React.FC = () => {
  const stores = [
    { title: 'COMPRA EN CUOTAS SIN INTERESES', subtitle: '!APROVECHA¡', textBtn:'Ver ofertas', image: 'https://http2.mlstatic.com/D_NQ_854112-MLA78415674667_082024-OO.jpg' },
    { title: 'OFERTAS SOLO POR 24 HORAS', subtitle: '!IMPERDIBLE', textBtn:'Ver todo', image: 'https://http2.mlstatic.com/D_Q_NP_2X_803086-MLA47920649105_102021-AB.webp' },
  ];

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stores.map((store, index) => (
          <div key={index} className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-t">
              <span>{store.subtitle}</span>
              <h3 className="text-lg font-semibold">{store.title}</h3>
              <a href="#" className="text-blue-500 text-sm">{store.textBtn}</a>
            </div>
            <img src={store.image} alt={store.title} className="w-full h-40 object-contain p-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;