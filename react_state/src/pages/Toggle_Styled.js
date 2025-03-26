import React, { useState } from 'react';
import '../css/Toggle_Styled.css';

export function Toggle_Styled() {
  const [light, setLight] = useState(true);

  const toggleLightMode = () => {
    setLight(!light);
  }

  return (
    <div 
      id="toggle_styled"
      className={ (light ? "light-bg" : "dark-bg") }
    >

      <h3>Toggle React `useState` Hook Example</h3>

      <p> { light ? "Light" : "Dark" } Mode </p>
      
      <div
        className={"toggle-container " + (light ? "toggle-on" : "")}
        onClick={toggleLightMode}
      >
        <div className="toggle-circle"></div>
      </div> 
     
    </div>
  );
}