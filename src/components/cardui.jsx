import React from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';
import { Link } from 'react-router-dom';
import bgImg from '../assets/card-bg.jpg';
import { FaRegFolder } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
function CardUI() {
  return (
    <div className="mt-3 px-2">
      <Card className="shadow-md max-w-sm ">
        <Card.Img variant="top" className='h-1/2' src={bgImg} />
        <Card.Body>
          <Card.Title className="absolute top-6  text-black  fw-medium">Course</Card.Title>
          <Card.Subtitle className="text-muted absolute top-14 ">Batch 1</Card.Subtitle>
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
