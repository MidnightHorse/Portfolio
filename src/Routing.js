import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Project } from './Pages/Exp';
import { Portfolio } from './Pages/Portfolio';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/game-portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default Routing;