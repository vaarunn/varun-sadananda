import crypto from '../assets/projects/crypto.jpg';
import netflix from '../assets/projects/netflix.jpg';
import youtube from '../assets/projects/youtube.png';

import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
    url: 'https://www.linkedin.com/in/varun-sadananda-b251131b7/',
  },
  {
    id: '2',
    icon: <FaGithub />,
    url: 'https://github.com/vaarunn',
  },
  {
    id: '3',
    icon: <AiOutlineMail />,
    url: '#/contact',
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
    name: 'CryptoBase',
    category: 'Advanced',
    githubLink: 'https://github.com/vaarunn/cryptobase/',
    demoLink: 'https://vaarunn.github.io/cryptobase/',
  },
  {
    id: 2,
    img: netflix,
    name: 'Netflix App',
    category: 'Intermediate',
    githubLink: 'https://github.com/vaarunn/ultimate-netflix',
    demoLink: 'https://vaarunn.github.io/ultimate-netflix/',
  },
  {
    id: 3,
    img: youtube,
    name: 'Youtube Clone',
    category: 'Intermediate',
    githubLink: 'https://github.com/vaarunn/ultimate-youtube',
    demoLink: 'https://vaarunn.github.io/ultimate-youtube/',
  },
];

export { links, socialIcons, skills, projectsNav, projectData };
