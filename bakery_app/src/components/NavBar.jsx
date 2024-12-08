import HomeComp from "./HomeComp";
import Footer from './Footer';


const NavBar = () => {
  return (
    <div>
      <nav className="flex flex-row items-center justify-center bg-pink-300 p-4">
            <h1 className="text-3xl font-bold font-[cursive] text-pink-50">
                MaMas' Cakes
            </h1>            
      </nav>

      <div className="">
        <div className="bg-pink-100 text-gray-700 py-5 text-center text-3xl font-bold p-28">
        Welcome to our bakery! We craft delicious biscuits, scones and  pastries with love and the finest ingredients.
        </div>
        <HomeComp />
        <Footer />
      </div> 
    </div>
  );
}

export default NavBar;
