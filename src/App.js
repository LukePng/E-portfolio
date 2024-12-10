import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Interests from './pages/Interests';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
