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
        <h2>Add Asignment</h2>
        </div>
        <div className="">
        <MyModal/>
            
        </div>

    </div>
    <div className=" d-flex flex-wrap-reverse justify-content-center lg:justify-content-between my-4 p-4 col flex-col gap-4">
        
        <div className=" d-block m-5  px-4 justify-content-between">
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
