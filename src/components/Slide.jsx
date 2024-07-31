import React, { useState } from 'react';
import './styles.css';
import TableData from './tableData';
import { Button } from 'react-bootstrap';

function SlideUpComponent() {
  const [isOpen, setIsOpen] = useState(false); // Set initial state to false

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen ? 'Closing' : 'Opening');
  };

  return (
    <div className="slide-up-container">
      <Button className="mb-1 w-full text-xl font-bold cursor-pointer flex justify-between bg-transparent text-black border-none border-3 rounded-0 border-bottom" variant="secondary" onClick={toggleOpen}>
        {/* {isOpen ? 'Close' : 'Open'} */}
        HTML
        <i className={`ms-3 fa-solid fa-caret-${isOpen ? 'up' : 'down'}`}></i>
      </Button>
      <div className={`slide-up-content ${isOpen ? 'open' : ''}`}>
        <TableData />
      </div>
    </div>
  );
}

export default SlideUpComponent;
