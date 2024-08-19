import React from 'react'
import bgImg2 from '../assets/bgImg.webp';

import avatar from '../assets/avatar2.png'
import assignment from '../assets/assignment.png'
import HomeNavbar from '../components/HomeNavbar'
import AssignmentCard from '../components/assignmentCard'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdAssignment } from "react-icons/md";
import { LuArrowRightLeft } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
const Stream = () => {
    return (
        <div className=' overflow-x-hidden '>
            <HomeNavbar />
            <div className='lg:px-14'>
                <div className="relative w-full h-64 p-2 mt-4 ">
                    <img src={bgImg2} alt="Background" className="opacity-0.8 w-full h-full rounded-3xl object-cover" />
                    <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <h1 className="text-black text-4xl font-bold">Coder Classroom</h1>
                        <h1 className="text-black text-2xl font-bold">Batch-09</h1>
                    </div>
                </div>

                <div className='flex justify-center py-2 '>
                    <div className='px-2  w-1/2 hidden md:block my-4'>
                        <Card className='shadow-md mb-4'>
                            <Card.Header className='text-xl font-bold flex justify-between'> <span>Code </span><span><BsThreeDotsVertical/></span></Card.Header>
                            <Card.Body>
                                <Card.Title className='text-md font-semibold text-center'> 2fCRed# </Card.Title>
                            </Card.Body>
                        </Card>
                   

                </div>
                <div className='w-full px-2 py-4 md:px-5 '>

                <AssignmentCard  imagePath={avatar} text={"Announce something to you class"} icon={<LuArrowRightLeft size={30}/>}/>
                       
                    </div>
                   

                </div>
                <div className='w-full px-2 py-2 md:px-5'>
                    <AssignmentCard  imagePath={assignment} text={"Ubaid Ahmed posted a new assignment"} icon={<BsThreeDotsVertical size={30}/>}/>

                    </div>
            </div>
        </div>
    )
}

export default Stream