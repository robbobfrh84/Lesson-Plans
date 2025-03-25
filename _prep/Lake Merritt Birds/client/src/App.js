import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BirdList from './components/BirdList'
import BirdDetails from './components/BirdDetails'
import AddBirdModal from './components/AddBirdModal'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [birds, setBirds] = useState([])
  const [showModal, setShowModal] = useState(false)

  // Fetch birds from the backend API
  useEffect(() => {
    fetch('http://localhost:3000/api/birds')
      .then(res => res.json())
      .then(data => setBirds(data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    console.log(`Just to test useEffect, count is: ${count}`)
    setCount2(count2+1)
  }, [count]) // * only alows once for count being changed. Actually not sure what's happening with [] vs [count], vs not having an array at all. Some cause infinite loops


  const handleAddBird = (newBird) => {
    setBirds([...birds, newBird])
  };

  return (
    <Router>
      <div className="container">
        <h1>Lake Merritt Birds</h1>

        <Switch>


          <Route exact path="/"> 

            <button className="add-bird-button" onClick={() => setShowModal(true)}>
              Add a Bird
            </button>

            <BirdList birds={birds} />
            
            {showModal && (
              <AddBirdModal 
                onClose={() => setShowModal(false)} 
                onAddBird={handleAddBird} 
              />
            )}

          </Route>


          <Route path="/bird/:id" // * not using 'exact' here because of dynamic endpoint. 
            render={(props) => <BirdDetails {...props} birds={birds} 
          />} />
        

        </Switch>

        <button onClick={()=>setCount(count+1)}> Test Count </button>
        <div>count: {count}</div>
        <div>count2: {count}</div>
      </div>
    </Router>
  );
}

export default App;
