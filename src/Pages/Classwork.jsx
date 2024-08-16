import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import AssignmentCard from '../components/assignmentCard'
import { Button } from 'react-bootstrap'
import { FiPlus } from "react-icons/fi";
import Write from '../assets/write.png'
import assignment from '../assets/assignment.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import AccordianCard from '../components/Accordian';

const Classwork = () => {
    return (
        <div>
            <HomeNavbar />
            <div className='flex justify-center pt-3'>
                <Button className='flex items-center gap-2 rounded-xl  p-3'><FiPlus /> Create</Button>
            </div>
            <div className='py-4 px-8'>
                <AccordianCard/>
            </div>
            <div className='flex justify-center self-end  '>

                <span className='border-b-8 mt-[40px]'>
                    <span className='flex justify-center self-end'>
                        <img src={Write} alt="" />
                    </span>
                    <hr />
                    </span>
            </div>
        </div>
    )
}

export default Classwork