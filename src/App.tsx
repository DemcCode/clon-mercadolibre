import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ProductList, { Product } from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import CategoryBar from './components/CategoryBar'
import Banner from './components/Banner'
import PaymentInfo from './components/PaymentInfo'
import Offers from './components/Offers'
import Subscriptions from './components/Subscriptions'
import Collections from './components/Collections'
import Stores from './components/Stores'
import Footer from './components/Footer'

const initialProducts: Product[] = [
  { id: 1, name: "iPhone 13 Pro", price: 4299900, image: "https://http2.mlstatic.com/D_Q_NP_2X_736376-MLA49590060561_042022-AB.webp", category: "Celulares", freeShipping: true, discount: 10 },
  { id: 2, name: "Portátil Lenovo IdeaPad", price: 1899900, image: "https://http2.mlstatic.com/D_Q_NP_2X_891965-MLA76136106233_052024-AB.webp", category: "Computadores", freeShipping: true, discount: 15 },
  { id: 3, name: "Audífonos Sony WH-1000XM4", price: 1299900, image: "https://http2.mlstatic.com/D_Q_NP_2X_654403-MLU73203432953_122023-AB.webp", category: "Accesorios", freeShipping: true },
  { id: 4, name: "Smart TV Samsung 55\"", price: 2499900, image: "https://http2.mlstatic.com/D_Q_NP_2X_781735-MLA45925248278_052021-AB.webp", category: "Televisores", freeShipping: true, discount: 20 },
  { id: 5, name: "PlayStation 5", price: 3299900, image: "https://http2.mlstatic.com/D_NQ_NP_2X_739160-MLA44484414453_012021-F.webp", category: "Consolas", freeShipping: true, discount: 5 },
];

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Array.from(new Set(initialProducts.map(p => p.category)));

  useEffect(() => {
    filterProducts();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filterProducts = () => {
    if (searchQuery) {
      const filteredProducts = initialProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(initialProducts);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#ebebeb]">
        <Header onSearch={handleSearch} />
        {/* <CategoryBar categories={categories} /> */}
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <main className="max-w-[1180px] mx-auto mt-4 px-4">
                <h2 className="text-2xl font-semibold my-6">Basado en tu última visita</h2>
                <ProductList products={products} />
                <PaymentInfo />
                <Offers />
                <Subscriptions />
                <Collections />
                <Stores />
              </main>
            </>  
          } />
          <Route path="/product/:id" element={<ProductDetail products={initialProducts} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App