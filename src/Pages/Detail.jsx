import React from "react";
import Navigator from "../components/Navigator";
import { Button,Card  } from "react-bootstrap";
import MyModal from '../components/modal'
import SlideUpComponent from "../components/Slide";
import Cardui from "../components/cardui";
import Cardassign from "../components/cardassign";

 function Detail() {

  return (
  <div>
    <Navigator/>
    
    <div className="d-flex justify-content-evenly my-5 align-items-center ">
        <div>
        <h1>Add Asignment</h1>
        </div>
        <div className="">
        <MyModal/>
            
        </div>

    </div>
    <div className="main-data ">
        
        <div className=" m-5  px-4 justify-content-between">
        <span><SlideUpComponent/></span>
        <span ><SlideUpComponent/></span>
        <span><SlideUpComponent/></span>
        <span></span>
        </div>
        <div className="card-data" >
            <Cardassign/>       
        </div>
    </div>
    
    </div>

  )
}

export default Detail;
