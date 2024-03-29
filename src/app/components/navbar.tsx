"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full sticky  bg-white top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ml-5">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block ">
              {/* LOGO */}
              <div className='flex '>
                <div className='m-auto'>
                  <Image src="/img/logo1.png" alt='logo' width={50} height={50}/>
                </div>
                <div className=''>
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold mt-2 ml-4">HASSAN</h2>
                
              </Link>
              </div>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/img/menu.png" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/img/cross.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-cyan-900  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li>
                <button className="mb-3 font-semibold box decoration-clone bg-gradient-to-r from-cyan-600 to-black rounded-full text-[23px] p-2 ml-10 transform transition-transform hover:scale-105 shadow-md">
  Download CV
</button>

                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;