
import React from 'react';
import type { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  selectedCategory: Category | 'all';
  onSelectCategory: (category: Category | 'all') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const categoryIcons: { [key in Category]: string } = {
    'ソフトウェア・プラットフォーム': 'fa-solid fa-laptop-code',
    '計画・調査': 'fa-solid fa-map-location-dot',
    '施工': 'fa-solid fa-person-digging',
    '点検': 'fa-solid fa-camera-retro',
    '機械・装置': 'fa-solid fa-gears',
  };

  const allButtonClass = `
    flex items-center w-full text-left px-4 py-3 rounded-lg transition-colors duration-200
    ${selectedCategory === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'}
  `;

  const categoryButtonClass = (category: Category) => `
    flex items-center w-full text-left px-4 py-3 rounded-lg transition-colors duration-200
    ${selectedCategory === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'}
  `;

  return (
    <aside className="lg:w-64 xl:w-72 flex-shrink-0">
      <div className="bg-white p-4 rounded-xl shadow-md sticky top-24">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">カテゴリ</h2>
        <nav className="space-y-2">
          <button onClick={() => onSelectCategory('all')} className={allButtonClass}>
            <i className="fa-solid fa-list-ul w-6 text-center mr-3"></i>
            <span className="font-medium">すべての製品</span>
          </button>
          {categories.map((category) => (
            <button key={category} onClick={() => onSelectCategory(category)} className={categoryButtonClass(category)}>
              <i className={`${categoryIcons[category]} w-6 text-center mr-3`}></i>
              <span className="font-medium">{category}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;