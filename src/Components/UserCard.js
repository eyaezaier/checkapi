import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
const UserCard = ({user}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.userName} </Card.Text>
        <Card.Text> {user.email}</Card.Text>

        <Button onClick={() => Navigate (`/profile/${user.id}`)} variant="primary"> Profile </Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default UserCard