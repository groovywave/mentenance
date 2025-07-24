
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <i className="fas fa-cogs text-3xl text-blue-600 mr-4"></i>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          インフラ技術ソリューションカタログ
        </h1>
      </div>
    </header>
  );
};

export default Header;
