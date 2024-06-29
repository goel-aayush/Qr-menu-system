import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <img src="/logo.svg" alt="" className="h-8 mr-4" />
          <div className="hidden md:block">
            <a href="/" className="text-xl font-bold text-gray-800 hover:text-orange-500">QR Menu Online</a>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-600 hover:text-orange-500">Product</a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-orange-500">Advantages</a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-orange-500">Prices</a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-orange-500">Reviews</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="/Login" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">Sign in</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;