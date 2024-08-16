import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import { AiOutlineUserAdd } from "react-icons/ai";
import avatarUrl from '../assets/avatar2.png'
import document from '../assets/cat.png'
const InvitePeople = () => {
  return (
    <>
      <HomeNavbar />
      <div>
        <div className='flex justify-between  flex-col mx-20 my-5   '>

          <span className='bg-slate-300 rounded-xl min-w-1/2 flex flex-row py-4 px-4 justify-between'>
          <span className='font-bold tracking-wider text-xl'>Teachers</span>
          <span ><AiOutlineUserAdd size={30}/></span>
          </span>

          <span className="flex item-center  h-20 py-3 gap-3">
            <hr />
              <img
                src={avatarUrl}
                alt="profile's Avatar item-center "
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-lg font-bold  text-center  text-black ml-1">Ubaid</span>
            </span>
            <span className='bg-slate-300 rounded-xl min-w-1/2 flex flex-row py-4 px-4 justify-between'>
          <span className='font-bold tracking-wider text-xl'>Students</span>
          <span ><AiOutlineUserAdd size={30}/></span>
          </span>

        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={document} alt="Add teachers" 
                className="w-60 h-60 rounded-lg object-cover"

          />
          <span className='text-md text-base text-center'>Add teachers and students to this class</span>
        </div>
       
      </div>
    </>
  )
}

export default InvitePeople