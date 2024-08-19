import React, { useState } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import AssignmentCard from '../components/assignmentCard'
import AssignmentModal from '../components/AssignmentModal'
import { Button } from 'react-bootstrap'
import { FiPlus } from "react-icons/fi";
import Write from '../assets/write.png'
import assignment from '../assets/assignment.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import AccordianCard from '../components/Accordian';

const Classwork = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <HomeNavbar />
            <div className='flex justify-center pt-3'>
              
                 <AssignmentModal showModal={showModal}
                setShowModal={setShowModal} />
            </div>
            <div className='flex justify-center py-4 px-8  w-full '>
                <AccordianCard />
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