import { useEffect, useState } from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import * as ReactBootStrap from 'react-bootstrap';

const Users = () => {

  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      return res.json();
    }).then(data => setUsers(data))
    setLoading(false) 

  }, [])


  return (
      <Container>
          {isLoading ? <ReactBootStrap.Spinner animation="border" variant="dark" className='loading' />: 
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
          }
         
       
      </Container>



    
  )
}

export default Users;