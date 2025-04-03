import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";  // ✅ Import Home instead of declaring it
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => <h2 className="text-center mt-5">About Us</h2>;
const Contact = () => <h2 className="text-center mt-5">Contact Us</h2>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Using imported Home */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
