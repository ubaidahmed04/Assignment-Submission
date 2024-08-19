import React from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';
import { Link } from 'react-router-dom';
import bgImg from '../assets/card-bg.jpg';
import bgImg2 from '../assets/bgImg.webp';
import { FaRegFolder } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
function CardUI() {
  return (
    <div className="mt-3 px-2">
      <Card className="shadow-md rounded-md max-w-sm ">
        <Card.Img variant="top" className='h-1/2' src={bgImg2} />
        <Card.Body>
          <Card.Title className="absolute bottom-28  text-black  fw-bold">Course</Card.Title>
          <Card.Subtitle className="text-muted bottom-20 absolute  text-black font-bold">Batch 1</Card.Subtitle>
          <span className='flex gap-4 justify-end '>
            

          <FaRegFolder size={20} className='cursor-pointer'/>
          <Link to={'/stream'}>
          <FaArrowTrendUp size={20}/>
          </Link>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardUI;
