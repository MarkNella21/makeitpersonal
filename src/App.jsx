import React from 'react';
import Home from "./components/homePage/Home";
import SiteNav from './components/homePage/SiteNav';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <SiteNav/>
      <Routes>
    <Route path="/" element={<Home/>}></Route>
  </Routes>
    </React.Fragment>
  );
}

export default App;
