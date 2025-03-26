import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/App.css';

import { Home } from './pages/Home.js';
import { Basic } from './pages/Basic.js';
import { Toggle } from './pages/Toggle.js';
import { Toggle_Styled } from './pages/Toggle_Styled.js';


export const App = () => (
  <div id="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/basic" element={<Basic />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/toggle_styled" element={<Toggle_Styled />} />
      </Routes>
    </Router>
  </div>
);