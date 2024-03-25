import React from "react";
import logo from "../../../Images/afterdark_logo.jpg";
import ritu from "../../../Images/ritu kumari.jpg";
import mohit from "../../../Images/Mohit Prajapat.jpg";

const Afterdark = () => {
  return (
    <>
        <img src={logo} />
      <h1>AFTERDARK</h1>
      <p>
        <b>
          "What I like about photographs is that they capture a moment that's
          gone forever, impossible to reproduce."
        </b>
        <br /> Afterdark is the Photography club of IIIT Lucknow. XPOSURE'20 is
        an online photography contest. XPOSURE allows you to capture the moments
        of life through lenses. <br />
        The Theme of the FIRST edition (2020) of XPOSURE was: "Portrait",
        "Architecture", or "Street".
      </p>
      Some other events of Afterdark are : <br />
      <ul>
        <li>Photography Workshop</li>
        <li>
          Exposure'21 (Themes - "Architecture", "Vintage" or "Innovative")
        </li>
        <li>ViPHoPedia (Video, Photo, Wikipedia) - Weekly</li>
        <li>Mystical Monsoon</li>
        <li>Pixel Chronicles (In Equinox'23)</li>
        <li>Darpan (In Equinox'23)</li>
        <li>Tranzition (In Equinox'23)</li>
        <li>Memotsav (In Equinox'23)</li>
        <li>Fashion Show (In Equinox'23)</li>
      </ul>
      <h2>CO-ORDINATORS</h2>
      <figure>
        <img src={ritu} />
        <figcaption>Ritu Kumari</figcaption>
      </figure>
      <figure>
        <img src={mohit} />
        <figcaption>Mohit Prajapat</figcaption>
      </figure>
      <h2>SENIOR MEMBERS</h2>
      <ul>
        <li>Alok Ranjan</li>
        <li>Ahmad Maaz</li>
        <li>Navya Yadav</li>
        <li>Karishma Vanwari</li>
        <li>Mohd Zaid</li>
        <li>Nayanjit Sarkar</li>
        <li>Aman Garg</li>
        <li>Rohith N</li>
        <li>Rama Kiran</li>
        <li>Yash Kumar</li>
        <li>Mann</li>
      </ul>
      <h2>TEAM MEMBERS</h2>
      <ul>
        <li>Amartya Maurya</li>
        <li>Aryan Wadhe</li>
        <li>Hima Bindu</li>
        <li>Jitendra Abhiram</li>
        <li>Manan Chawla</li>
        <li>Mazahar Pasha</li>
        <li>Nirnaya Sindhu</li>
        <li>Muskan Rao</li>
        <li>Sahil Singh</li>
        <li>Samarth Sharma</li>
        <li>Tejas Sankhla</li>
        <li>Vamshi Krishna</li>
        <li>Vivek Korah</li>
        <li>Perumall Pardhiv</li>
        <li>Lokesh Dandamudi</li>
        <li>G. Udaykumar</li>
        <li>Aditya Sharma</li>
      </ul>
      <button>APPLY TO JOIN CLUB</button>
    </>
  );
};

export default Afterdark;
