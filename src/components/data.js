import crypto from '../assets/projects/crypto.jpg';
import netflix from '../assets/projects/netflix.jpg';
import property from '../assets/projects/property.jpg';
import twitch from '../assets/projects/twitch.jpg';

import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import javascript from '../assets/skills/javascript.png';
import react from '../assets/skills/react.png';
import cpp from '../assets/skills/CPP.png';
import tailwind from '../assets/skills/tailwind.png';
import github from '../assets/skills/github.png';
import firebase from '../assets/skills/firebase.png';
const links = [
  {
    id: '1',
    title: 'Home',
    url: '/',
  },
  {
    id: '2',
    title: 'About',
    url: '/about',
  },
  {
    id: '3',
    title: 'Skills',
    url: '/skills',
  },
  {
    id: '4',
    title: 'Project',
    url: '/project',
  },
  {
    id: '5',
    title: 'Contact Me',
    url: '/contact',
  },
];

const socialIcons = [
  {
    id: '1',
    icon: <FaLinkedinIn />,
  },
  {
    id: '2',
    icon: <FaGithub />,
  },
  {
    id: '3',
    icon: <AiOutlineMail />,
  },
  {
    id: '4',
    icon: <BsFillPersonLinesFill />,
  },
];

const skills = [
  {
    id: 1,
    img: html,
    title: 'HTML',
  },
  {
    id: 2,
    img: css,
    title: 'CSS',
  },
  {
    id: 3,
    img: javascript,
    title: 'Javascript',
  },
  {
    id: 4,
    img: react,
    title: 'ReactJS',
  },
  {
    id: 5,
    img: cpp,
    title: 'C++',
  },
  {
    id: 6,
    img: tailwind,
    title: 'TailwindCSS',
  },
  {
    id: 7,
    img: github,
    title: 'Github',
  },
  {
    id: 8,
    img: firebase,
    title: 'Firebase',
  },
];

const projectsNav = [
  { id: 1, name: 'Basic' },
  { id: 2, name: 'Intermediate' },
  { id: 3, name: 'Advanced' },
];

const projectData = [
  {
    id: 1,
    img: crypto,
    name: 'Crypto App',
    category: 'Intermediate',
    githubLink: '/',
    demoLink: '/',
  },
  {
    id: 2,
    img: netflix,
    name: 'Netflix App',
    category: 'Basic',
    githubLink: '/',
    demoLink: '/',
  },
  {
    id: 3,
    img: property,
    name: 'Property App',
    category: 'Advanced',
    githubLink: '/',
    demoLink: '/',
  },
  {
    id: 4,
    img: twitch,
    name: 'Twitch App',
    category: 'Advanced',
    githubLink: '/',
    demoLink: '/',
  },
];

export { links, socialIcons, skills, projectsNav, projectData };
