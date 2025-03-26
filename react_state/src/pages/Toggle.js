import React, { useState } from 'react';
import '../css/main.css';

function Basic() {
  const [light, setLight] = useState(true);

  const toggleLightMode = () => {
    setLight(!light)
  }

  return (
    <div className={ (light ? "light-bg" : "dark-bg") }>

      <h3>Toggle React `useState` Hook Example</h3>

      <p> { light ? "Light" : "Dark" } Mode </p>
      
      <button onClick={toggleLightMode}>Toggle Light Mode</button>

      
      {/* 
      <br/><br/>
      <div
        className={"toggle-container " + (light ? "toggle-on" : "")}
        onClick={toggleLightMode}
      >
        <div className="toggle-circle"></div>
      </div> 
      */}
     
    </div>
  );
}

export default Basic;