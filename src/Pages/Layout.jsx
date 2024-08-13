import React from 'react'
// import Sidebar from '../components/Sidebar'
import Navigator from '../components/Navigator'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen w-full bg-blue-100 p-2 flex'>
        {/* <Sidebar/> */}
        <main className=" w-[calc(100vw-24px)] md:w-[calc(100vw-280px)]">
          <Navigator />
          <Outlet />
        </main>
    </div>
  )
}

export default Layout