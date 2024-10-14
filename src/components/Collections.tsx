import React from 'react';

const Collections: React.FC = () => {
  const collections = [
    { name: 'OFERTAS DEL DIA', image: 'https://http2.mlstatic.com/D_NQ_836530-MLA74483891256_022024-OO.webp' },
    { name: 'Compra Internacional', image: 'https://http2.mlstatic.com/D_NQ_699287-MLA74624050012_022024-OO.webp' },
    { name: 'SUPERMERCADO', image: 'https://http2.mlstatic.com/D_NQ_818946-MLA74753059091_022024-OO.webp' },
  ];

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {collections.map((collection, index) => (
          <a key={index} href='#' className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold">{collection.name}</h3>
            </div>
            <img src={collection.image} alt={collection.name} className="w-full h-50 object-cover" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Collections;