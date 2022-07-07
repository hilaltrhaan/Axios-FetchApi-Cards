import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Row } from 'react-bootstrap';
import '../style.css'
import * as ReactBootStrap from 'react-bootstrap';


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data))
    setLoading(false) 


  }, [])

  return (
    <Container>
    
      {isLoading ? <ReactBootStrap.Spinner animation="border" variant="success" className='loading' /> :   <Col>
        <Row>

          {posts && posts.map(post => (
            <Card className='card' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Card>

          ))}
        </Row>
      </Col>
       
      }
    </Container>
  )
}

export default Posts