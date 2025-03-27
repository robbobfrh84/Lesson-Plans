import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';


export const Home = () => (
  <div id="home">

    <h1>React State Examples:</h1>

    <nav>
      <h3><Link to="/toggle">Toggle</Link></h3>
      <h3><Link to="/Toggle_Complete">Toggle (complete)</Link></h3>
      
      <br/>
      <h3><Link to="/settings">Setting</Link></h3>
      <h3><Link to="/settings_complete">Setting (Complete)</Link></h3>


      <br/><br/>
      <h4>More Examples:</h4>
      <div>
        <h4><Link to="/basic">Basic Counter</Link></h4>
        <h3><Link to="/toggle_basic">Basic Toggle State</Link></h3>
      </div>
    </nav>

  </div>
);


/*  *** Developer Notes ****

Some React Components end with `export default ComponentName`
- Using this style allows for `import Home from './pages/Home.js';`       in App.js
- Rather than >               `import { Home } from './pages/Home.js';`   in App.js
- But don't use `export` above for functions

*/