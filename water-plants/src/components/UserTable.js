import React from 'react';

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Plant Name</th>
        <th>Species</th>
        <th>Watering Schedule</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.species}</td>
            <td>Every {user.watering_schedule} Days</td>
            <td>{user.location}</td>
            <td>
              <button onClick={() => {props.editRow(user)}} className="button muted-button">Edit</button>
              <button onClick={() => props.deleteUser(user.id)} className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;
