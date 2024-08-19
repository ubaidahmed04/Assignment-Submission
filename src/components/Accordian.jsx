import { Accordion, Card, Button } from 'react-bootstrap';
import AssignmentCard from '../components/assignmentCard'
import { BsThreeDotsVertical } from "react-icons/bs";
import assignment from '../assets/assignment.png'

function AccordianCard() {
    return (
        <Accordion className="min-w-full px-4 sm:px-10 ">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Card.Header>
              <span className="flex flex-col md:flex-row justify-between  items-center text-md p-1 cursor-pointer font-semibold text-gray-800">
                <img src={assignment} className="w-20 hidden sm:block" alt="" />
                <span className="mt-2 md:mt-0 text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </span>
              </span>
            </Card.Header>
          </Accordion.Header>
          <Accordion.Body>
            <Card border="none">
              <Card.Body>
                <Card.Text className="font-light">14-08-2024</Card.Text>
                <div className="flex flex-col md:flex-row w-full gap-4">
                  <Card.Text className="md:border-r-2 flex-1">
                    SMIT Classroom helps educators create engaging learning experiences they can personalize, manage, and measure. Part of Google Workspace for Education, it empowers educators to enhance their impact and prepare students for the future.
                  </Card.Text>
                  <div className="flex flex-row gap-5 items-center justify-center mt-4 md:mt-0">
                    <div className="flex border-r-2 px-2 flex-col gap-1 items-center justify-center">
                      <span>0</span>
                      <span>Handed</span>
                    </div>
                    <div className="flex flex-col gap-1 px-2 items-center justify-center">
                      <span>0</span>
                      <span>Assigned</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline-secondary" className="mt-4 md:mt-2">
                  View Instruction
                </Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      
      
    );
}

export default AccordianCard;