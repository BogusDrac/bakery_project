import HomeComp from "./HomeComp";
import Footer from './Footer';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <nav className="flex flex-row items-center justify-center bg-pink-300 p-4">
            <h1 className="text-5xl font-bold font-cookie text-pink-50  shadow-xl hover:bg-pink-50 hover:text-pink-300 p-4 rounded-xl select-none">
                MaMas' Cakes
            </h1>            
      </nav>

      <div className="">
        <div className="bg-pink-100 text-gray-700 py-5 text-center text-3xl font-bold md:p-14 font-quicksand select-none">
          We specialize in crafting freshly baked scones and biscuits that'll bring joy to your taste buds. Using the finest ingredients, we pour love and passion into every creation.
        <p>Experience the sweet side of life!</p>
        </div>
        <HomeComp />
        <div className="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 flex justify-center p-20">
          <Link
            to="/reviews"
            className=""
          >
            <button className="border shadow-xl rounded-2xl p-4 hover:bg-pink-300 transition-colors">
              <p className="font-bold text-3xl text-gray-500 hover:text-white">Share Your Thoughts, And Help Us Improve!</p> 
            </button>
          </Link>
        </div>
        <Footer />
      </div> 
    </div>
  );
}

export default NavBar;
