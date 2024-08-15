import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import { Button } from 'react-bootstrap'
import { FiPlus } from "react-icons/fi";
import assignment from '../assets/write.png'
const Classwork = () => {
    return (
        <div>
            <HomeNavbar />
            <div className='flex justify-center pt-3'>

                <Button className='flex items-center gap-2 rounded-xl  p-3'><FiPlus /> Create</Button>
            </div>
            <div className='flex justify-center self-end  '>

                <span className='border-b-8 mt-[40px]'>
                    <span className='flex justify-center self-end'>
                        <img src={assignment} alt="" />
                    </span>
                    {''}<hr /></span>
            </div>
        </div>
    )
}

export default Classwork