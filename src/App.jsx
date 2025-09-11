import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./files/header/header";
import Homepage from "./files/pages/homepage";
import About from "./files/pages/about";
import Contact from "./files/pages/contact";
import Footer from "./files/footer/footer";

function App() {
  return (
    <>
      <Router>
        <Header />

        <main style={{ minHeight: "80vh", padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
