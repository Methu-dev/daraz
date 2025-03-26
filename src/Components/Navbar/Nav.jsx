import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="https://i.ibb.co/7dwDHP1C/IMG-6210.jpg" className="h-10 w-full rounded-[8px]" alt="methu chowdhury" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">METHU</span>
        </a>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        {/* Menu List */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex flex-col font-sm mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-blue-700">SAVE MORE ON APP</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-blue-700">SELL ON DARAZ</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-blue-700">CUSTOMER CARE</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-blue-700">TRACK MY ORDER</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-blue-700">SIGNUP / LOGIN</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-blue-700">DARAZ AFFILIATE PROGRAM</a></li>
            <li><a href="#" className="block py-2 px-3 md:p-0 hover:text-blue-700">ভাষা</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
