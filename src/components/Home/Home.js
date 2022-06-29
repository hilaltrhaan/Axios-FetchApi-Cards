import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Col, Row } from 'react-bootstrap';
import '../style.css'
function Home() {
  return (
    <>
      <Container className='position-absolute top-50 start-50 translate-middle'>
        <Row>
          <Col>
            <Card>
              <Link to='users' className='text-decoration-none text-black fw-bolder p-2'> Users</Link>
            </Card>
          </Col>

          <Col>
            <Card>
              <Link to='todos' className='text-decoration-none text-danger fw-bolder p-2'> Todos</Link>
            </Card>
          </Col>

          <Col>
            <Card>
              <Link to='posts' className='text-decoration-none text-success fw-bolder p-2'> Posts</Link>
            </Card>
          </Col>

          <Col>
            <Card>
              <Link to='comments' className='text-decoration-none text-warning fw-bolder p-2'>Comments</Link>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Home