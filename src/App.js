import './App.css';
import {BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import About from'./pages/About.js';
import Contact from './pages/Contact.js';
import Features from './pages/Features.js';
import Navbar from './components/Navbar.js';
import BmiCalculator from './pages/BmiCalculator.js';
import Footer from './components/Footer.js';
import './styles/responsive.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bmicalculator" element={<BmiCalculator />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
