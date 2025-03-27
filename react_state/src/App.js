import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/App.css';

import { Home } from './pages/Home.js';
import { Basic } from './pages/Basic.js';
import { Toggle } from './pages/Toggle.js';
import { Toggle_Complete } from './pages/Toggle_Complete.js';
import { Setting_Complete } from './pages/Setting_Complete.js';


export const App = () => (
  <div id="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/basic" element={<Basic />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/Toggle_Complete" element={<Toggle_Complete />} />

        <Route path="/setting_complete" element={<Setting_Complete  />} />
      </Routes>
    </Router>
  </div>
);