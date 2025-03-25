import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Noimage from './../images/noimage.jpg'

const BirdDetails = ({ birds }) => {
  const { id } = useParams() 
  // * This uses the url endpoint params. It knows what the keyname is because it's declared in `<Route path="/birds/:id" element={<BirdDetails />} />` in App.js
  // * However, it maybe needed at some point in a larger app to do individual requests here. 
  //   - We're not actually ever using /api/bird/:id to the server. Because /api/birds gets us all the data we need. 

  const history = useHistory() // * for the back button. 

  const bird = birds.find(b => b._id === id)

  if (!bird) {
    return <div>Bird not found</div>
  }

  return (
    <div className="bird-details">
      <h2>{bird.name}</h2>
      <img className="bird-details-image"
        src={bird.image || Noimage}
        alt={bird.name}
      />
      <p><strong>Species:</strong> {bird.species}</p>
      <p><strong>Description:</strong> {bird.description}</p>
      <p><strong>Habitat:</strong> {bird.habitat}</p>
      <p><strong>Size:</strong> {bird.size}</p>
      <p><strong>Diet:</strong> {bird.diet}</p>
      <button onClick={() => history.push('/')}>Return to home page</button>
    </div>
  );
};

export default BirdDetails
