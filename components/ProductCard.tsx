import React, { useState } from 'react';
import type { Product, Category } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryIcons: { [key in Category]: string } = {
    'ソフトウェア・プラットフォーム': 'fa-solid fa-cubes-stacked',
    '計画・調査': 'fa-solid fa-drafting-compass',
    '施工': 'fa-solid fa-helmet-safety',
    '点検': 'fa-solid fa-magnifying-glass-chart',
    '機械・装置': 'fa-solid fa-robot',
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0 h-48 md:h-auto md:w-64 bg-blue-500 flex items-center justify-center">
            <i className={`${categoryIcons[product.category]} text-6xl lg:text-7xl text-white`}></i>
        </div>
        <div className="p-6 md:p-8 flex-1">
          <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{product.category}</div>
          <h2 className="flex items-center mt-1 text-2xl leading-tight font-bold text-black">
            <i className={`${categoryIcons[product.category]} text-blue-600 mr-3 text-xl`}></i>
            <span>{product.companyName}</span>
          </h2>
          <h3 className="text-lg text-gray-700 font-medium">{product.productName}</h3>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-semibold rounded-full">{tag}</span>
            ))}
          </div>
          <div className="mt-6">
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-200"
            >
              {isExpanded ? '詳細を閉じる' : '詳細を見る'}
              <i className={`fas fa-chevron-down ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="border-t border-gray-200 p-6 md:p-8 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">主な特長</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">連絡先・URL</h4>
              <div className="space-y-3 text-gray-700">
                {product.contact.address && (
                  <p><i className="fas fa-map-marker-alt w-5 text-blue-600 mr-2"></i>{product.contact.address}</p>
                )}
                {product.contact.phone && (
                  <p><i className="fas fa-phone w-5 text-blue-600 mr-2"></i>{product.contact.phone}</p>
                )}
                {product.contact.fax && (
                  <p><i className="fas fa-fax w-5 text-blue-600 mr-2"></i>{product.contact.fax}</p>
                )}
                {product.contact.email && (
                  <p><i className="fas fa-envelope w-5 text-blue-600 mr-2"></i><a href={`mailto:${product.contact.email}`} className="text-blue-600 hover:underline">{product.contact.email}</a></p>
                )}
                {product.contact.other?.map((info, idx) => (
                  <p key={idx}><i className="fas fa-info-circle w-5 text-blue-600 mr-2"></i>{info}</p>
                ))}
                {product.urls.map(link => (
                    <p key={link.url}><i className="fas fa-link w-5 text-blue-600 mr-2"></i><a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{link.label}</a></p>
                ))}
                {product.contact.inquiryUrl && (
                  <p><i className="fas fa-question-circle w-5 text-blue-600 mr-2"></i><a href={product.contact.inquiryUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ウェブサイトから問い合わせ</a></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
