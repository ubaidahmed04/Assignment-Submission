import React from 'react'
import { Card } from 'react-bootstrap'
import './styles.css'
import { Link } from 'react-router-dom'
function cardui() {
  return (
    <div className='main-card  '>
         <Card className='card-content' style={{ width: '18rem', border:"none" }}>
      <Card.Body>
        <Card.Title className=' fw-medium'>Course</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Batch 1</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Card.Link className='text-decoration-none text-sm fw-semibold font-monospace  bg-light text-info shadow  text p-1 rounded'><Link to={'/batch'}>Card Link</Link></Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default cardui