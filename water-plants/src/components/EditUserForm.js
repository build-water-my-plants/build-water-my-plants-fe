import React, { useState, useEffect } from 'react';
import {FormGroup, Label, Input, Button} from './FormsStyled';

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
    <FormGroup
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
    <Label>Plant Name</Label>
    <Input type="text" name="name" value={user.name} onChange={handleInputChange} />
    <Label>Species</Label>
    <Input type="text" name="species" value={user.species} onChange={handleInputChange} />
    <Label>Watering Schedule</Label>
    <Input type="text" name="watering_schedule" value={user.watering_schedule} onChange={handleInputChange} />
    <Label>Location</Label>
    <Input type="text" name="location" value={user.location} onChange={handleInputChange} />
    <Button>Update Plant</Button>
    <Button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</Button>
    </FormGroup>
  )
}

export default EditUserForm;
