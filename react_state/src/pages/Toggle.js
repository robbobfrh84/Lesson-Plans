import React, { useState } from 'react';
import '../css/Toggle.css';

export function Toggle() {
  const [light, setLight] = useState(true);

  const toggleLightMode = () => {
    setLight(!light);
  }

  return (
    <div 
      id="toggle"
      className={ (light ? "light-bg" : "dark-bg") }
    >

      <h3> Toggle React `useState` Hook Example </h3>

      <p> { light ? "Light" : "Dark" } Mode </p>
      
      <button onClick={toggleLightMode}> Toggle Light Mode </button>

    </div>
  );

}