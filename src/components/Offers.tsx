import React from "react";

const Offers: React.FC = () => {
  const offers = [
    {
      id: 1,
      image:
        "https://http2.mlstatic.com/D_Q_NP_2X_845937-MCO78531587742_082024-AB.webp",
      discount: "HASTA 40% OFF",
      description: "Ofertas Relámpago",
    },
    {
      id: 2,
      image:
        "https://http2.mlstatic.com/D_Q_NP_2X_852134-MLU74832235973_022024-AB.webp",
      discount: "HASTA 35% OFF",
      description: "Ofertas del día",
    },
    {
      id: 3,
      image:
        "https://http2.mlstatic.com/D_Q_NP_2X_780144-MLA72668121499_112023-AB.webp",
      discount: "HASTA 50% OFF",
      description: "Mejores ofertas",
    },
    {
      id: 4,
      image:
        "https://http2.mlstatic.com/D_Q_NP_2X_813304-MLU73802961803_012024-AB.webp",
      discount: "HASTA 30% OFF",
      description: "Últimas unidades",
    },
  ];

  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={offer.image}
              alt={`Oferta ${offer.id}`}
              className="w-full h-40 object-contain pt-4"
            />
            <div className="p-4">
              <span className="text-green-500 font-bold">{offer.discount}</span>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
