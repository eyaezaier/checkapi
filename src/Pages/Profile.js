import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
  const {id} = useParams()

  const [user, setUser] = useState([])

const Navigate = useNavigate()
  useEffect(() => {
    axios 
    .get(`https://jdonplaceholder.typicode.com/users?id=$(id)`)
    .then((res) => setUser(res.data[0]))
    .catch((err) => console.log(err))
}, [id])

  return (
    <div>
     <Card style={{width: "18rem"}} >
      <Card.Img 
      variant='top'
      src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
     />

     <Card.Body>
     <Card.Title>{user.name}</Card.Title>
     <Card.Text>{user.userName} </Card.Text>
     <Card.Text> {user.email}</Card.Text>

     <Button onClick={() => Navigate(-1)} variant="primary"> back </Button>
      </Card.Body>
    </Card>

    </div>
  );
  };
export default Profile