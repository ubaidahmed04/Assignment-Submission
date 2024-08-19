import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <>
      <Nav variant="underline" defaultActiveKey="/stream" className="mt-[78px] bg-[#B2B7C2]  p-2 overflow-y-auto" justify>
        <Nav.Item>
          <NavLink
            to="/stream"
            className={({ isActive }) =>
              isActive ? "text-black font-bold Nunito border-b-2 border-blue-500" : "text-custom-blue font-bold Nunito"
            }
          >
            Stream
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/classwork"
            className={({ isActive }) =>
              isActive ? "text-black font-bold Nunito border-b-2 border-blue-500" : "text-custom-blue font-bold Nunito"
            }
          >
            Classwork
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/invitepeople"
            className={({ isActive }) =>
              isActive ? "text-black font-bold Nunito border-b-2 border-blue-500" : "text-custom-blue font-bold Nunito"
            }
          >
            People
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/marks"
            className={({ isActive }) =>
              isActive ? "text-custom-blue font-bold Nunito border-b-2 border-blue-500 cursor-not-allowed opacity-50" : "text-custom-blue font-bold Nunito cursor-not-allowed opacity-50"
            }
            onClick={(e) => e.preventDefault()}
          >
            Marks
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default HomeNavbar;
