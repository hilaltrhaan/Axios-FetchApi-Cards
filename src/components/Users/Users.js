import { useEffect, useState } from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'




const Users = () => {

  const [users, setUsers] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      return res.json();
    }).then(data => setUsers(data))

  }, [])


  return (
    <>
      <Container>
        <Col>
          <Row>

            {users && users.map(user => (
              <Card className='card' key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
              </Card>

            ))}
          </Row>
        </Col>
      </Container>



    </>
  )
}

export default Users;