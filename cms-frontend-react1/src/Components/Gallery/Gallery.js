import React,{ useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import img6 from "../Images/gc1.jpg";
import img2 from "../Images/gc2.jpg";
import img1 from "../Images/gc3.jpg";
import img4 from "../Images/gc4.jpg";
import img5 from "../Images/gc5.jpg";
import img3 from "../Images/gc6.jpg";
import back1 from "../Images/gz1.png";
import back2 from "../Images/gt1.jpg";
import back3 from "../Images/ge1.png";
import back4 from "../Images/gen1.png";
import './Gallery.css'

export default function Gallery() {

  const [display1,setDisplay1]=useState({display:"none"})
  const [display2,setDisplay2]=useState({display:"none"})
  const [display3,setDisplay3]=useState({display:"none"})
  const [display4,setDisplay4]=useState({display:"none"})

  const hover1=()=>{
    setDisplay1({display:"block"})
  }
  const hover2=()=>{
    setDisplay2({display:"block"})
  }
  const hover3=()=>{
    setDisplay3({display:"block"})
  }
  const hover4=()=>{
    setDisplay4({display:"block"})
  }

  const hoverout1=()=>{
    setDisplay1({display:"none"})
  }
  const hoverout2=()=>{
    setDisplay2({display:"none"})
  }
  const hoverout3=()=>{
    setDisplay3({display:"none"})
  }
  const hoverout4=()=>{
    setDisplay4({display:"none"})
  }

  return (
    <div className="main_body">
      <div style={{ padding:"6vh 0" }}>
      <Slider images={[img1, img2, img3, img4, img5, img6]} />
      </div>
      <h1>IIIT-Lucknow</h1> <br />
      <br />
      <section id="gallery_section">
        <Link to="cultural">
          <div
            style={{
              background: `url(${back1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={hover1}
            onMouseOut={hoverout1}
          >
            <h1 style={ display1 }>
              +5 <br />
              Cultural Club Gallery
            </h1>
          </div>
        </Link>
        <Link to="technical">
          <div
            style={{
              background: `url(${back2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={hover2}
            onMouseOut={hoverout2}
          >
            <h1 style={ display2 }>
              +5 <br />
              Technical Club Gallery
            </h1>
          </div>
        </Link>
        <Link to="eifer">
          <div
            style={{
              background: `url(${back3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={hover3}
            onMouseOut={hoverout3}
          >
            <h1 style={ display3 }>
              +2 <br />
              Eifer Gallery
            </h1>
          </div>
        </Link>
        <Link to="ecell">
          <div
            style={{
              background: `url(${back4})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={hover4}
            onMouseOut={hoverout4}
          >
            <h1 style={ display4 }>
              +2 <br />
              E-Cell Gallry
            </h1>
          </div>
        </Link>
      </section>
        <article id="gallery_article">
          <Outlet />
        </article>
        <div style={{height:"6vh"}} />
    </div>
  );
}
