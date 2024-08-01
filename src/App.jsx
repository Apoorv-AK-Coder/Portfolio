import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

import Hero from './components/hero.jsx';
import Header from './components/header.jsx';
import AboutMe from './components/about-me.jsx';
import USP from './components/usp.jsx';
import Skills from './components/skills.jsx';
import Education from './components/education.jsx';

export default function App() {
  const location = useLocation();
  useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
      }, [location]);
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <USP />
      <Skills />
      <Education />
    </>
  );
}