
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import { CATEGORIES, PRODUCTS_DATA } from './constants';
import type { Category, Product } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return PRODUCTS_DATA;
    }
    return PRODUCTS_DATA.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:space-x-8">
          <Sidebar
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <main className="flex-1 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
             {filteredProducts.length === 0 && (
                <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-md">
                    <p className="text-xl text-gray-500">このカテゴリには製品がありません。</p>
                </div>
            )}
          </main>
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center p-4 mt-12">
        <p>&copy; 2024 インフラ技術ソリューションカタログ. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
