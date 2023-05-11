import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import Header from './components/Header';
import Sections from './components/Sections';
import Info from './components/Info';
import Footer from './components/Footer';
import Categories from './components/Categories';

import { useAuth0 } from '@auth0/auth0-react'
import ProyDisplay from './components/ProyDisplay';
import { HashRouter } from 'react-router-dom'


function App() {

  const {user} = useAuth0()


  return (
    <HashRouter>
      <div className="App">

        <Header/>
        <Sections/>

        <Routes>
          <Route path='/' element={ <Homepage/> } />
          <Route path='/about' element={ <Info/> } />
          <Route path='/categories' element={ <Categories/> } />
          <Route path='/proyects/:cat_id' element={ <ProyDisplay/> } />
        </Routes>

        <Footer/>

      </div>

    </HashRouter>
  );
}

export default App;
