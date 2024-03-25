import React from "react";
import logo from "../../../Images/cp_logo.png";

const CP = () => {
  return (
    <>
      {/* <div><img src={logo} /></div> */}
      <h1>CP WING</h1>
      <h2>Competitive Programming</h2>
      <p>
        A computer is a stupid machine with the ability to do incredibly smart
        things, while computer programmers are smart people with the ability to
        do incredibly stupid things. <br />
        <b>
          {" "}
          Eat.
          <br />
          &nbsp;&nbsp;Sleep.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; Code.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Repeat.
        </b>
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
        <h2>To Download Our study Materials </h2>
        <a href="cp_materials.pdf" download>
          <button id="download">DOWNLOAD</button>
        </a>
      </div>
      <br />
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default CP;
