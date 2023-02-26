import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { projectsNav, projectData } from './data';
const Projects = () => {
  const [item, setItem] = useState({ name: 'advanced' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(2);

  useEffect(() => {
    const newProjects = projectData.filter((project) => {
      return project.category.toLowerCase() === item.name;
    });
    setProjects(newProjects);
  }, [item]);

  const handleClick = (e, id) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(id);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=' relative top-[70px]  h-screen overflow-scroll'
    >
      <nav className='mb-12 mt-20 '>
        <ul className='flex   justify-evenly items-center '>
          {projectsNav.map((item) => {
            const { name, id } = item;
            return (
              <li
                onClick={(e) => {
                  handleClick(e, id);
                }}
                key={id}
                className={
                  active === id
                    ? 'py-2 px-3 cursor-pointer uppercase m-4 bg-[#0b658f] duration-150 md:py-2 md:px-4 shadow-lg font-bold shadow-blue-500 rounded-xl'
                    : 'py-2 px-3 cursor-pointer uppercase m-4 bg-[#0ea5e9] md:py-2 md:px-4 shadow-lg font-bold shadow-blue-500 rounded-xl '
                }
              >
                {name}
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className='  grid lg:grid-cols-3
      gap-y-12 lg:gap-x-8 lg:gap-y-8 p-10 '
      >
        {projects.map((item) => {
          const { id, name, img, githubLink, demoLink } = item;
          return (
            <div
              key={id}
              className='bg-[#273f6a]/0.7  shadow-xl shadow-blue-500 rounded-xl p-4 border-2 border-indigo-400 mb-10'
            >
              <img src={img} alt={name} />
              <div>
                <h1 className='text-center mt-2 font-bold'>{name}</h1>
                <div className='flex justify-between mt-5'>
                  <a href={githubLink}>
                    <BsGithub size={25} />
                  </a>
                  <a href={demoLink}>
                    <FaLaptopCode size={25} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
