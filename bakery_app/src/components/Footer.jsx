
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
              <li><strong>Email:</strong> hello@bakeryshop.com</li>
              <li><strong>Address:</strong> 2410 / 2258 Sorrel Street, Villa Liza EXT 2</li>
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
            &copy; {new Date().getFullYear()} Bakery Shop. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Social Media Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.891h2.54v-2.203c0-2.506 1.493-3.89 3.775-3.89 1.095 0 2.242.194 2.242.194v2.464h-1.263c-1.244 0-1.632.775-1.632 1.568v1.867h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.061 2.633.333 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.061 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.061-2.633-.333-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.061-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.247 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.691 0 8.264.015 7.052.073 5.834.132 4.841.482 4.07 1.253.482 4.841.132 5.834.073 7.052.015 8.264 0 8.691 0 12c0 3.309.015 3.736.073 4.948.059 1.218.409 2.211 1.18 2.982.771.771 1.764 1.121 2.982 1.18 1.212.058 1.639.073 4.948.073s3.736-.015 4.948-.073c1.218-.059 2.211-.409 2.982-1.18.771-.771 1.121-1.764 1.18-2.982.058-1.212.073-1.639.073-4.948s-.015-3.736-.073-4.948c-.059-1.218-.409-2.211-1.18-2.982-.771-.771-1.764-1.121-2.982-1.18C15.736.015 15.309 0 12 0z"
                />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557a9.828 9.828 0 0 1-2.828.775A4.932 4.932 0 0 0 23.338 3c-.951.564-2.005.973-3.127 1.195a4.918 4.918 0 0 0-8.384 4.482A13.958 13.958 0 0 1 1.671 3.149 4.822 4.822 0 0 0 3.149 8.757 4.862 4.862 0 0 1 .945 8.151v.062a4.916 4.916 0 0 0 3.946 4.817 4.946 4.946 0 0 1-2.21.084 4.923 4.923 0 0 0 4.602 3.419A9.869 9.869 0 0 1 .95 19.54 13.949 13.949 0 0 0 7.548 21c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
