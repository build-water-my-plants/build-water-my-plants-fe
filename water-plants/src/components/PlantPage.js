import React, {useState, useEffect} from "react";
import UserTable from './UserTable.js';
import AddUserForm from './AddUserForm.js';
import EditUserForm from './EditUserForm.js';

export default function PlantCard(props) {

  // This is some dummy data representing some plant cards
  // THIS WILL CHANGE

  const usersData = [
    { id: 1, species: 'Rose', name: 'Jen', watering_schedule: '3', location: 'Garden'},
    {id: 2, species: 'Sunflower', name: 'Kevin', watering_schedule: '2', location: 'Garden'},
    {id: 3, species: 'Succulent', name: 'Jill', watering_schedule: '7', location: 'Shed'},
    {id: 4, species: 'Cactus', name: 'Brian', watering_schedule: '4', location: 'Kitchen'},
    {id: 5, species: 'Tulip', name: 'Petunia', watering_schedule: '1', location: 'Kitchen'},
    {id: 6, species: 'Cactus', name: 'Kelly', watering_schedule: '4', location: 'Kitchen'},
    {id: 7, species: 'Tulip', name: 'Walt', watering_schedule: '1', location: 'Kitchen'},
    {id: 8, species: 'Tulip', name: 'Walt', watering_schedule: '3', location: 'Kitchen'},
  ];

  const initialFormState = { id: null, plant_type: '', plant_name: '', species: '', name: '', watering_schedule: '', location: ''};

  // Here I want to set any of my states.
  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState(initialFormState);

  // Crud Operation
  const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

  const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, plant_type: user.plant_type, plant_name: user.plant_name, species: user.species, watering_schedule: user.watering_schedule, location: user.location })
	}

  return(
    <div className="container">
      <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <div className='workoutform'>
            <h2>Edit Plant</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add Plant</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>View Plant</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )

}
