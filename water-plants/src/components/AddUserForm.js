import React, {useState} from 'react';

const AddUserForm = props => {

  const initialFormState = { id: null, plant_type: '', plant_name: '', species: '', name: '', watering_schedule: '', location: ''};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  return (
    <form onSubmit={event => {
      event.preventDefault();
      // || !user.lifted || !user.sets || !user.reps
      if (!user.name) return;
      props.addUser(user)
      setUser(initialFormState)
    }}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Species</label>
      <input type="text" name="species" value={user.species} onChange={handleInputChange} />
      <label>Watering Schedule</label>
      <input type="text" name="watering_schedule" value={user.watering_schedule} onChange={handleInputChange} />
      <label>Location</label>
      <input type="text" name="location" value={user.location} onChange={handleInputChange} />
      <button>Add Plant</button>
    </form>
  )
}

export default AddUserForm;
