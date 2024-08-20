import React, { useRef, useState } from 'react';
import { Navbar, Nav, Container, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";
import CreateClassModal from '../components/CreateClassModal';
import clickOutside from './clickOutside';
import avatarUrl from '../assets/avatar2.png'
import classroomLogo from '../assets/classroomlogo.png'
import { Link } from 'react-router-dom';
import Logoutbtn from './Logoutbtn';
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
              <Logoutbtn />
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
