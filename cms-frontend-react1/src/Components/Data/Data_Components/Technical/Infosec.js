import React from "react";
import logo from "../../../Images/infosec_logo.png";

const Infosec = () => {
  return (
    <>
      {/* <div><img src={logo} alt="" /></div> */}
      <h1>INFOSEC WING</h1>
      <h2>Information Security</h2>
      <p>
        <b>
          {" "}
          Security used to be an inconvenience sometimes, but now it's a
          necessity all the time.
        </b>
        <br />
        We protect the world by hacking it.
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
        <a href="cp_materials.pdf" download="infosec_materials">
          <button id="download">DOWNLOAD</button>
        </a>
      </div>
      <br />
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Infosec;
