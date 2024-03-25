import React from "react";
import logo from "../../../Images/foss_logo.png";

const Foss = () => {
  return (
    <>
      {/* <div><img src={logo} alt="" /></div> */}
      <h1>FOSS WING</h1>
      <h2>Free Open source software </h2>
      <p>
        <b>
          {" "}
          When we succeed, we succeed because of our individual initiative, but
          also because we do things together.
        </b>
        <br />
        We encourage open source software development.{" "}
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
        <a href="ml_materials.pdf" download="foss_materials">
          <button id="download">DOWNLOAD</button>
        </a>
      </div>
      <br />
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Foss;
