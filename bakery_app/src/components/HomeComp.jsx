import { useState } from 'react';
import { Recycle, ShoppingCart, Filter, Search, Info, Star } from "lucide-react";

const HomeComp = () => {
  const [products] = useState([
    {
      id: 1,
      name: "20L Bucket Scones",
      price: 350,
      size: "20L",
      category: "Scones",
      description: "Classic, freshly baked scones perfect for sharing.",
      whatsappMessage: "I would like to order a 20L Bucket of Scones. Price: R350",
      inStock: true
    },
    {
      id: 2,
      name: "10L Bucket Scones",
      price: 180,
      size: "10L",
      category: "Scones",
      description: "Delicious medium-sized scone bucket for smaller gatherings.",
      whatsappMessage: "I would like to order a 10L Bucket of Scones. Price: R180",
      inStock: true
    },
    {
      id: 3,
      name: "5L Bucket Scones",
      price: 100,
      size: "5L",
      category: "Scones",
      description: "Perfect small batch of scones for intimate moments.",
      whatsappMessage: "I would like to order a 5L Bucket of Scones. Price: R100",
      inStock: true
    },
    {
      id: 4,
      name: "5L Ginger, Coconut & Jam Tart Biscuits",
      price: 150,
      size: "5L",
      category: "Biscuits",
      description: "A delightful mix of ginger, coconut, and jam-filled tart biscuits.",
      whatsappMessage: "I would like to order 5L Ginger, Coconut & Jam Tart Biscuits. Price: R150",
      inStock: true
    },
    {
      id: 5,
      name: "5L Biscuits Mix Choice Assorted",
      price: 200,
      size: "5L",
      category: "Biscuits",
      description: "Assorted white and brown chocolate-topped biscuits.",
      whatsappMessage: "I would like to order 5L Biscuits Mix Choice Assorted. Price: R200",
      inStock: false
    }
  ]);

  /* const [searchTerm, setSearchTerm] = useState(''); */
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const shareViaWhatsApp = (message) => {
    const phoneNumber = "27739716875";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const filteredProducts = products
    .filter(product =>
      (filterCategory === 'All' || product.category === filterCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-16">        
        {/* Eco-Friendly Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Bring Your Own Empty Container</h2>
          <p className="text-gray-500 flex items-center justify-center gap-2">
            <Recycle className="text-green-500" /> Help the environment by reusing your containers!
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-wrap gap-4 justify-between items-center">
           {/* Search */}
          {/*<div className="flex items-center bg-white rounded-lg shadow-lg px-4 w-full md:w-1/3">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 w-full rounded-lg focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div> */}

          {/* Filter */}
          <select
            className="p-2 rounded-lg bg-white shadow-lg"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Scones">Scones</option>
            <option value="Biscuits">Biscuits</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105 ${!product.inStock ? 'opacity-50' : ''}`}>
              {!product.inStock && (
                <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center rounded-lg">
                  <span className="text-white font-bold text-lg">Out of Stock</span>
                </div>
              )}
              <h2 className="text-2xl font-semibold text-gray-700">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-pink-600 font-bold text-lg">R{product.price}</p>
              {product.inStock && (
                <button
                  onClick={() => shareViaWhatsApp(product.whatsappMessage)}
                  className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition"
                >
                  Order on WhatsApp
                </button>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 mt-10">No products match your search or filter criteria.</p>
        )}
      </div>
    </div>
  );
};

export default HomeComp;
