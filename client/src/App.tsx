/** @format */

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Categories from "./components/Categories";



import ProyDisplay from "./components/ProyDisplay";
import { HashRouter } from "react-router-dom";
import FAQ from "./components/FAQ";


function App() {


  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Sections />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Info />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/proyects/:cat_id" element={<ProyDisplay />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
