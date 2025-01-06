// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Page imports
import Home from './pages/home/home';
import {Projects} from './pages/projects/projects';
import Experience from './pages/experience/experience';
import Education from './pages/education/education';
import About from './pages/about/about';
import Test from './pages/test/test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;

