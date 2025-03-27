import React, { useState } from 'react';
import '../css/Toggle_Styled.css';

export function Toggle_Complete() {
  const [light, setLight] = useState(true);

  const toggleLightMode = () => {
    setLight(!light);
  }

  return (
    <div 
      id="toggle_styled"
      className={ (light ? "light-bg" : "dark-bg") }
    >

      <h1> ☀️ Light Dark Mode Toggle 🌙 </h1>

      <h3> Mode: { light ? "Light" : "Dark" } </h3>
      
      <div
        className={"toggle-container " + (light ? "toggle-on" : "")}
        onClick={toggleLightMode}
      >
        <div className="toggle-circle"></div>
      </div> 
     
    </div>
  );
}