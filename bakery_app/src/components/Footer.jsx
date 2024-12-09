import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-quicksand select-none">About Us</h3>
            <p className="text-sm font-lora select-none">
              Welcome to our bakery! We craft delicious biscuits, scones and  pastries with love and the finest ingredients. Visit us for a delightful experience.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-quicksand select-none">Contact Us</h3>
            <ul className="text-sm space-y-2 font-lora select-none">
              <li><strong className="font-quicksand">Phone:</strong> <span>073 971 6875</span> / <span>069 248 9903</span></li>
              <li><strong className="font-quicksand">Email:</strong> currently unavailable</li>
              <li ><strong className="font-quicksand">Address:</strong> 2410 / 2258 Sorrel Street, Villa Liza EXT 2</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-quicksand select-none">Opening Hours</h3>
            <ul className="text-sm space-y-2 font-lora select-none">
              <li><strong className="font-quicksand">Monday - Friday:</strong> 8:00 AM - 6:00 PM</li>
              <li><strong className="font-quicksand">Saturday:</strong> 9:00 AM - 5:00 PM</li>
              <li><strong className="font-quicksand">Sunday:</strong> Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-6 text-center">
          <p className="text-sm font-quicksand select-none">
            &copy; {new Date().getFullYear()} MaMas'   Bakery. All rights reserved.
          </p>
        </div>

        <div className="mt-10">
          <h1 className="text-center font-cookie text-4xl font-bold text-pink-700 select-none">Follow Us</h1>
          <div className="m-10">
              <div className="flex flex-row items-center justify-center gap-8">

                {/* Instagram */}
                <Link 
                  to="https://www.instagram.com/"
                  className="text-gray-500 hover:text-pink-700 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/200/svg"
                    fill="currentColor"
                  >
                  <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"></path>
                  </svg>
                </Link>

                {/* Tik Tok */}
                <Link 
                  to="https://www.tiktok.com/"
                  className="text-gray-500 hover:text-pink-700 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    height="30"
                    width="30"
                    fill="currentColor"
                  >
                    <path d="M34.8 10.9c-2.4-2.2-3.5-5.1-4.1-7.9h-4.5v26.5c-.2 2.9-2.7 5.3-5.6 5.3-3.1 0-5.6-2.5-5.6-5.6 0-3 2.4-5.5 5.4-5.6.4 0 .8.1 1.1.2v-5.5c-.7-.1-1.3-.2-2-.2-6.1 0-11.1 5-11.1 11.1 0 6.1 5 11.1 11.1 11.1 6.1 0 11.1-5 11.1-11.1V14c1.2.8 2.4 1.5 3.8 2.1.9.4 1.9.7 2.9.9v-5.4c-1.2-.2-2.3-.6-3.4-1.2z" />
                  </svg>
                </Link>

                {/* Facebook */}
                <Link 
                  to="https://www.facebook.com/"
                  className="text-gray-500 hover:text-pink-700 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="27"
                    width="27"
                    fill="currentColor"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.708h-3.415v-3.59h3.415V8.413c0-3.387 2.068-5.229 5.088-5.229 1.443 0 2.684.107 3.044.155v3.53h-2.088c-1.636 0-1.952.777-1.952 1.92v2.514h3.901l-.51 3.59h-3.39V24h6.651C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
