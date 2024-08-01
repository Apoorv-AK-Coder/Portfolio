import './style.css';
import Hero from './hero.jsx';
import Skills from './skills.jsx';
import Header from './header.jsx';
import Education from './edu.jsx';
import Experience from './experience.jsx';
import Contact from './contact.jsx';
import WorkData from './work.jsx';
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function App() {

  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  
  return (
    <div className="container">
      <Header />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <WorkData />
      <Contact />
    </div>
  );
}