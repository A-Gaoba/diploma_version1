import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About', link: '#about' },
    { id: 3, text: 'Teachers', link: '#teachers' },
    { id: 4, text: 'Students', link: '#students' },
    { id: 5, text: 'Courses', link: '#courses' },
    { id: 6, text: 'Contact', link: '#contact' },
  ];

  return (
    <div className='relative z-20 flex justify-between items-center h-20 mx-auto px-4 text-white font-bold md:w-[90%] 2xl:w-[80%]'>
      {/* Logo */}
      <h1 className='w-full md:text-2xl font-bold'>ALNAHDAH</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map((item) => (
          <li
            key={item.id}
            className='px-4 p-2 hover:bg-sky-600 hover:text-dark-purple rounded-md m-2 duration-300 '
          >
            <a href={item.link} className='text-white cursor-pointer'>{item.text}</a>
          </li>
        ))}
        <li className=' self-center'>
          <button type="button" className='bg-white text-dark-purple p-2 px-4 rounded-md ml-8 hover:bg-sky-600 hover:text-white'>Login</button>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNavToggle} className='block md:hidden cursor-pointer'>
        {isNavOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${isNavOpen
          ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r boronr-r-gray-900 bg-sky-400 ease-in-out duration-500'
          : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }`}
      >
        {/* Mobile Logo */}
        <li>
          <h1 className='w-full text-3xl font-bold m-4'>ALNAHDAH</h1>
        </li>

        {/* Mobile Navigation Items */}
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`p-4 border-b rounded-md hover:text-dark-purple hover:bg-white cursor-pointer ${index === 0 ? 'mt-8' : ''
              }`}
          >
            <a href={item.link}>{item.text}</a>
          </li>
        ))}

        {/* Login Button in Mobile Version */}
        <li>
          <div className='bg-white text-dark-purple font-bold p-4 border-b rounded-xl hover:bg-sky-600 hover:text-white cursor-pointer mt-6'>
            <button type='button' className=' rounded-md '>
              Login
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
