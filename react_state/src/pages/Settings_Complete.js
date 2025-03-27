import React, { useState } from 'react';
import '../css/Setting_Complete.css';

export function Settings_Complete() {
  const [light, setLight] = useState(true);
  const [aString, setaString] = useState("Hello");
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    string: "HI",
    number: 49,
    boolean: true
  })


  const toggleLightMode = () => {
    setLight(!light);
  }

  const changeString = (e) => {
    setaString(e.target.value);
  }

  return (
    <div 
      id="toggle_styled"
      className={ (light ? "light-bg" : "dark-bg") }
    >

      <h1> 🪝 Messin' with the `useState` React Hook </h1>


      <div
        className={"toggle-container " + (light ? "toggle-on" : "")}
        onClick={toggleLightMode}
      >       
        <div className="toggle-circle"></div>
      </div> 


      <button onClick={ () => setCount(count+1) }>Count</button> <br/><br/>
      <h3> "count" Value: {count} </h3> <br/>
      

      <input
        value={aString}
        onChange={changeString}
      />  <br/><br/>
      <h3> "aString" Value: {aString} </h3> <br/><br/>

        
      <h3>Object Values...</h3>
      <label>
        obj.string: <input
          value={obj.string}
          onChange={e => {
            setObj({
              ...obj,
              string: e.target.value
            });
          }}
        />
        <br/><br/>
        <button onClick={ () => setObj({...obj, number: obj.number + 1}) }>
          Count Obj.number
        </button> <br/><br/>

        <button onClick={ () => setObj({...obj, boolean: !obj.boolean})}>Toggle obj.boolean</button>
      </label>
      <ul>
        <p>string: {obj.string}</p>
        <p>number: {obj.number}</p>
        <p>boolean: {obj.boolean ? "true" : "false"}</p>
      </ul>

     
    </div>
  );
}

/* Docs: https://react.dev/reference/react/useState */


/* Container and Presentation Components Example */
/*

import React from 'react';

function CounterDisplay({ count, onIncrement }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  return <TodoList todos={todos} onAddTodo={addTodo} />;
}

export default TodoContainer;

export default CounterDisplay;


*/