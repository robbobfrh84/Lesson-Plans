import React, { useState } from 'react';

export function Basic() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>

      <h3>Basic React `useState` Hook Example</h3>

      <p>@Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      
    </div>
  );
}