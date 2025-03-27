import React, { useState } from 'react';
import '../css/Toggle_Styled.css';

export function Settings() {
  const [light, setLight] = useState(true);

  const toggleLightMode = () => {
    setLight(!light);
  }

  return (
    <div 
      id="toggle_styled"
      className={ (light ? "light-bg" : "dark-bg") }
    >

      <h1> Messin' with the `useState` React Hook </h1>

      <div
        className={"toggle-container " + (light ? "toggle-on" : "")}
        onClick={toggleLightMode}
      >
        <div className="toggle-circle"></div>
      </div> 
     
    </div>
  );
}

/* Docs: https://react.dev/reference/react/useState */