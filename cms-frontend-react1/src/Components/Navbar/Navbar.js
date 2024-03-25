import React,{ useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Darkmode from "../Darkmode/Darkmode";
import "./Navbar.css";

export default function Navbar() {

    const activestyle={
      boxShadow:"inset black 2px 2px 6px",
      backgroundColor:"#c1d3dc",
      // borderRadius: "30px", 
        }
        const location= useLocation();
    const [style1,setStyle1]=useState({})
    const [style2,setStyle2]=useState({})
    const [style3,setStyle3]=useState({})
    const [style4,setStyle4]=useState({})
    const [style5,setStyle5]=useState({})
    // const [active,setActive]=useState(false);
    
    useEffect(()=>{
      if(location.pathname==="/home") {
        setStyle1(activestyle);
        setStyle2();
        setStyle3();
        setStyle4();
        setStyle5();
      }
      if(location.pathname==="/contact"){
        setStyle1();
        setStyle2(activestyle);
        setStyle3();
        setStyle4();
        setStyle5();
      }
      if(location.pathname==="/about"){
        setStyle1();
        setStyle2();
        setStyle3(activestyle);
        setStyle4();
        setStyle5();
      }
      if(location.pathname==="/gallery"){
        setStyle1();
        setStyle2();
        setStyle3();
        setStyle4(activestyle);
        setStyle5();
      }
      if(location.pathname==="/data"){
        setStyle1();
        setStyle2();
        setStyle3();
        setStyle4();
        setStyle5(activestyle);
      }
    },[location])

  return (
    <nav id="navbar">
      <ul id="menu">
        <li>
          <Link to="/home" id="home" style={style1}>Home</Link>
        </li>
        <li>
          <Link to="contact" id="contact" style={style2}>Contact<span style={{color:"transparent"}}>_</span>Us</Link>
        </li>
        <li>
          <Link to="about" id="about" style={style3}>About<span style={{color:"transparent"}}>_</span>Us</Link>
        </li>
        <li>
          <Link to="gallery" id="gallery" style={style4}>Gallery</Link>
        </li>
        <li>
          <Link to="http://localhost:8080/login" target="_blank" id="data" style={style5}>
            Data
          </Link>
        </li>
      </ul>
      <div style={{padding:"4px 4px 0 0"}}><Darkmode /></div>
      {/* <ul class="social">
        <li>
          <Link
            to="https://mail.google.com/a/iiitl.ac.in"
            target="_blank"
            class="fa fa-envelope"
          ></Link>
        </li>
        <li>
          <Link
            to="https://www.facebook.com/Indian-Institute-of-Information-Technology-Lucknow-IIITL-101698791377071"
            target="_blank"
            class="fa fa-facebook"
          ></Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/school/iiitl/"
            class="fa fa-linkedin"
            target="_blank"
          ></Link>
        </li>
        <li>
          <Link
            to="https://twitter.com/iiit_lucknow"
            target="_blank"
            class="fa fa-twitter"
          ></Link>
        </li>
        <li>
          <Link
            to="https://www.instagram.com/iiitlucknow/"
            target="_blank"
            class="fa fa-instagram"
          ></Link>
        </li>
      </ul> */}
    </nav>
  );
}
