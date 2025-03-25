import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);


/*  *** Developer Notes ****

// React 17 CODE...
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

*/
