
const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Welcome to our bakery! We craft delicious biscuits, scones and  pastries with love and the finest ingredients. Visit us for a delightful experience.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li><strong>Phone:</strong> <span>073 971 6875</span> / <span>069 248 9903</span></li>
              <li><strong>Email:</strong> currently unavailable</li>
              <li ><strong>Address:</strong>2410 / 2258 Sorrel Street, Villa Liza EXT 2</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="text-sm space-y-2">
              <li><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</li>
              <li><strong>Saturday:</strong> 9:00 AM - 5:00 PM</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MaMas' Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
