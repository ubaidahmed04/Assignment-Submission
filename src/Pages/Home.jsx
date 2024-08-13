import React from 'react'
import Navigator from '../components/Navigator'
import Cardui from '../components/cardui'
import './Style.css'
// import Sidebar from '../components/Sidebar'
function Home() {
  return (
    <>
    {/* <Navigator/>
    <Sidebar/> */}
    <div className='all-cards overflow-x-hidden overflow-y-auto mt-[70px]'>
   <Cardui/>
   <Cardui/>
   <Cardui/>
   <Cardui/>
   <Cardui/>
   <Cardui/>
   <Cardui/>
   <Cardui/>
   <Cardui/>
   <Cardui/>
   <Cardui/>

    </div>
    </>
  )
}

export default Home