
const Home = () => {
  return (
    <div className="bg-pink-50 min-h-screen py-8 mb-0">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Welcome to Our Bakery
        </h1>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 20L Bucket Scones */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              20L Bucket Scones
            </h2>
            <p className="text-pink-600 font-bold text-lg">R350</p>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
              Place Order
            </button>
          </div>

          {/* 10L Bucket Scones */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              10L Bucket Scones
            </h2>
            <p className="text-pink-600 font-bold text-lg">R180</p>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
              Place Order
            </button>
          </div>

          {/* 5L Bucket Scones */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              5L Bucket Scones
            </h2>
            <p className="text-pink-600 font-bold text-lg">R100</p>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
              Place Order
            </button>
          </div>

          {/* 5L Ginger Biscuits */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              5L Ginger Biscuits
            </h2>
            <p className="text-pink-600 font-bold text-lg">R150</p>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
              Place Order
            </button>
          </div>

          {/* 5L Biscuits Mix Choice Assorted */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              5L Biscuits Mix Choice Assorted
            </h2>
            <p className="text-pink-600 font-bold text-lg">R200</p>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
              Place Order
            </button>
          </div>

          {/* Bring Own Empty */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Bring Own Empty
            </h2>
            <p className="text-gray-500 italic">
              Save the environment by bringing your own empty container!
            </p>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
