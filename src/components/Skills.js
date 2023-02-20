import React from 'react';
import { motion } from 'framer-motion';
import { skills } from './data';

import Zoom from 'react-reveal/Zoom';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full h-auto  lg:h-screen p-2 py-20'
    >
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-auto  '>
        <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
          {skills.map((skill) => {
            const { id, img, title } = skill;
            return (
              <Zoom>
                <div
                  key={id}
                  className='bg-[#273f6a] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
                >
                  <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                    <div className='m-auto'>
                      <img src={img} width='65' height='65' alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>{title}</h3>
                    </div>
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
