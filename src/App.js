import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import CricketEnquiry from './components/CricketEnquiry';
import CarouselComponent from './components/carosal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Always show TopBar and Navbar, and Carousel */}
        <TopBar />
        <Navbar />
        <CarouselComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/CricketEnquiry" element={<CricketEnquiry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
