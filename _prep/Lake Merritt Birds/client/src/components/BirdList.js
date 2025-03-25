import React from 'react'
import BirdCard from './BirdCard'

const BirdList = ({ birds }) => {
  return (
    <div className="bird-list">
      { 
        birds.map( bird => (
          // * Often, you'll get an error if no key...
          <BirdCard key={bird._id} bird={bird} />
        )) 
      }
    </div>
  )
}

export default BirdList
