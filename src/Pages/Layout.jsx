import React from 'react'
import Navigator from '../components/Navigator'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen w-full   '>
        {/* <main className=" w-[calc(100vw-24px)] md:w-[calc(100vw-280px)]"> */}
          <Navigator />
          <Outlet />
        {/* </main> */}
    </div>
  )
}

export default Layout