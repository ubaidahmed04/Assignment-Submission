import React from 'react'
import { Card } from 'react-bootstrap'

function cardassign() {
  return (
    <Card style={{ width: '18rem',marginTop:'50px' }}>
    <Card.Body>
      <Card.Title>Total Students  :  300</Card.Title> 
      <Card.Title className="mb-2 text-muted">Assignment Submit</Card.Title>
      <Card.Text className="mb-2 text-muted">140 Students</Card.Text>
      <Card.Title className="mb-2 text-muted">Assignment Not Submit</Card.Title>
      <Card.Text className="mb-2 text-muted">160 Students</Card.Text>
     
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default cardassign