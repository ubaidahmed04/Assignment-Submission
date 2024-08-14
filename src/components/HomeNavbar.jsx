import React from 'react'
import Nav from 'react-bootstrap/Nav';

const HomeNavbar = () => {
  return (
    <>
     <Nav  variant="underline "defaultActiveKey="/stream" className=' mt-[70px] bg-gray-400  overflow-y-auto' justify  >
      <Nav.Item>
        <Nav.Link eventKey="/stream" className='text-custom-blue font-bold Nunito' >Stream </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-custom-blue font-bold Nunito'>Classwork</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-custom-blue font-bold Nunito'>People</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="mark" className='text-custom-blue font-bold Nunito' disabled>
          Marks
        </Nav.Link>
      </Nav.Item>
    </Nav>   
    </>
  )
}

export default HomeNavbar