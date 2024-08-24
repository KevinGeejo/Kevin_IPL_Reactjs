import React, { useState } from 'react';
// import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import sports from '../images/sports1.png'
import navlogo from '../images/navlogo.png'

// function PlayerNavigation(){
//     return <nav className="nav navbar justify-between bg-dark text-white ">
//             <Link className="nav-link text-white" type="button" to='/'>Home</Link>
//             <Link className="nav-link text-white" to='/players'>Players</Link>
//             <Link className="nav-link text-white" to='/players/add'>Add</Link>
            
//         </nav>
// }



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky top-0 z-10 bg-[#171717] justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="" to="/" spy={true} 
      smooth={true} 
      offset={-170} 
      duration={500}  className="text-xl text-white font-bold font-mono">
                <img src={navlogo} style={{width:"70px", margin: 30 } } alt='navlogo'/>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="ml-30 flex items-baseline space-x-4">
              <Link
              href="" 
                to="/"
                spy={true} 
      smooth={true} 
      offset={-190} 
      duration={500} 
                className="relative overflow-hidden text-gray-300 hover:bg-[#c19d13] hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
                <span className="absolute h-0.5 bg-white bottom-0 left-0 w-0 transition-all duration-500 ease-out dark:from-white dark:to-white"></span>
              </Link>
              <Link
              href="" 
                to="/matches"
                spy={true} 
      smooth={true} 
      offset={-190} 
      duration={500} 
                className="relative overflow-hidden text-gray-300 hover:bg-[#c19d13] hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Matches
                <span className="absolute h-0.5 bg-white bottom-0 left-0 w-0 transition-all duration-500 ease-out dark:from-white dark:to-white"></span>
              </Link>

              <Link
              href="" 
                to="/players"
                spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
                className="text-gray-300 hover:bg-[#c19d13] hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Players
              </Link>
              <Link
              href="" 
                to="/players/add"
                spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
                className="text-gray-300 hover:bg-[#c19d13] hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Add Player
              </Link>
              {/* <a
              
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Github
              </a> */}
            </div>
          </div>
          {/* <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <MdClose color="white" size={30} />
            ) : (
              <MdMenu size={30} color="white" />
            )}
          </div> */}
        </div>
        {/* <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-black bg-[#171717] p-4'
              : 'fixed left-[-100%]'
          }
        >
          <h1 className="w-full text-2xl font-bold m-4 text-white">
            Kevin Geejo
          </h1>
          <ul className="pt-24 uppercase p-4">
            <li
              href="#"
              className="border-b p-4 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
            >
              Home
            </li>
            <li
              href="#"
              className="border-b p-4 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-600 rounded-md text-sm font-medium"
            >
              About
            </li>
            <li
              href="#"
              className="border-b text-gray-300 border-gray-600 hover:bg-gray-700 p-4 hover:text-white  rounded-md text-sm font-medium"
            >
              Projects
            </li>
            <li
              href="#"
              className=" border-b border-gray-600 p-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
            >
              Github
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;