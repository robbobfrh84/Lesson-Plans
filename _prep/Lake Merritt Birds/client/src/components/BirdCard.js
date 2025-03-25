import React from 'react'
import { useHistory } from 'react-router-dom'
import Noimage from './../images/noimage.jpg'


const BirdCard = ({ bird }) => {
  const history = useHistory()

  const handleClick = () => {
    // * this changes the page to bird, with the id so... go back to APP.js
    history.push(`/bird/${bird._id}`);
  };

  return (
    <div className="bird-card" onClick={handleClick}>
      <div className="bird-image-container">
        <img
          src={ bird.image || Noimage }
          alt={ bird.name }
          className="bird-image"
        />
        <div className="bird-name-overlay">{ bird.name }</div>
      </div>
    </div>
  );
};

export default BirdCard;
