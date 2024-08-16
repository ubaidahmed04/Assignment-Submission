import {Accordion ,Card,Button}from 'react-bootstrap';
import AssignmentCard from '../components/assignmentCard'
import { BsThreeDotsVertical } from "react-icons/bs";
import assignment from '../assets/assignment.png'

function AccordianCard() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <span className='flex justify-between items-center text-md  p-1 cursor-pointer font-semibold text-gray-800'>

                        <img src={assignment} className='w-20' alt="" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,



                    </span>
                </Accordion.Header>
                <Accordion.Body>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
          
        </Accordion>
    );
}

export default AccordianCard;