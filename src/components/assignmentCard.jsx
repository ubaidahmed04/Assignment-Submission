import React from 'react'
import { Card } from 'react-bootstrap'
import avatar from '../assets/avatar2.png'

function assignmentCard({imagePath,text,icon}) {
    return (
        <div>
            <Card className='rounded-2xl shadow-gray-400  shadow-sm'>
                <Card.Body>
                    <span className='flex justify-between items-center text-md  p-1 cursor-pointer font-semibold text-gray-800'>

                        <img src={imagePath} className='w-20' alt="" />{text}

                        <span className='hover:bg-slate-300 p-3 rounded-full cursor-pointer' >{icon}</span>


                    </span>
                </Card.Body>
            </Card>
        </div>
    )
}

export default assignmentCard