import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import RamsaysDetailingImg from '../public/ramsaysdetailing.png';
import FacialRecognitionImg from '../public/facialrecognition.png';
import NginxImg from '../public/nginx.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated High School',
    location: 'Ottawa, ON',
    description:
      'I graduated high school with computer science and computer engineering classes',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Graduated College',
    location: 'Ottawa, ON',
    description:
      'I Graduated 2 year program for computer science at Algonquin College. This gave me many skills like mobile and web develoment.',
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2022',
  },
  {
    title: 'Self-Employed Full-Stack Developer',
    location: 'Ottawa, ON',
    description:
      "I'm now looking for a full-stack developer role while working on my dream app and building my portfolio to get a full time job. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Ramsay\'s Detailing',
    description:
      'I\'ve been working on my dream web applicaiton for a while now. It\'s going to be a world wide service site.',
    tags: ['Three JS', 'MongoDB', 'Tailwind', 'Express', 'Google Oauth', 'JWT'],
    imageUrl: RamsaysDetailingImg,
    url: 'https://www.ramsaysdetailing.ca'
  },
  {
    title: 'Facial Recognition Web App',
    description:
      'I made a web app that allows you to use facial recognition on any device. The user can create or delete faces from the system.',
    tags: ['React', 'TypeScript', 'Next.js', 'CSS'],
    imageUrl: FacialRecognitionImg,
    url: 'https://facialrecognition.ramsaysdetailing.ca'
  },
  {
    title: 'Nginx Server',
    description:
      'All of my projects are hosted on an Nginx server running on a hyper-v virtual machine using linux and a vpn with a dedicated ip service.',
    tags: ['Java', 'Vite', 'React', 'Tailwind', 'Framer'],
    imageUrl: NginxImg,
    url: 'http://nginx.ramsaysdetailing.ca'
  },
  // {
  //   title: 'Andriod Emulator Web App',
  //   description:
  //     'An Android emulator using NoVNC to host the device which has a simple android app I made during collage.',
  //   tags: ['Java', 'Vite', 'React', 'Tailwind', 'Framer'],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Nginx',
  'Three JS',
  'Server Hosting',
  'Git',
  'Tailwind',
  'MongoDB',
  'Express',
  'PostgreSQL',
  'Python',
  'Framer Motion',
] as const;
