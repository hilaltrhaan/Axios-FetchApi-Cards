import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Row } from 'react-bootstrap';
import '../style.css'
import * as ReactBootStrap from 'react-bootstrap';

const Todos = () => {
  const [todos, setTodos] = useState()
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        return res.json();
      }).then(data => setTodos(data))
    setLoading(false) 
  }, [])

  return (
    <Container>
      <Col>
        <Row>
          {todos && todos.map(todo => (
            <Card className='card' key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.id}</p>
            </Card>
          ))}
        </Row>
      </Col>
      {isLoading ? (todos) : (
        <ReactBootStrap.Spinner animation="border" variant="danger" className='loading' />
      )}
    </Container>
  )
}

export default Todos