import React from 'react';

const Subscriptions: React.FC = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Suscríbete al nivel 6</h2>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Consigue los mejores beneficios en Mercado Libre</h3>
            <p className="mb-4">Desde $17.899 cada mes</p>
            <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded">Suscríbete</button>
          </div>
          <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/widget-l6/dplus@2x.png" alt="Disney+" className="h-16" />
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;