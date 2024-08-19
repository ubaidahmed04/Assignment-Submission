import { Accordion, Card, Button } from 'react-bootstrap';
import AssignmentCard from '../components/assignmentCard'
import { BsThreeDotsVertical } from "react-icons/bs";
import assignment from '../assets/assignment.png'

function AccordianCard() {
    return (
        <Accordion  className='w-1/2 flex  flex-col justify-center '>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Card.Header>
                        <span className='flex justify-between items-center text-md  p-1 cursor-pointer font-semibold text-gray-800'>
                            <img src={assignment} className='w-20' alt="" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </span>
                    </Card.Header>
                </Accordion.Header>
                <Accordion.Body>
                    <Card border='none'>
                        <Card.Body>
                            <Card.Text className='font-light font'>14-08-2024</Card.Text>
                            <span className='flex w-full  gap-4'>

                                <Card.Text className=' border-r-2'>
                                    SMIT  Classroom helps educators create engaging learning experiences they can personalize, manage, and measure. Part of Google Workspace for Education, it empowers educators to enhance their impact and prepare students for the future.
                                </Card.Text>
                                <span className='flex flex-row gap-5 items-center justify-center'>
                                    <span className='flex border-r-2 px-2 flex-col gap-5 items-center justify-center'>

                                        <span>0</span>
                                        <span>Handed</span>
                                    </span>
                                    <span className='flex  flex-col gap-5 px-2 items-center justify-center'>

                                        <span>0</span>
                                        <span>Assigned</span>
                                    </span>
                                </span>
                            </span>

                            <Button variant="outline-secondary" className='my-2'>View Instruction</Button>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default AccordianCard;