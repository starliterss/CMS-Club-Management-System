import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Video from '../Images/covervideo.mp4';
import './Coverpage.css'

const Coverpage = () => {

    useEffect(()=>{
        window.scrollTo({top:200, left: 0, behavior:"smooth"});
    },[]);

  // const divStyle = {
  //   width: "100vw",
  //   height: "100vh",
  //   backgroundSize:"cover",
  //   display: "flex",
  //   flexDirection:"column",
  //   justifyContent:"center",
  //   alignItems:"center",
  // };
  const buttonStyle={
    backgroundColor:"#337c99",
    margin:"20px",
    padding:"6px 10px",
    color:"white",
    borderRadius:"12px",
    fontSize:"1.5rem",
    cursor: "pointer",
  }

  return (
    <div id="cover">
      <video autoPlay loop muted src={Video} />
      <div id="type">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "EXPLORE OUR CLUBS",
          1500, // wait 1s before replacing "Mice" with "Hamsters"
          "CLUB MANAGEMENT SYSTEM",
          1000,
          "~FREE THINKERS...",
          1000,
        ]}
        wrapper="span"
        speed={60}
        style={{ fontSize: "2rem", display: "block", color: "white" }}
        repeat={Infinity}
      />
      <Link to="/home"><button style={buttonStyle} id="coverbutton">EXPLORE &#8594;</button></Link>
      </div>
    </div>
  );
};

export default Coverpage;
