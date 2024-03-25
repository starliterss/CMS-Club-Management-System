import React from "react";
import logo from "../../../Images/design_logo.png";

const Design = () => {
  return (
    <>
      {/* <div><img src={logo} alt="" /></div> */}
      <h1>DESIGN WING</h1>
      <h2>Design</h2>
      <p>
        <b>
          {" "}
          Design is an art.
          <br /> &nbsp;&nbsp; Design can be aesthetics.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; Design is so simple, that's why its so
          complicated.
        </b>
        <br />
        We design your mind.
      </p>

      <h2>CO-ORDINATOR</h2>
      <ul>
        <li>
          <b>Sambhav Jain</b>
        </li>
      </ul>

      <h2>SENIOR MEMBERS</h2>
      <ul>
        <li>Anshul Garg</li>
        <li>Ishan Sharma</li>
        <li>Nipun Topno</li>
        <li>Nishan Singh </li>
        <li>Karanjeet Talwar</li>
        <li>Yogesh Kumar</li>
      </ul>

      <h2>TEAM MEMBERS</h2>
      <ul>
        <li>Tejas Taneja</li>
        <li>Abhinav Arora</li>
        <li>Preetish Patel</li>
        <li>Aditya Agrawal</li>
        <li>Ankit Kumar</li>
        <li>Prabhav Agrawal</li>
        <li>Satyabrat</li>
        <li>Akshay Upadhyay</li>
      </ul>
      <div class="materials">
        <h2>To Download Our study Materials</h2>
        <a href="design_materials.pdf" download>
          <button id="download">DOWNLOAD</button>
        </a>
      </div>
      <br />
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Design;
