import React from 'react';
import '../css/Toggle_Styled.css';

export function Toggle() {
  let light = true;

  const toggleLightMode = () => {
    light = false;
  }

  return (
    <div id="toggle_styled"
      className={ (light ? "light-bg" : "dark-bg") }
    >

      <h1> ☀️ Light Dark Mode Toggle 🌙 </h1>

      <h2> Mode: { light ? "Light" : "Dark" } </h2>
      
      <div
        className={"toggle-container " + (light ? "toggle-on" : "")}
        onClick={toggleLightMode}
      >
        <div className="toggle-circle"></div>
      </div> 
     
    </div>
  );
}