import React, {useState} from 'react';
import {FormGroup, Label, Input, Message, Button} from './FormsStyled';

const AddUserForm = props => {

  const initialFormState = { id: null, plant_type: '', plant_name: '', species: '', name: '', watering_schedule: '', location: ''};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  return (
    <FormGroup onSubmit={event => {
      event.preventDefault();
      if (!user.name) return;
      props.addUser(user)
      setUser(initialFormState)
    }}>
      <Label>Plant Name</Label>
      <Input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <Label>Species</Label>
      <Input type="text" name="species" value={user.species} onChange={handleInputChange} />
      <Label>Watering Schedule</Label>
      <Input type="text" name="watering_schedule" value={user.watering_schedule} onChange={handleInputChange} />
      <Label>Location</Label>
      <Input type="text" name="location" value={user.location} onChange={handleInputChange} />
      <Button>Add Plant</Button>
    </FormGroup>
  )
}

export default AddUserForm;

// 401 Error -- Not authenticated with backend???
// const AddUserForm = props => {
//
//   const initialFormState = { id: null, type: '', name: '', waterSchedule: '', location: ''};
//   const [user, setUser] = useState(initialFormState);
//
//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value })
//   }
//
//   const handleSubmit = event => {
//     event.preventDefault();
//
//     axios.post(`https://lambda-water-my-plants.herokuapp.com/api/plants`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }
//
//   return (
//     <FormGroup onSubmit={handleSubmit}>
//       <Label>Plant Name</Label>
//       <Input type="text" name="name" value={user.name} onChange={handleInputChange} />
//       <Label>Type</Label>
//       <Input type="text" name="species" value={user.type} onChange={handleInputChange} />
//       <Label>Watering Schedule</Label>
//       <Input type="text" name="watering_schedule" value={user.waterSchedule} onChange={handleInputChange} />
//       <Label>Location</Label>
//       <Input type="text" name="location" value={user.location} onChange={handleInputChange} />
//       <Button>Add Plant</Button>
//     </FormGroup>
//   )
// }
//
// export default AddUserForm;
