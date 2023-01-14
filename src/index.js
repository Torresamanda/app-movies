import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global.css';


import Home from './Pages/Home/index';
import Random from './Pages/Random/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/random" element={<Random/>}/>
    </Routes>
  </BrowserRouter>
);
