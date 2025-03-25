import React, { useEffect, useState } from 'react';

const AddBirdModal = ({ onClose, onAddBird }) => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    description: '',
    habitat: '',
    size: '',
    diet: '',
    image: ''
  })

  useEffect(()=>{
    console.log('formData in useEffect:', formData)
  })

  const handleChange = (e) => {
    console.log('handleChange(e) > e.target:',e.target)
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value,
      x: 4 // * just experimenting with multiple changes. 
    });
    console.log('formData in handleChange:',formData) 
    // * There is a delay in the life cycle here. 
    //   - If we need what the actual value is for some reason, need useEffect
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    // POST the new bird to the backend API
    fetch('http://localhost:3000/api/birds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        onAddBird(data)
        onClose()
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add a Bird</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Species:
            <input type="text" name="species" value={formData.species} onChange={handleChange} required />
          </label>
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </label>
          <label>
            Habitat:
            <input type="text" name="habitat" value={formData.habitat} onChange={handleChange} required />
          </label>
          <label>
            Size:
            <input type="text" name="size" value={formData.size} onChange={handleChange} required />
          </label>
          <label>
            Diet:
            <input type="text" name="diet" value={formData.diet} onChange={handleChange} required />
          </label>
          <label>
            Image URL:
            <input type="text" name="image" value={formData.image} onChange={handleChange} />
          </label>
          <button type="submit">Add Bird</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddBirdModal;
