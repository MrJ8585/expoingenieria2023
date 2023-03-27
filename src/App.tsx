import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import Header from './components/Header';
import Sections from './components/Sections';
import Info from './components/Info';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header/>
        <Sections/>

        <Routes>
          <Route path='/home' element={ <Homepage/> } />
          <Route path='/about' element={ <Info/> } />
        </Routes>

        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;
