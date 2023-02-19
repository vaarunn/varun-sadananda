import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Project from './Project';
import Home from './Home';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/project' element={<Project />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
