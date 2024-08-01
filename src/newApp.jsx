import Hero from './components/hero.jsx';
import React from 'react';
import Header from './components/header.jsx';
import AboutMe from './components/about-me.jsx';
import USP from './components/usp.jsx';
import Skills from './components/skills.jsx';
import Education from './components/education.jsx';

export default function App() {
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