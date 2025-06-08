import React from "react";
import {
  FaListAlt,
  FaUtensils,
  FaHome,
  FaQuoteLeft,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaUtensils />, label: "Services" },
    { icon: <FaListAlt />, label: "Menu" },
    { icon: <FaQuoteLeft />, label: "Reviews" }
  ];

  return (
    <>
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500
        shadow-lg rounded-full px-3 sm:px-4 lg:px-8 md:py-3 w-[95%] md:w-[90%] max-w-7xl flex items-center justify-between backdrop-blur-md
        border border-white/20 z-50">

        {/* LOGO SECTION */}
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
            <FaUtensils className="text-xl text-white animate-pulse" />
          </div>
          <h1 className="text-xl font-pacifico lg:text-2xl md:text-sm font-bold text-black">
            Garden <span className="text-orange-500 ml-2">Food</span>
          </h1>
        </div>

        {/* CENTER NAVIGATION */}
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {menuItems.map((item, index) => (
            <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(item.label.toLowerCase().replace(/\s+/g, '-'));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center space-x-2 text-black hover:text-orange-600 ..."
              >
              <span className="text-lg transition-transform group-hover:scale-125">
                {item.icon}
              </span>
              <span className="text-base font-semibold md:text-sm group-hover:underline decoration-2 underline-offset-4">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center space-x-6">

          {/* SEARCH BAR */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-36 md:w-40 lg:w-48
                border border-gray-300 rounded-full py-1 pl-3 pr-10 text-sm
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent 
                transition duration-300"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500
              hover:scale-110 transition-transform text-base" />
          </div>

          {/* CART + LOGIN */}
          <div className="flex items-center space-x-3">
            <button className="p-2 md:text-sm bg-white/20 rounded-full 
                hover:bg-white/30 transition-all focus:outline-none">
              <FaShoppingCart className="text-lg text-white" />
            </button>

            <button className="hidden sm:flex items-center space-x-2 p-2 bg-gradient-to-r from-yellow-300 to-orange-400
                px-3 lg:px-4 py-2 rounded-full hover:scale-105 shadow-lg transition-all
                focus:outline-none whitespace-nowrap">
              <FaUser className="text-white text-lg md:text-sm" />
              <span className="font-semibold text-white text-sm md:text-xs lg:text-base">Login</span>
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-white rounded-full hover:text-yellow-300 transition-all focus:outline-none">
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`md:hidden fixed top-[80px] left-0 right-0 mx-4 bg-gradient-to-b from-yellow-400 to-orange-500
        rounded-2xl shadow-xl transition-all duration-300 z-40
        ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`}>

        <div className="p-4 space-y-4">
          {menuItems.map((item, index) => (
            <button
               key={index}
                onClick={() => {
                   setIsOpen(!isOpen)
                  const element = document.getElementById(item.label.toLowerCase().replace(/\s+/g, '-'));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              className="w-full flex items-center space-x-3
              text-white hover:bg-white/20 px-4 py-3 rounded-xl transition duration-200 focus:outline-none"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-lg">{item.label}</span>
            </button>
          ))}

          {/* MOBILE SEARCH + LOGIN */}
          <div className="sm:hidden bg-white/20">
           <div  className="flex items-center bg-white/10 rounded-full px-3 ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent border-0 text-white placeholder-white py-1 flex-1 
                focus:outline-none text-sm"
            />
            <FaSearch className="text-white text-lg ml-2" />
           </div>
          </div>
            {/*BUTTONS */}
          <button className='w-full sm:hidden flex items-center justify-center space-x-3
          bg-gradient-to-br from-yellow-300 to-orange-400 px-4 py-3 
          rounded-full hover:scale-105 shadow-lg transition-all focus:outline-none'>
            <FaUser className='text-white text-base font-semibold' />
            <span className='text-white font-semibold text-sm'>Login</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
// This code defines a responsive Navbar component using React and Tailwind CSS.