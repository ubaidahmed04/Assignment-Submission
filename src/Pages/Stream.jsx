import React from 'react'
import bannerImg from '../assets/card-bg.jpg'
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
                    <img src={bannerImg} alt="Background" className="opacity-.5 w-full h-full rounded-3xl object-fill" />
                    <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                        <h1 className="text-gray-100 text-4xl font-bold">Coder Classroom</h1>
                        <h1 className="text-gray-100 text-2xl font-bold">Batch-09</h1>
                    </div>
                </div>

                <div className='flex justify-center py-2 '>
                    <div className='px-2  w-1/2 hidden md:block my-4'>
                        <Card border="primary" className='shadow-md mb-4'>
                            <Card.Header className='text-xl font-bold flex justify-between'> <span>Code </span><span><BsThreeDotsVertical/></span></Card.Header>
                            <Card.Body>
                                <Card.Title className='text-md font-semibold'> Card Title </Card.Title>
                                <Button className='text-md font-bold justify-end text-custom-blue bg-slate-300'>View all</Button>
                            </Card.Body>
                        </Card>
                        {/* <Card border="primary" className='shadow-md'>
                            <Card.Header className='text-xl font-bold'> Upcoming</Card.Header>
                            <Card.Body>
                                <Card.Title className='text-md font-semibold'> Card Title </Card.Title>
                                <Button className='text-md font-bold justify-end text-custom-blue bg-slate-300'>View all</Button>
                            </Card.Body>
                        </Card> */}

                </div>
                <div className='w-full px-2 md:px-5'>

                    <Card className='bg-[#B2B7C2] shadow-md '>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <span className='flex gap-5 item-center'>

                                <Card.Title><img src={avatar} className='w-20' /></Card.Title>
                                <Card.Title>Special title treatment</Card.Title>
                            </span>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to={'/batch'}>
                            <Button className='text-custom-blue bg-slate-300'>Add Assignment</Button>
                            </Link>
                        </Card.Body>
                    </Card> 
                       
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