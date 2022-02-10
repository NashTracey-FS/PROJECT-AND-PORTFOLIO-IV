import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react';
import Button from './components/buttons/Button';
import Home from './components/pages/Home';
import Current from './components/pages/Current';
import FourDay from './components/pages/FourDay';
import AstroEvents from './components/pages/AstroEvents'
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <Routes>
    <Route exact path = "/" element={<Home />} />
    <Route path='home' element={<Home />}/>
    <Route path='current' element={<Current />}/>
    <Route path='fourDay' element={<FourDay />}/>
    <Route path='astroEvents' element={<AstroEvents />}/>
  </Routes>
  );
}

export default App;
