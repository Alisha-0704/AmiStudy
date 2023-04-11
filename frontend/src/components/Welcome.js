import React from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
// import About from "./About.js";

function Welcome() {
  const navigate = useNavigate();
  const GotoLogin = () => {
    navigate("/Homepage");
  };
  return (
    <div className="d-flex Main_data">
      <div className="maindata">
        <h1>WELCOME TO AMISTUDY!!</h1>
        <h3>Please Follow These Rules</h3>
        <p>1.Act like a student </p>
        <p>2.Don't spam </p>
        <p>3.Respect others</p>
        <div className="btnAgree">
          <button className="iagreebtn" onClick={GotoLogin}>I Agree!!</button>
        </div>
        
      </div>
      {/* <div>
        <About />
      </div> */}
    </div>
  );
}

export default Welcome;
