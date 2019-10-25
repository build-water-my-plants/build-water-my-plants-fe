import React from 'react';
import {Table, TableRow, TableData, UserButton, ButtonDiv, ImgLogo, TextDiv} from './FormsStyled';

const UserTable = props => (
  <Table>
    {props.users.length > 0 ? (
        props.users.map(user => (

          <TableRow key={user.id}>
            <ImgLogo src={user.pic} alt='I am an image' ></ImgLogo>
            <TextDiv>
              <TableData>Plant Name: {user.name}</TableData>
              <TableData>Species: {user.species}</TableData>
              <TableData>Watering Schedule: Every {user.watering_schedule} Days</TableData>
              <TableData>Location: {user.location}</TableData>
              <ButtonDiv>
                <UserButton onClick={() => {props.editRow(user)}} className="button muted-button">Edit</UserButton>
                <UserButton onClick={() => props.deleteUser(user.id)} className="button muted-button">Delete</UserButton>
              </ButtonDiv>
            </TextDiv>
          </TableRow>
        ))
      ) : (
        <TableData>No users</TableData>
    )}
  </Table>
)

export default UserTable;
