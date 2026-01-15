// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
// import Services from "../src/Pages/Services";
import Services from "./Pages/Services";
import Navbar from "../src/components/Navbar";
import ChatWidget from "../src/components/Common/ChatWidget";
import Contact from "./Pages/Contact";
import "./i18n/index";

const App = () => {
  return (
    <Router>
      <ChatWidget />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <div style={{ height: "200vh", background: "#e5e7eb" }}></div> */}
    </Router>
  );
};

export default App;
