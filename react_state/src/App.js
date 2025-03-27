import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/App.css';

import { Home } from './pages/Home.js';
import { Basic } from './pages/Basic.js';
import { Toggle } from './pages/Toggle.js';
import { Toggle_Complete } from './pages/Toggle_Complete.js';
import { Settings } from './pages/Settings.js';
import { Settings_Complete } from './pages/Settings_Complete.js';


export const App = () => (
  <div id="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/Toggle_Complete" element={<Toggle_Complete />} />


        <Route path="/settings" element={<Settings  />} />
        <Route path="/settings_complete" element={<Settings_Complete  />} />


        <Route path="/basic" element={<Basic />} />
      </Routes>
    </Router>
  </div>
);