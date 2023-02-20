import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';
import { socialIcons } from '../components/data';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { links } from '../components/data';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const toogleSidebar = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#273f6a]'
          : 'fixed w-full h-20  z-[100]'
      }
    >
      {/* div containing all the nav links */}
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* image link  */}
        <Link to='/'>
          <div>
            <img src={logo} alt='/' width='125' height='125'></img>
          </div>
        </Link>
        {/* ul links + hamburger */}
        <div>
          <ul className='hidden md:flex gap-8 p-8 '>
            {links.map((link) => {
              const { id, title, url } = link;
              return (
                <Link key={id} to={url}>
                  <li className='text-white uppercase hover:text-[#0ea5e9]'>
                    {title}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div
            className='cursor-pointer md:hidden p-8 text-white'
            onClick={toogleSidebar}
          >
            <FaHamburger size={30} />
          </div>
        </div>
      </div>

      {/* sidebar  */}

      <div
        className={
          nav ? ' fixed w-full h-full bg-[#101b36]/70 top-0 left-0' : ''
        }
      >
        {/* sidebar  */}
        <div
          className={
            nav
              ? 'border-l-4 border-indigo-500 fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full  p-10  ease-in duration-500'
              : 'fixed right-[-150%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex justify-between items-center'>
              <Link to='/'>
                <img src={logo} alt='/' width='87' height='87'></img>
              </Link>

              <div
                className='cursor-pointer text-white'
                onClick={toogleSidebar}
              >
                <AiOutlineCloseCircle size={30} />
              </div>
            </div>

            <div>
              <p className='border-b border-gray-300 my-4 uppercase p-2 font-bold text-white'>
                Let's build something
                <span className='text-[#FFEA00] ml-1'>Legendary</span> together
              </p>
            </div>
            <div>
              <ul className='uppercase '>
                {links.map((link) => {
                  const { id, title, url } = link;
                  return (
                    <Link key={id} to={url} onClick={toogleSidebar}>
                      <li className=' py-4 border-b text-white border-gray-300  hover:text-[#0ea5e9]'>
                        {title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
              <div className='pt-10'>
                <p className='uppercase tracking-widest text-[#FFEA00]'>
                  Let's connect
                </p>
                <div className='flex items-center justify-between my-4 w-full sm-:w-[88%]'>
                  {socialIcons.map((icons) => {
                    const { id, icon, url } = icons;

                    return (
                      <div
                        key={id}
                        className='rounded-full bg-[#273f6a] shadow-lg shadow-gray-200 p-3 cursor-pointer hover:scale-125 ease-in duration-300'
                      >
                        <a href={url}>{icon}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
