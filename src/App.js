import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Apply from './components/Apply';
import FAQ from './components/FAQ';
import Placement from './components/Placement';
import Courses from './components/Courses';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<Signup/>} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App; 
