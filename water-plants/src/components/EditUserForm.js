import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  };

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
    <label>Name</label>
    <input type="text" name="name" value={user.name} onChange={handleInputChange} />
    <label>Species</label>
    <input type="text" name="species" value={user.species} onChange={handleInputChange} />
    <label>Watering Schedule</label>
    <input type="text" name="watering_schedule" value={user.watering_schedule} onChange={handleInputChange} />
    <label>Location</label>
    <input type="text" name="location" value={user.location} onChange={handleInputChange} />
    <button>Update Exercise</button>
    <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditUserForm;
