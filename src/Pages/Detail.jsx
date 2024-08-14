import React from "react";
import Navigator from "../components/Navigator";
import { Button, Card } from "react-bootstrap";
import MyModal from "../components/modal";
import SlideUpComponent from "../components/Slide";
import Cardui from "../components/cardui";
import Cardassign from "../components/cardassign";
import HomeNavbar from "../components/HomeNavbar";

function Detail() {
  return (
    <div className="">

        <HomeNavbar/>
      <div className="flex justify-evenly  my-5 align-items-center ">
        <div>
          <h1>Add Asignment</h1>
        </div>
        <div className="">
          <MyModal />
        </div>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-lg-9">
            <SlideUpComponent />
            <SlideUpComponent />
            <SlideUpComponent />
          </div>
          <div className="col-lg-3">
            <Cardassign />
          </div>
        </div>
      </section>
      {/* <div className="card-data">
        
      </div> */}
    </div>
  );
}

export default Detail;
