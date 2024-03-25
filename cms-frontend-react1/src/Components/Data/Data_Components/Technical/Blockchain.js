import React from "react";
import logo from "../../../Images/blockchain_logo.png";

const Blockchain = () => {
  return (
    <>
      {/* <div><img src={logo} alt="" /></div> */}
      <h1>BLOCKCHAIN WING</h1>
      <h2>Blockchain</h2>
      <p>
        <b>
          {" "}
          We have elected to put our money and faith in a mathematical framework
          that is free of politics and human error.
        </b>
        <br />
        We say blockchain is awesome technology.
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
        <a href="webd_materials.pdf" download="blockchain_materials">
          <button id="download">DOWNLOAD</button>
        </a>
      </div>
      <br />
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Blockchain;
