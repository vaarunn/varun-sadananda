import React from 'react';
import { socialIcons } from './data';
import Typewriter from 'typewriter-effect';
import Particle from './Particles';
import { motion } from 'framer-motion';

import Zoom from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Particle />
      <Zoom duration='1000'>
        <div className=' relative'>
          <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div className='bg-[#273f6a]/0.7  shadow-xl shadow-blue-500 rounded-xl p-4 '>
                <div>
                  <div className='text-white'>
                    <Typewriter
                      options={{
                        strings: [
                          `Let's Build Something Amazing Together...`,
                          `Let's Get Started!`,
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>

                <h1 className='py-4  font-bold text-4xl text-white'>
                  Hi,I'm <span className='text-[#FFEA00]'>Varun Sadananda</span>
                </h1>
                <div className='flex items-between justify-center gap-3 max-w-[330px] m-auto py-4'>
                  {socialIcons.map((icons) => {
                    const { id, icon, url } = icons;
                    return (
                      <a href={url}>
                        <div
                          key={id}
                          className='rounded-full bg-[#273f6a] shadow-lg shadow-gray-200 p-3 cursor-pointer hover:scale-125 ease-in duration-300'
                        >
                          {icon}
                        </div>
                      </a>
                    );
                  })}
                </div>
                <Link to='https://drive.google.com/file/d/1RfLai75Zxo4K3Jcyg4Zq6SOsS-CiQeVy/view?usp=share_link'>
                  <button className=' py-2 m-4 bg-[#0ea5e9] px-6 text-xl hover:bg-[#195e7d] ease-in duration-300'>
                    Resume
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </motion.div>
  );
};

export default Home;
