import React from 'react'
import bannerImg from '../assets/card-bg.jpg'
import avatar from '../assets/avatar2.png'
import HomeNavbar from '../components/HomeNavbar'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Stream = () => {
    return (
        <div className=' overflow-x-hidden'>
            <HomeNavbar />
            <div className="relative w-full h-64 p-2  ">
                <img src={bannerImg} alt="Background" className="w-full h-full object-fill" />
                <div className="absolute inset-0 p-4 flex flex-col items-start justify-end">
                    <h1 className="text-black text-4xl font-bold">Coder Classroom</h1>
                    <h1 className="text-black text-2xl font-bold">Batch-09</h1>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='px-2  w-1/2 hidden md:block'>
                    <Card border="primary" className='shadow-md mb-4'>
                        <Card.Header className='text-xl font-bold'> Class Code</Card.Header>
                        <Card.Body>
                            <Card.Title className='text-md font-semibold'> Card Title </Card.Title>
                            <Button className='text-md font-bold justify-end text-custom-blue bg-slate-300'>View all</Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary" className='shadow-md'>
                        <Card.Header className='text-xl font-bold'> Class Code</Card.Header>
                        <Card.Body>
                            <Card.Title className='text-md font-semibold'> Card Title </Card.Title>
                            <Button className='text-md font-bold justify-end text-custom-blue bg-slate-300'>View all</Button>
                        </Card.Body>
                    </Card>

                </div>
                <div className='w-full px-2 md:px-5'>

                    <Card className='bg-gray-500 shadow-md '>
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
                    <Card>
                        {/* <Card.Header>Quote</Card.Header> */}
                        <Card.Body>
                            <span className='flex gap-1'>
                           <img src={bannerImg} className='w-40 h-24 '  alt="" />

                           <span className='text-md  p-1 font-semibold text-gray-800'>
                           This is where you can talk to your class
                           Use the stream to share announcements, post assignments and respond to student questions
                           <br />
                           <Button className='text-custom-blue bg-slate-300'>Site Settings</Button>
                           </span>
                        
                            </span>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Stream