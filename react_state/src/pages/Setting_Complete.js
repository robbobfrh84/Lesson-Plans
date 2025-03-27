import React, { useState } from 'react';
import '../css/Toggle_Styled.css';

export function Setting_Complete() {
  const [light, setLight] = useState(true);

  const toggleLightMode = () => {
    setLight(!light);
  }

  return (
    <div 
      id="toggle_styled"
      className={ (light ? "light-bg" : "dark-bg") }
    >

      <h1> Settings only </h1>

      <p>"This Web App is all About Settings! No content needed " - Settings Only CEO</p>
      

      <hr />
      NOTE: Section should be transformed into modal
  
      <div
        className={"toggle-container " + (light ? "toggle-on" : "")}
        onClick={toggleLightMode}
      >
        <div className="toggle-circle"></div>
      </div> 
     
    </div>
  );
}