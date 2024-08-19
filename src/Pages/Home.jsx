import React from 'react'
import Cardui from '../components/cardui'
import './Style.css'
function Home() {
  return (
    <React.Fragment>
      <div className=' mt-[80px] items-center justify-center'>
        <div className='px-[80px] py-[70px] sm:px-[200px] md:px-[240px]'>
          <p>
            Hi! Ubaid Ahmed 👋 <br />
            Welcome to the SMIT Assignment Teacher portal. You can Add your Classroom listed below
          </p>
        </div>
        <div className='  flex flex-wrap  justify-center gap-3 items-center overflow-y-auto '>

          <Cardui />
          <Cardui />
          <Cardui />


        </div>
      </div>
      <span className='pt-[300px] '>

      </span>

    </React.Fragment>
  )
}

export default Home