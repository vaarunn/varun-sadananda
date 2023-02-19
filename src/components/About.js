import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import boy from '../assets/boy.json';
import Lottie from 'lottie-react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='w-full h-screen md:h-screen  p-2 items-center py-16'
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mt-10'>
        <Fade duration='5000'>
          <div className='col-span-2 mt-10 flex flex-col gap-3 font-bold font-2xl'>
            <p>
              Self Taught{' '}
              <span className='text-[#FFEA00]'>FrontEnd Web Developer </span> .
              with solid knowledge of DSA.
            </p>
            <p>
              Based out of{' '}
              <span className='text-[#FFEA00]'>Bengaluru,India </span> .
            </p>
            <p>
              <span className='text-[#FFEA00]'>2024 Graduate </span> from
              BTech.Computer Science and Engineering
            </p>
            <p>
              Learning and using latest technologies like{' '}
              <span className='text-[#FFEA00]'>
                ReactJS,TailwindCSS,Firebase etc...
              </span>
            </p>
            <p>
              To know more about my skills{' '}
              <Link to='/skills'>
                <span className='text-[#FFEA00]'>Click Here</span>
              </Link>
            </p>
            <p>
              Hit me up{' '}
              <Link to='/contact'>
                <span className='text-[#FFEA00]'>Click Here</span>
              </Link>
            </p>
          </div>
        </Fade>

        <Bounce>
          <div className='w-[400px]  hover:scale-105 ease-in duration-300 '>
            <Lottie animationData={boy} />
          </div>
        </Bounce>
      </div>
    </motion.div>
  );
};

export default About;
