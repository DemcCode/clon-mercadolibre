import React from 'react';
import { CreditCard, Truck, Shield } from 'lucide-react';

const PaymentInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 my-4">
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <div className="flex items-center">
          <CreditCard className="text-blue-500 mr-2" size={24} />
          <div>
            <h3 className="font-semibold text-sm">Hasta 48 cuotas</h3>
            <a href="#" className="text-blue-500 text-xs">Ver más</a>
          </div>
        </div>
        <div className="flex items-center">
          <Truck className="text-blue-500 mr-2" size={24} />
          <div>
            <h3 className="font-semibold text-sm">Envío gratis desde $79.000</h3>
            <a href="#" className="text-blue-500 text-xs">Ver más</a>
          </div>
        </div>
        <div className="flex items-center">
          <Shield className="text-blue-500 mr-2" size={24} />
          <div>
            <h3 className="font-semibold text-sm">Seguridad, de principio a fin</h3>
            <a href="#" className="text-blue-500 text-xs">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;