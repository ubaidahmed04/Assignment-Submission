import React, { useState } from 'react';
import './styles.css'
import TableData from './tableData'
import { Button } from 'react-bootstrap';
function SlideUpComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="slide-up-container">
      <Button className='mb-1 mt-3  slide-btn' variant='secondary' onClick={toggleOpen}>
        {isOpen ? `Close` : 'Open'}<i className={`ms-3 fa-solid fa-caret-${isOpen?'up':'down'}`}></i>
      </Button>
      <div className={`slide-up-content ${isOpen ? 'open' : ''}`}>
      <TableData/>
      </div>
    </div>
    </>
  );
}

export default SlideUpComponent;