import React, { useRef, useState } from 'react';
import { Navbar, Nav, Container, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";
import CreateClassModal from '../components/CreateClassModal';
import clickOutside from './clickOutside';
import avatarUrl from '../assets/avatar2.png'
import classroomLogo from '../assets/classroomlogo.png'
import { Link } from 'react-router-dom';

function Navigator() {
  const [modalShow, setModalShow] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);
  clickOutside(popoverRef, () => setShowPopover(false));

  const handleToggle = () => {
    setShowPopover(!showPopover);
  };

  const handleOptionClick = () => {
    setShowPopover(false);
    setModalShow(true);
  };

  return (
    <Navbar expand="lg" className="bg-white shadow-md fixed top-0 w-full z-[9999]">
      <Container>
        <Navbar.Brand href="#home">
          <div className="mr-4 cursor-pointer py-1.5 lg:ml-2 agustina  capitalize">
            <Link to={'/home'}>
              <img src={classroomLogo} className='w-28 object-cover' alt="" />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav flex  flex-wrap-reverse" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="ms-auto gap-3 flex items-center">
          <div ref={popoverRef} className='' style={{ zIndex: 1051 }}>
  <OverlayTrigger
    trigger="click"
    show={showPopover}
    onToggle={handleToggle}
    overlay={
      <Popover id="popover-basic" style={{ zIndex: 1051 }}>
        <Popover.Body>
          <ul className='w-full h-30 text-center'>
            <li
              className='border-b-2 w-full hover:bg-gray-300 p-3 hover:rounded-md cursor-pointer'
              onClick={handleOptionClick}
            >
              Create Class
            </li>
            <li
              className='border-b-2 w-full hover:bg-gray-300 p-3 hover:rounded-md cursor-pointer'
            >
              Join Class
            </li>
          </ul>
        </Popover.Body>
      </Popover>
    }
    placement="bottom"
  >
    <Button variant="light" onClick={handleToggle}>
      <FaPlus className='cursor-pointer' size={20} />
    </Button>
  </OverlayTrigger>
</div>

            <div className="flex items-center mr-4">
              <img
                src={avatarUrl}
                alt="profile's Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-mono text-black ml-2">Ubaid</span>
            </div>
            <Link to={'/'} className=" text-lg font-semibold">
            <button className='bg-red-400 flex  text-white font-semibold py-2 px-2 items-center rounded-lg transform transition-all duration-300 ease-in-out hover:bg-red-500 hover:scale-90 hover:shadow-lg'>
              <div className="w-6">
                <svg viewBox="0 0 512 512" className="fill-current text-black">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32z"></path>
                </svg>
              </div>
              <div className="ml-2 opacity-1 hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-in-out text-black">
               
                  Logout
              </div>
            </button>
                </Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
      <CreateClassModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Navbar>
  );
}

export default Navigator;
