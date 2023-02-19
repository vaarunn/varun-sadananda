import AnimatedRoutes from './components/AnimatedRoutes';
import { HashRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </>
  );
};

export default App;
