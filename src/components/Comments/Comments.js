import { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Row } from 'react-bootstrap';
import '../style.css'
import * as ReactBootStrap from 'react-bootstrap';
const Comments = () => {
  const [comments, setComments] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then(res => setComments(res.data))
    setLoading(false) 

  }, [])
  return (
    <Container>
      <Col>
        <Row>
          {comments && comments.map(comment => (
            <Card className='card' key={comment.id}>
              <h4>{comment.name}</h4>
              <h4>{comment.email}</h4>
              <p>{comment.body}</p>
            </Card>
          ))}
          
        </Row>
      </Col>
      
      {isLoading ? (comments) : (
        <ReactBootStrap.Spinner animation="border" variant="primary" className='loading' />
      )}
    </Container>

  )
}

export default Comments